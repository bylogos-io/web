import { getAgent } from "@/lib/rag.agent";
//import { LangChainAdapter } from "ai";
import { toBaseMessages, toUIMessageStream } from '@ai-sdk/langchain';
import { createUIMessageStreamResponse, UIMessage } from 'ai';
import { AIMessageChunk } from "@langchain/core/messages";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    console.log("---> ~ POST ~ Input Messages:", JSON.stringify(messages, null, 2));
    
    const agent = await getAgent();
    // Convert to LangChain format
    const langchainMessages = await toBaseMessages(messages);
    
    // Log converted messages to see what the agent actually receives
    console.log("---> ~ POST ~ Agent Messages:", JSON.stringify(langchainMessages, null, 2));

    const stream = await agent.streamEvents(
      { messages: langchainMessages },
      { version: "v2" },
    );

    // Create a simple text stream that yields AIMessageChunks
    // This ensures only the final text reaches the client, keeping history clean
    const textStream = async function* () {
      for await (const event of stream) {
        if (event.event === "on_chat_model_stream" && event.data.chunk?.content) {
          const content = event.data.chunk.content;
          if (typeof content === "string" && content.length > 0) {
            yield new AIMessageChunk({ content });
          }
        }
      }
    };

    return createUIMessageStreamResponse({
      stream: toUIMessageStream(textStream()),
    });

  } catch (error) {
    console.error("❌ [Server Action] Error in sendChatRequest:", error);
    return new Response(
      JSON.stringify({ error: "Error processing request" }),
      { status: 500 },
    );
  }
}