import { getAgent } from "./src/services/RagAgent";

async function testAgent() {
    try {
        console.log("Initializing agent...");
        const agent = await getAgent();
        console.log("Agent initialized. Sending message...");
        const response = await agent.invoke({ messages: [{ role: "user", content: "hola" }] });
        console.log("Response:", JSON.stringify(response, null, 2));
    } catch (error) {
        console.error("Test failed:", error);
    }
}

testAgent();
