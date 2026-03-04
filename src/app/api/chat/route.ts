import { getAgent } from '@/services/RagAgent';
import { HumanMessage, AIMessage } from '@langchain/core/messages';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        {
          status: 400,
        },
      );
    }

    const agent = await getAgent();

    // Conversión manual a formato LangChain para evitar fallos de toBaseMessages
    const langchainMessages = messages.map((m: any) => {
      if (m.role === 'user') return new HumanMessage(m.content);
      if (m.role === 'assistant') return new AIMessage(m.content);
      return new HumanMessage(m.content);
    });

    // Invocación única en lugar de streaming
    const response = await agent.invoke({ messages: langchainMessages });

    // Extraer el contenido del último mensaje generado por el agente
    const lastMessage = response.messages[response.messages.length - 1];

    // El contenido puede ser un string o un array de partes
    const content =
      typeof lastMessage.content === 'string'
        ? lastMessage.content
        : Array.isArray(lastMessage.content)
          ? lastMessage.content.map((p: any) => p.text || '').join('')
          : '';

    // Devolvemos el mensaje en un formato que el frontend pueda procesar.
    return new Response(
      JSON.stringify({
        id: crypto.randomUUID(),
        role: 'assistant',
        content: content,
        createdAt: new Date(),
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('❌ [Server Action] Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'Error processing request' }), {
      status: 500,
    });
  }
}
