import { getAgent } from '@/services/RagAgent';
import { HumanMessage, AIMessage } from '@langchain/core/messages';
import { getPostHogClient } from '@/lib/posthog-server';

export const maxDuration = 60;

export async function POST(req: Request) {
  const distinctId = req.headers.get('X-POSTHOG-DISTINCT-ID') ?? 'anonymous';
  const sessionId = req.headers.get('X-POSTHOG-SESSION-ID') ?? undefined;

  try {
    const body = await req.json();
    const { messages, context, locale } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        {
          status: 400,
        },
      );
    }

    const agent = await getAgent();

    // Conversión manual a formato LangChain
    const langchainMessages = messages.map((m: any) => {
      if (m.role === 'user') return new HumanMessage(m.content);
      if (m.role === 'assistant') return new AIMessage(m.content);
      return new HumanMessage(m.content);
    });

    const languageByLocale: Record<string, string> = {
      es: 'español',
      en: 'English',
      pt: 'português',
    };

    const selectedLanguage = languageByLocale[locale] || languageByLocale.es;

    langchainMessages.unshift(
      new HumanMessage(
        `[INSTRUCCIÓN DEL SISTEMA] Debes responder completamente en ${selectedLanguage}. Mantén ese idioma en todo el mensaje, incluyendo saludo, explicación y CTA.`,
      ),
    );

    // Inyectar contexto de la página si existe
    if (context) {
      langchainMessages.unshift(new HumanMessage(`[CONTEXTO DEL SISTEMA] El usuario está actualmente viendo la página: ${context}. Por favor, prioriza la información relacionada con esta sección si es relevante para su pregunta.`));
    }

    // Invocación única
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

    const posthog = getPostHogClient();
    posthog.capture({
      distinctId,
      event: 'chat_api_completed',
      properties: {
        locale,
        message_count: messages.length,
        has_context: !!context,
        ...(sessionId && { $session_id: sessionId }),
      },
    });

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

    const posthog = getPostHogClient();
    posthog.capture({
      distinctId,
      event: 'chat_api_error',
      properties: {
        error: error instanceof Error ? error.message : String(error),
      },
    });

    return new Response(JSON.stringify({ error: 'Error processing request' }), {
      status: 500,
    });
  }
}
