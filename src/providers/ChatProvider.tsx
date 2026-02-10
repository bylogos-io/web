"use client";

import React, { createContext, useContext } from "react";
import { useChat } from "@ai-sdk/react";

interface ChatContextType {
  messages: any[];
  sendMessage: (data: { text: string }) => Promise<void>;
  status: string;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { messages, sendMessage, status } = useChat();

  return (
    <ChatContext.Provider value={{ messages, sendMessage, status }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
