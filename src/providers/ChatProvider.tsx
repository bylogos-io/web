'use client';

import React, { createContext, useContext, useState } from 'react';

interface ChatContextType {
  messages: any[];
  sendMessage: (data: { text: string }) => Promise<void>;
  status: 'idle' | 'submitted' | 'streaming' | 'ready';
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'submitted' | 'streaming' | 'ready'
  >('idle');

  const sendMessage = async ({ text }: { text: string }) => {
    if (!text.trim()) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setStatus('submitted');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            id: m.id || crypto.randomUUID(),
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();

      const assistantMessage = {
        id: data.id || crypto.randomUUID(),
        role: 'assistant',
        content: data.content || data.message,
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setStatus('ready');
    } catch (error) {
      console.error('Error in sendMessage:', error);
      setStatus('idle');
      throw error;
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, status }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
