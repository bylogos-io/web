import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { SystemMessage } from "@langchain/core/messages";
import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";

// Importamos la documentación generada por Velite
import { docs as veliteDocs } from "@/velite";

let agentInstance: any = null;

export const getAgent = async () => {
  if (agentInstance) {
    return agentInstance;
  }

  const openAiApiKey = process.env.OPENAI_API_KEY;
  if (!openAiApiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  // Implementación Óptima: gpt-4o-mini
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    apiKey: openAiApiKey,
    temperature: 0,
  });

  // carga embeddings
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-large",
    apiKey: openAiApiKey,
  });

  // carga vector store
  const vectorStore = new MemoryVectorStore(embeddings);

  // 1. CARGA DE DATOS (Velite - Docs as Code)
  // En lugar de hacer scraping, leemos el JSON local generado.
  const docs: Document[] = veliteDocs.map((doc) => {
    return new Document({
      pageContent: doc.raw, // Texto plano (más eficiente para RAG)
      metadata: {
        source: `/docs/${doc.slug}`,
        title: doc.title,
        description: doc.description,
      },
    });
  });

  // 2. SPLITTING
  // Dividimos el contenido aunque venga de Velite, por si hay documentos muy largos.
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const allSplits = await splitter.splitDocuments(docs);

  // 3. INDEXING
  await vectorStore.addDocuments(allSplits);

  // 4. RETRIEVAL TOOL
  const retrieveSchema = z.object({ query: z.string() });

  const retrieve = tool(
    async ({ query }: { query: string }) => {
      const retrievedDocs = await vectorStore.similaritySearch(query, 3); // Aumentamos a 3 resultados
      const serialized = retrievedDocs
        .map(
          (doc: Document) =>
            `Title: ${doc.metadata.title}\nSource: ${doc.metadata.source}\nContent: ${doc.pageContent}`,
        )
        .join("\n\n");
      return serialized;
    },
    {
      name: "retrieve",
      description:
        "Retrieve information from the official LogOS documentation.",
      schema: retrieveSchema,
      responseFormat: "content_and_artifact",
    },
  );

  const tools = [retrieve];

  const systemPrompt = new SystemMessage(
    "Eres LogOS AI, el asistente oficial de la plataforma LogOS. Tu objetivo es ayudar exclusivamente con temas relacionados a la plataforma." +
    "\n\nDIRECTRICES DE RESPUESTA:" +
    "\n1. Identidad y Saludos: Puedes responder saludos cordiales e identificarte como LogOS AI. Explica que tu función es asistir con la documentación de LogOS." +
    "\n2. Búsqueda Obligatoria: Para cualquier consulta sobre LogOS (hardware, protocolos, configuración), DEBES usar siempre 'retrieve'." +
    "\n3. Rigidez Externa: Si te preguntan por temas ajenos a LogOS (ej. Google, clima, cultura general), responde amablemente que solo tienes información sobre la plataforma LogOS." +
    "\n4. Fallos de Contexto: Si 'retrieve' no devuelve información para un tema de LogOS, indica que esa información específica no está en la documentación oficial, pero no inventes datos."
  );

  // 5. AGENT CREATION
  agentInstance = createAgent({
    model,
    systemPrompt,
    tools,
  });

  return agentInstance;
};
