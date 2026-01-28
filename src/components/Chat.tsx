'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
//import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, LogOut, ArrowLeft } from 'lucide-react';
//import Logo from './ui/logo';
import ReactMarkdown from 'react-markdown';
import { useChat } from '@ai-sdk/react';
import Link from 'next/link';
import Image from 'next/image';
import Logos from "@public/icon.svg";
import { motion } from "framer-motion";

// type Message = {
//   role: 'user' | 'assistant';
//   content: string;
// };

const Chat = () => {
  const [input, setInput] = useState<string>('');
  //const [messages, setMessages] = useState<Message[]>([])
  const { messages, sendMessage, status } = useChat();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll to bottom when messages change or update (streaming)
  useEffect(() => {
    scrollToBottom();
  }, [messages, messages[messages.length - 1]?.parts]);

  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage({ text: input })
      .then(() => setInput(''))
      .catch((error: any) =>
        console.error('❌ [Server Action] Error in chat.tsx:', error)
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
    <div className='flex h-screen bg-background'>
      {/* Main Chat Area */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <div className='border-b border-border p-4'>
          <div className='flex items-center justify-between'>
            {/* <Logo mode='dark' /> */}
            <Link rel="icon" href="/" className="self-start">
              <div className="flex items-center gap-2 justify-center hover:text-primary transition-all duration-200">
                <ArrowLeft className="w-5 h-5" />
                Volver al inicio
              </div>
            </Link>
                 <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e16e0920] border-1 p-1">
                                <Image src={Logos} alt="Logos Logo" />
                            </div>
            {/* <a
              href='/auth/logout'
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary h-10 w-10 text-secondary-foreground hover:bg-secondary/80'
            >
              <LogOut className='w-5 h-5' />
            </a> */}
          </div>
        </div>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Chatbot</span> <span className="text-primary text-disabled">de logOS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">¡Pregunta lo que desees saber sobre logOS!</p>
        </motion.div>

        {/* Messages */}
        <ScrollArea
          className='flex-1 p-4'
        >
          <div className='max-w-3xl mx-auto space-y-6'>
            {messages.map((message: any, index: number) => (
              <div
                key={index}
                className={message.role === 'user' ? 'flex justify-end gap-4' : 'flex justify-start gap-4'}
              >
                <div className='flex space-y-2'>
                  <div
                    className={
                      message.role === 'user'
                        ? 'bg-primary px-6 py-2 rounded-[25px] w-fit text-white text-right'
                        : 'px-6 py-2 rounded-[25px] w-fit text-left'
                    }
                  >
                    <ReactMarkdown
                      components={{
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc list-inside ml-4 my-2 space-y-1" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="list-decimal list-inside ml-4 my-2 space-y-1" {...props} />
                        ),
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        strong: ({ node, ...props }) => (
                          <strong className="font-bold text-primary" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                            <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700" {...props} />
                        ),
                        p: ({ node, ...props }) => <p className="mb-2 leading-relaxed" {...props} />,
                        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-bold my-3" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-lg font-bold my-2" {...props} />,
                      }}
                    >
                      {message.parts.map((part: any) => (part.type === 'text' ? part.text : '')).join('')}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className='border-t border-border p-4'>
          <div className='max-w-3xl mx-auto'>
            <div className='relative'>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey && !!input.trim()) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder='Pregunta lo que desees saber sobre logOS...'
                className='pr-12 py-3 min-h-[48px]'
              />
              <Button
                onClick={handleSend}
                size='icon'
                className='absolute right-1 top-1'
                disabled={!input.trim()}
              >
                <Send className='w-4 h-4' />
              </Button>
            </div>
            <div className='text-xs text-muted-foreground mt-2 text-center'>
              La IA puede cometer errores. Considere verificar información importante.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
