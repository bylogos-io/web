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

    const openrouterApiKey = process.env.OPENROUTER_API_KEY;
    if (!openrouterApiKey) {
        throw new Error("OPENROUTER_API_KEY is not set");
    }

    // const openAiApiKey = process.env.OPENAI_API_KEY;
    // if (!openAiApiKey) {
    //   throw new Error('OPENAI_API_KEY is not set');
    // }

    // Implementación Óptima: gpt-4o-mini
    // const model = new ChatOpenAI({
    //   model: "gpt-4o-mini",
    //   apiKey: openAiApiKey,
    //   temperature: 0,
    // });

    // Implementación con OpenRouter
    const model = new ChatOpenAI({
        model: "openai/gpt-4o-mini",
        temperature: 0,
        apiKey: openrouterApiKey,
        configuration: {
            baseURL: "https://openrouter.ai/api/v1",
            defaultHeaders: {
                "HTTP-Referer": "https://www.bylogos.io", // Opcional, para el ranking de OpenRouter
                "X-OpenRouter-Title": "Logos Cloud Agent", // Opcional
            },
        },
    });

    // carga embeddings
    const embeddings = new OpenAIEmbeddings({
        model: "text-embedding-3-large",
        apiKey: openrouterApiKey,
        configuration: {
            baseURL: "https://openrouter.ai/api/v1",
        },
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
            description: "Retrieve information from the official LogOS documentation.",
            schema: retrieveSchema,
            responseFormat: "content_and_artifact",
        },
    );

    const tools = [retrieve];

    const systemPrompt = new SystemMessage(
        "Eres LogOS, el asistente oficial de la plataforma LogOS. Tu objetivo es ayudar exclusivamente con temas relacionados a la plataforma." +
            "\n\nREGLAS DE RESPUESTA Y FLUJO:" +
            "\n1. Primera Interacción (Saludo Obligatorio): Si es el primer mensaje de la conversación, DEBES saludar cordialmente, identificarte como LogOS y usar el tool 'retrieve' para responder técnicamente a la consulta. Ejemplo: '¡Hola! Soy LogOS... [información técnica del retrieve]'" +
            "\n2. Uso de 'retrieve': Para CUALQUIER consulta técnica (qué es, hardware, protocolos), usa SIEMPRE 'retrieve' antes de responder." +
            "\n3. Mensajes Posteriores: En el segundo mensaje en adelante, ve directamente a la respuesta técnica solicitada sin repetir el saludo inicial o tu identidad, para mantener la fluidez." +
            "\n4. Rigidez de Alcance: Solo responde sobre LogOS. Si consultan temas ajenos, indica amablemente que tu especialidad es exclusivamente LogOS.",
    );

    // 5. AGENT CREATION
    agentInstance = createAgent({
        model,
        systemPrompt,
        tools,
    });

    return agentInstance;
};
