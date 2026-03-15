"use client";
import { useState, useEffect, useRef } from "react";
// MUI Icons - Outlined version
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ReactMarkdown from "react-markdown";
import { useChatContext } from "@/providers/ChatProvider";
import Link from "next/link";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { motion } from "framer-motion";
import { Box, TextField, Typography, alpha, IconButton } from "@mui/material";
import { CopyButton } from "@/components/CopyButton";

const Chat = () => {
    const [input, setInput] = useState<string>("");
    const { messages, sendMessage, status } = useChatContext();
    const isLoading = status === "streaming" || status === "submitted";

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const lastMessageParts = messages[messages.length - 1]?.parts;

    useEffect(() => {
        scrollToBottom();
    }, [messages, lastMessageParts]);

    const handleSend = () => {
        if (!input.trim() || isLoading) return;

        sendMessage({ text: input })
            .then(() => setInput(""))
            .catch((error: any) => console.error("❌ [Server Action] Error in chat.tsx:", error));
    };

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                bgcolor: "background.default",
            }}
        >
            {/* Main Chat Area */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <Box
                    sx={(theme) => ({
                        p: 2,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    })}
                >
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                                "&:hover": { color: "primary.main" },
                                transition: "color 0.2s",
                            }}
                        >
                            <ArrowBackOutlinedIcon sx={{ fontSize: 20 }} />
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                Volver al inicio
                            </Typography>
                        </Box>
                    </Link>
                    <Box
                        sx={(theme) => ({
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            p: 0.5,
                        })}
                    >
                        <Image src={Logos} alt="LogOS Logo" width={32} height={32} />
                    </Box>
                </Box>

                {messages.length === 0 && (
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: "center", mb: 8, mt: 8 }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                mb: 1,
                                fontWeight: 700,
                            }}
                        >
                            <Box
                                component="span"
                                sx={(theme) => ({
                                    background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                })}
                            >
                                Chatbot
                            </Box>{" "}
                            <Box component="span" sx={{ color: "primary.main" }}>
                                de LogOS
                            </Box>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
                        >
                            Pregunta lo que desees saber sobre LogOS!
                        </Typography>
                    </Box>
                )}

                {/* Messages */}
                <Box sx={{ flex: 1, p: 4, overflowY: "auto" }}>
                    <Box sx={{ maxWidth: 800, mx: "auto" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                            {messages.map((message: any, index: number) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: message.role === "user" ? "flex-end" : "flex-start",
                                        gap: 2,
                                    }}
                                >
                                    {message.role !== "user" && (
                                        <Box
                                            sx={(theme) => ({
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                border: `1px solid ${theme.palette.divider}`,
                                                p: 0.5,
                                                flexShrink: 0,
                                                alignSelf: "flex-start",
                                                mt: 0.5,
                                                overflow: "hidden",
                                            })}
                                        >
                                            <Image src={Logos} alt="LogOS" width={24} height={24} />
                                        </Box>
                                    )}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            maxWidth: "80%",
                                            gap: 1,
                                        }}
                                    >
                                        <Box
                                            sx={(theme) => ({
                                                bgcolor: message.role === "user" ? "primary.main" : "background.paper",
                                                color:
                                                    message.role === "user" ? "primary.contrastText" : "text.primary",
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: 2,
                                                border:
                                                    message.role === "user"
                                                        ? "none"
                                                        : `1px solid ${theme.palette.divider}`,
                                                boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.1)}`,
                                            })}
                                        >
                                            <ReactMarkdown
                                                components={{
                                                    ul: ({ node, ...props }) => (
                                                        <ul
                                                            style={{ paddingLeft: "20px", margin: "8px 0" }}
                                                            {...props}
                                                        />
                                                    ),
                                                    ol: ({ node, ...props }) => (
                                                        <ol
                                                            style={{ paddingLeft: "20px", margin: "8px 0" }}
                                                            {...props}
                                                        />
                                                    ),
                                                    li: ({ node, ...props }) => (
                                                        <li style={{ marginBottom: "4px" }} {...props} />
                                                    ),
                                                    strong: ({ node, ...props }) => (
                                                        <Typography
                                                            component="strong"
                                                            sx={(theme) => ({
                                                                fontWeight: 700,
                                                                color:
                                                                    message.role === "user"
                                                                        ? "inherit"
                                                                        : theme.palette.primary.main,
                                                            })}
                                                            {...props}
                                                        />
                                                    ),
                                                    a: ({ node, ...props }) => (
                                                        <Box
                                                            component="a"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={(theme) => ({
                                                                color:
                                                                    message.role === "user"
                                                                        ? "inherit"
                                                                        : theme.palette.primary.main,
                                                                textDecoration: "underline",
                                                            })}
                                                            {...props}
                                                        />
                                                    ),
                                                    p: ({ node, ...props }) => (
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                mb: 1.5,
                                                                "&:last-child": { mb: 0 },
                                                                lineHeight: 1.6,
                                                            }}
                                                            {...props}
                                                        />
                                                    ),
                                                    h1: ({ node, ...props }) => (
                                                        <Typography
                                                            variant="h5"
                                                            sx={{ my: 2, fontWeight: 700 }}
                                                            {...props}
                                                        />
                                                    ),
                                                    h2: ({ node, ...props }) => (
                                                        <Typography
                                                            variant="h6"
                                                            sx={{ my: 1.5, fontWeight: 700 }}
                                                            {...props}
                                                        />
                                                    ),
                                                }}
                                            >
                                                {message.parts
                                                    ? message.parts
                                                          .map((part: any) => (part.type === "text" ? part.text : ""))
                                                          .join("")
                                                    : message.content}
                                            </ReactMarkdown>
                                        </Box>
                                        {message.role !== "user" && (
                                            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
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
                                            </Box>
                                        )}
                                    </Box>
                                    {message.role === "user" && (
                                        <Box
                                            sx={(theme) => ({
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                                color: "primary.main",
                                                flexShrink: 0,
                                                alignSelf: "flex-start",
                                                mt: 0.5,
                                            })}
                                        >
                                            <PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />
                                        </Box>
                                    )}
                                </Box>
                            ))}
                            {isLoading && (
                                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
                                    <Box
                                        sx={(theme) => ({
                                            display: "flex",
                                            gap: 0.5,
                                            p: 2,
                                            bgcolor: alpha(theme.palette.action.hover, 0.05),
                                            borderRadius: 2,
                                            width: "fit-content",
                                        })}
                                    >
                                        {[0, 1, 2].map((item) => (
                                            <Box
                                                key={item}
                                                component={motion.div}
                                                animate={{ opacity: [0.4, 1, 0.4], y: [0, -2, 0] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.2,
                                                    delay: item * 0.15,
                                                }}
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    bgcolor: "primary.main",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <div ref={messagesEndRef} />
                        </Box>
                    </Box>
                </Box>

                {/* Input Area */}
                <Box
                    sx={(theme) => ({
                        p: 2,
                        borderTop: `1px solid ${theme.palette.divider}`,
                    })}
                >
                    <Box sx={{ maxWidth: 800, mx: "auto" }}>
                        <TextField
                            fullWidth
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey && !!input.trim() && !isLoading) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder="Pregunta lo que desees saber sobre LogOS..."
                            disabled={isLoading}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            aria-label="Enviar mensaje"
                                            onClick={handleSend}
                                            disabled={!input.trim() || isLoading}
                                            color="primary"
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "8px",
                                            }}
                                        >
                                            <SendOutlinedIcon sx={{ fontSize: 20 }} />
                                        </IconButton>
                                    ),
                                },
                            }}
                        />
                        <Typography
                            variant="caption"
                            display="block"
                            sx={{ mt: 1, textAlign: "center", color: "text.secondary" }}
                        >
                            La IA puede cometer errores. Considere verificar información importante.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Chat;
