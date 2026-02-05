"use client";

import { useState, useRef, useEffect } from "react";
import { useChatContext } from "@/components/chat-provider";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Maximize2, Send, MessageCircle, X, User } from "lucide-react";
import Image from "next/image";
import Logos from "@public/icon.svg";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChatContext();
  const isLoading = status === "streaming" || status === "submitted";
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // No mostrar el widget si estamos en la página de chat (se comprueba en el render)
  const isChatPage = pathname === "/chat" || pathname === "/chat/";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, messages[messages.length - 1]?.parts]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Guardamos el input actual y limpiamos el estado
    const currentInput = input;
    setInput("");

    try {
      await sendMessage({ text: currentInput });
    } catch (error) {
      console.error("Error sending message:", error);
      // Aquí podrías restaurar el input si falla, opcionalmente
      // setInput(currentInput);
    }
  };

  if (isChatPage) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[380px] h-[600px] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header Tipo Contacto */}
            <div className="bg-secondary/30 p-3 border-b border-border flex items-center justify-between">
              {/* Izquierda: Avatar + Nombre */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e16e0920] border border-border p-1 overflow-hidden relative">
                  <Image
                    src={Logos}
                    alt="Logos Logo"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">LogOS</h3>
                  <p className=" text-green-500 text-[10px]">● En línea</p>
                </div>
              </div>

              {/* Derecha: Botones de Acción */}
              <div className="flex items-center gap-1">
                <Link href="/chat">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                    title="Pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Body (Messages) */}
            <ScrollArea className="flex-1 p-4 bg-background/50">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                  <MessageCircle className="w-10 h-10 mb-2 opacity-20" />
                  <p className="text-sm">
                    ¡Hola! Soy el asistente virtual de LogOS.
                  </p>
                  <p className="text-xs mt-1">
                    Pregúntame sobre LogOS, funcionalidades,protocolos o
                    monitoreo.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message: any, index: number) => (
                    <div
                      key={index}
                      className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role !== "user" && (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#e16e0920] border border-border p-0.5 shrink-0 overflow-hidden relative self-start mt-1">
                          <Image
                            src={Logos}
                            alt="LogOS"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <ReactMarkdown
                          components={{
                            ul: ({ node, ...props }) => (
                              <ul
                                className="list-disc list-inside ml-2 my-1 space-y-1"
                                {...props}
                              />
                            ),
                            ol: ({ node, ...props }) => (
                              <ol
                                className="list-decimal list-inside ml-2 my-1 space-y-1"
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
                              <p
                                className="mb-2 last:mb-0 leading-relaxed"
                                {...props}
                              />
                            ),
                            h1: ({ node, ...props }) => (
                              <h1
                                className="text-lg font-bold my-2"
                                {...props}
                              />
                            ),
                            h2: ({ node, ...props }) => (
                              <h2
                                className="text-base font-bold my-2"
                                {...props}
                              />
                            ),
                            h3: ({ node, ...props }) => (
                              <h3
                                className="text-sm font-bold my-1"
                                {...props}
                              />
                            ),
                          }}
                        >
                          {/* Replicamos la lógica de Chat.tsx para renderizar parts */}
                          {message.parts
                            ? message.parts
                                .map((part: any) =>
                                  part.type === "text" ? part.text : "",
                                )
                                .join("")
                            : message.content}
                        </ReactMarkdown>
                        {message.role !== "user" && (
                          <div className="flex justify-start mt-1 border-t border-border/10 pt-1">
                            <CopyButton
                              text={
                                message.parts
                                  ? message.parts
                                      .map((part: any) =>
                                        part.type === "text" ? part.text : "",
                                      )
                                      .join("")
                                  : message.content
                              }
                            />
                          </div>
                        )}
                      </div>

                      {message.role === "user" && (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0 text-primary self-start mt-1">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-secondary/50 rounded-2xl px-4 py-2 flex gap-1 items-center">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              opacity: [0.4, 1, 0.4],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.2,
                              delay: i * 0.15,
                            }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </ScrollArea>

            {/* Input Footer */}
            <div className="p-3 border-t border-border bg-background">
              <div className="relative flex items-center">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Escribe un mensaje..."
                  className="pr-10 py-5 bg-secondary/20 border-secondary-foreground/10 focus-visible:ring-primary/20"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="absolute right-1 w-8 h-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-1 text-center">
                <span className="text-[10px] text-muted-foreground">
                  IA puede cometer errores.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button - Solo visible si el chat está CERRADO */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg flex items-center justify-center transition-colors"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
