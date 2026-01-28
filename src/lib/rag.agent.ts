import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
//import "cheerio";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { SystemMessage } from "@langchain/core/messages";
//import { MemorySaver } from '@langchain/langgraph';
import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";

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
  // Costo: ~30x más barato que GPT-4o.
  // Velocidad: Mucho más rápido (menor latencia).
  // Capacidad: Suficiente para RAG de documentos corporativos estándar.
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    apiKey: openAiApiKey,
    temperature: 0, // Temperatura 0 para respuestas más deterministas y fieles al contexto
  });

  // carga embeddings

  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-large",
    apiKey: openAiApiKey,
  });

  // carga vector store

  const vectorStore = new MemoryVectorStore(embeddings);

  // urls de documentos
  const urls = [
    "https://www.bylogos.io/privacy/",
    "https://www.bylogos.io/terms/",
    "https://www.bylogos.io/",
  ];

  // Selector optimizado para leer todo el contenido relevante de texto
  // Incluye encabezados, párrafos y listas para no perder estructura importante
  const pTagSelector = "p, h1, h2, h3, h4, h5, h6, li, blockquote, span";
  const docs: Document[] = [];

  for (const url of urls) {
    const cheerioLoader = new CheerioWebBaseLoader(url, {
      selector: pTagSelector,
    });
    const loadedDocs = await cheerioLoader.load();
    docs.push(...loadedDocs);
  }

  // divide documentos

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const allSplits = await splitter.splitDocuments(docs);

  // almacenamiento de documentos

  await vectorStore.addDocuments(allSplits);

  // esquema de recuperacion

  const retrieveSchema = z.object({ query: z.string() });

  // tool de agente

  const retrieve = tool(
    async ({ query }: { query: string }) => {
      const retrievedDocs = await vectorStore.similaritySearch(query, 2);
      const serialized = retrievedDocs
        .map(
          (doc: Document) =>
            `Source: ${doc.metadata.source}\nContent: ${doc.pageContent}`,
        )
        .join("\n");
      return serialized;
    },
    {
      name: "retrieve",
      description: "Retrieve information related to a query.",
      schema: retrieveSchema,
      responseFormat: "content_and_artifact",
    },
  );

  const tools = [retrieve];
  const systemPrompt = new SystemMessage(
    "Tienes acceso a una herramienta (RAG Agent) que recupera el contexto de una publicación de blog. " +
      "Usa la herramienta para ayudar a responder las consultas del usuario." +
      "Si no tienes la respuesta en el contexto, responde que solo tienes acceso a la información del contexto. Y responde que no tienes la respuesta disponible.",
  );

  // memoria
  //const checkpointer = new MemorySaver();

  // agente
  agentInstance = createAgent({
    model,
    systemPrompt,
    tools,
    //checkpointer,
  });

  return agentInstance;
};
