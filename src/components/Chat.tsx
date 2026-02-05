"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
//import { toast } from '@/hooks/use-toast';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, LogOut, ArrowLeft, User } from "lucide-react";
//import Logo from './ui/logo';
import ReactMarkdown from "react-markdown";
import { useChatContext } from "@/components/chat-provider";
import Link from "next/link";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { motion } from "framer-motion";
import { CopyButton } from "@/components/copy-button";

// type Message = {
//   role: 'user' | 'assistant';
//   content: string;
// };

const Chat = () => {
  const [input, setInput] = useState<string>("");
  const { messages, sendMessage, status } = useChatContext();
  console.log("🚀 ~ Chat ~ messages:", messages);
  console.log("🚀 ~ Chat ~ status:", status);
  const isLoading = status === "streaming" || status === "submitted";
  console.log("🚀 ~ Chat ~ isLoading:", isLoading);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll to bottom when messages change or update (streaming)
  useEffect(() => {
    scrollToBottom();
  }, [messages, messages[messages.length - 1]?.parts]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    sendMessage({ text: input })
      .then(() => setInput(""))
      .catch(
        (error: any) =>
          console.error("❌ [Server Action] Error in chat.tsx:", error),
        // toast({
        //   title: 'Error',
        //   description: 'Failed to send message',
        //   variant: 'destructive',
        // })
      );

    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { role: "user", content: input },
    // ])

    // toast({
    //   title: "TODO",
    //   description: "Implement AI agent",
    // })

    //setInput('');
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}

        <div className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <Link rel="icon" href="/">
              <div className="flex items-center gap-2 justify-center hover:text-primary transition-all duration-200">
                <ArrowLeft className="w-5 h-5" />
                Volver al inicio
              </div>
            </Link>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e16e0920] border-1 p-1">
              <Image src={Logos} alt="Logos Logo" />
            </div>
          </div>
        </div>

        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-2 mt-4">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">
                Chatbot
              </span>{" "}
              <span className="text-primary text-disabled">de logOS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">
              ¡Pregunta lo que desees saber sobre logOS!
            </p>
          </motion.div>
        )}
        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message: any, index: number) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end gap-4"
                    : "flex justify-start gap-4"
                }
              >
                {message.role !== "user" && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#e16e0920] border border-border p-1 shrink-0 overflow-hidden self-start mt-1">
                    <Image src={Logos} alt="LogOS" width={24} height={24} />
                  </div>
                )}
                <div className="flex flex-col space-y-2 max-w-[80%]">
                  <div
                    className={
                      message.role === "user"
                        ? "bg-primary px-6 py-2 rounded-[25px] w-fit text-white text-right ml-auto"
                        : "bg-secondary px-6 py-2 rounded-[25px] w-fit text-left mr-auto"
                    }
                  >
                    <ReactMarkdown
                      components={{
                        ul: ({ node, ...props }) => (
                          <ul
                            className="list-disc list-inside ml-4 my-2 space-y-1"
                            {...props}
                          />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol
                            className="list-decimal list-inside ml-4 my-2 space-y-1"
                            {...props}
                          />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="mb-1" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong
                            className="font-bold text-primary"
                            {...props}
                          />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                            {...props}
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p className="mb-2 leading-relaxed" {...props} />
                        ),
                        h1: ({ node, ...props }) => (
                          <h1 className="text-2xl font-bold my-4" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2 className="text-xl font-bold my-3" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3 className="text-lg font-bold my-2" {...props} />
                        ),
                      }}
                    >
                      {message.parts
                        .map((part: any) =>
                          part.type === "text" ? part.text : "",
                        )
                        .join("")}
                    </ReactMarkdown>
                  </div>
                  {message.role !== "user" && (
                    <div className="flex justify-start mt-1">
                      <CopyButton
                        text={message.parts
                          .map((part: any) =>
                            part.type === "text" ? part.text : "",
                          )
                          .join("")}
                      />
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0 text-primary self-start mt-1">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start gap-4">
                <div className="flex gap-1 p-3 bg-secondary/30 rounded-[20px] w-fit">
                  {[0, 1, 2].map((item) => (
                    <motion.div
                      key={item}
                      animate={{ opacity: [0.4, 1, 0.4], y: [0, -2, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        delay: item * 0.15,
                      }}
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !!input.trim() &&
                    !isLoading
                  ) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Pregunta lo que desees saber sobre logOS..."
                className="pr-12 py-3 min-h-[48px]"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="absolute right-1 top-1"
                disabled={!input.trim() || isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              La IA puede cometer errores. Considere verificar información
              importante.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
