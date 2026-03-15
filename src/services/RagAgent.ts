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
        "Eres LogOS, el asistente oficial de la plataforma LogOS. Tu objetivo es ayudar exclusivamente con temas relacionados a la plataforma y servicios de LogOS." +
            "\n\nMISIÓN Y PROPÓSITO:" +
            "\nLogOS es la mejor integración de IA para el IoT Industrial. Nos especializamos en la convergencia IT/OT, adaptando infraestructura analógica a la era de la IA. " +
            "Ayudamos a reducir pérdidas en HH (horas-hombre), optimizamos el control industrial y automatizamos reportes para sectores críticos como Oil & Gas, Energía, Minería y Data Centers." +
            "\n\nINFORMACIÓN DE CONTACTO Y SOPORTE:" +
            "\n- Email: contact@bylogos.io" +
            "\n- LinkedIn: https://www.linkedin.com/company/bylogos/" +
            "\n- Web: https://bylogos.io" +
            "\n\nREGLAS DE RESPUESTA Y FLUJO (CRÍTICO):" +
            "\n1. Conciencia de Contexto: Si el mensaje del sistema indica que el usuario está en una página específica, prioriza la información de esa sección. Por ejemplo, si está en '/pricing', profundiza en modelos de negocio." +
            "\n2. Primera Interacción (Saludo): Saluda cordialmente y preséntate como LogOS. Usa 'retrieve' para dar una respuesta técnica basada en el contexto oficial." +
            "\n3. Instalación y DIY (ESTRICTO): Si preguntan cómo instalarlo, NO hables de más ni des guías técnicas DIY. Dile que el equipo de expertos de LogOS debe realizar o supervisar la integración para garantizar la seguridad industrial. Invítalos SIEMPRE a ponerse en contacto con nosotros." +
            "\n4. Navegación Proactiva: Si la información solicitada está en una página específica de la web (como /industries, /about, /docs, /pricing), incluye SIEMPRE un link directo invitando al usuario a ir allí: 'Puedes ver más detalles instantáneamente en nuestra sección de [Industrias](/industries)'." +
            "\n5. Llamado a la Acción (CTA): Ante cualquier interés comercial, invítalo a escribir a **contact@bylogos.io** recalcando que 'estaremos encantados de ayudarte con tu proyecto'." +
            "\n\nREGLAS DE FORMATO (IMPORTANTE):" +
            "\n- Usa **negrita** para resaltar conceptos clave, correos, links y detalles técnicos." +
            "\n- Utiliza listas para pasos o características." +
            "\n- Usa tablas para comparar datos técnicos." +
            "\n- Mantén párrafos cortos.",
    );

    // 5. AGENT CREATION
    agentInstance = createAgent({
        model,
        systemPrompt,
        tools,
    });

    return agentInstance;
};
