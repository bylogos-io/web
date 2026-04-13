"use client";
import { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";
// MUI Icons - Outlined version
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChatContext } from "@/providers/ChatProvider";
import Link from "next/link";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { motion } from "framer-motion";
import {
    Box,
    TextField,
    Typography,
    alpha,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import EmailIcon from "@mui/icons-material/Email";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CopyButton } from "@/components/CopyButton";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

const TypedMessage = ({ content, role }: { content: string; role: string }) => {
    const [displayedContent, setDisplayedContent] = useState(role === "user" ? content : "");
    const [isTyping, setIsTyping] = useState(role !== "user");

    useEffect(() => {
        if (role === "user") {
            setDisplayedContent(content);
            return;
        }

        setIsTyping(true);
        let i = 0;
        const speed = 10; // ms per character
        const interval = setInterval(() => {
            setDisplayedContent(content.slice(0, i + 1));
            i++;
            if (i >= content.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [content, role]);

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                ul: ({ node, ref, ...props }) => <ul style={{ paddingLeft: "24px", margin: "12px 0" }} {...props} />,
                ol: ({ node, ref, ...props }) => <ol style={{ paddingLeft: "24px", margin: "12px 0" }} {...props} />,
                li: ({ node, ref, ...props }) => (
                    <Typography
                        component="li"
                        variant="body2"
                        sx={{
                            mb: 1,
                            "&::marker": {
                                color: "primary.main",
                                fontWeight: "bold",
                            },
                        }}
                        {...props}
                    />
                ),
                strong: ({ node, ...props }) => (
                    <Box
                        component="strong"
                        sx={(theme) => ({
                            fontWeight: 800,
                            color: role === "user" ? "inherit" : theme.palette.primary.main,
                            bgcolor: role === "user" ? "transparent" : alpha(theme.palette.primary.main, 0.08),
                            px: 0.6,
                            py: 0.2,
                            borderRadius: "4px",
                            display: "inline",
                            borderBottom:
                                role === "user" ? "none" : `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        })}
                        {...props}
                    />
                ),
                a: ({ node, ...props }) => {
                    const isEmail = props.href?.startsWith("mailto:");
                    return (
                        <Box
                            component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={(theme) => ({
                                color: role === "user" ? "inherit" : theme.palette.primary.main,
                                textDecoration: "none",
                                fontWeight: 700,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 0.5,
                                borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                transition: "all 0.2s",
                                "&:hover": {
                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                    borderBottomColor: theme.palette.primary.main,
                                },
                            })}
                            {...props}
                        >
                            {isEmail ? <EmailIcon sx={{ fontSize: 14 }} /> : <LaunchIcon sx={{ fontSize: 14 }} />}
                            {props.children}
                        </Box>
                    );
                },
                p: ({ node, ...props }) => (
                    <Typography
                        variant="body2"
                        sx={{
                            mb: 2,
                            "&:last-child": { mb: 0 },
                            lineHeight: 1.8,
                            opacity: 0.95,
                        }}
                        {...props}
                    />
                ),
                blockquote: ({ node, ...props }) => (
                    <Box
                        sx={(theme) => ({
                            borderLeft: `4px solid ${theme.palette.primary.main}`,
                            bgcolor: alpha(theme.palette.primary.main, 0.04),
                            p: 2,
                            my: 2,
                            borderRadius: "0 12px 12px 0",
                            display: "flex",
                            gap: 2,
                            alignItems: "flex-start",
                        })}
                    >
                        <InfoOutlinedIcon sx={{ color: "primary.main", mt: 0.3 }} />
                        <Box sx={{ "& p": { mb: 0 } }}>{props.children}</Box>
                    </Box>
                ),
                table: ({ node, ...props }) => (
                    <TableContainer
                        component={Paper}
                        variant="outlined"
                        sx={{ my: 2, bgcolor: "transparent", border: `1px solid ${alpha("#fff", 0.1)}` }}
                    >
                        <Table size="small">{props.children}</Table>
                    </TableContainer>
                ),
                thead: ({ node, ...props }) => (
                    <TableHead sx={{ bgcolor: alpha("#fff", 0.05) }}>{props.children}</TableHead>
                ),
                tbody: ({ node, ...props }) => <TableBody>{props.children}</TableBody>,
                tr: ({ node, ...props }) => <TableRow>{props.children}</TableRow>,
                th: ({ node, ...props }) => (
                    <TableCell
                        sx={{ fontWeight: 800, color: "primary.main", borderBottom: `2px solid ${alpha("#fff", 0.1)}` }}
                    >
                        {props.children}
                    </TableCell>
                ),
                td: ({ node, ...props }) => (
                    <TableCell sx={{ borderBottom: `1px solid ${alpha("#fff", 0.1)}` }}>{props.children}</TableCell>
                ),
                h1: ({ node, ...props }) => (
                    <Typography
                        variant="h5"
                        sx={(theme) => ({
                            mt: 4,
                            mb: 2,
                            fontWeight: 900,
                            color: "primary.main",
                            letterSpacing: "-0.02em",
                            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            pb: 1,
                        })}
                        {...props}
                    />
                ),
                h2: ({ node, ...props }) => (
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 3,
                            mb: 1.5,
                            fontWeight: 800,
                            color: "text.primary",
                        }}
                        {...props}
                    />
                ),
                code: ({ node, ...props }) => (
                    <Box
                        component="code"
                        sx={(theme) => ({
                            bgcolor: alpha(theme.palette.common.black, 0.3),
                            px: 0.8,
                            py: 0.3,
                            borderRadius: "6px",
                            fontFamily: "monospace",
                            fontSize: "0.85rem",
                            border: `1px solid ${alpha("#fff", 0.1)}`,
                        })}
                        {...props}
                    />
                ),
            }}
        >
            {displayedContent}
        </ReactMarkdown>
    );
};

const Chat = () => {
    const [input, setInput] = useState<string>("");
    const locale = useLocale();
    const content = getSiteContent(locale);
    const { messages, sendMessage, status } = useChatContext();
    const isLoading = status === "streaming" || status === "submitted";

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, status]);

    const handleSend = () => {
        if (!input.trim() || isLoading) return;

        posthog.capture("chat_message_sent", {
            source: "full_page",
            message_length: input.length,
        });

        sendMessage({ text: input })
            .then(() => setInput(""))
            .catch((error: any) => {
                console.error("❌ [Server Action] Error in chat.tsx:", error);
                posthog.captureException(error);
            });
    };

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                bgcolor: "background.default",
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(225, 110, 9, 0.03) 0%, transparent 50%)",
            }}
        >
            {/* Main Chat Area */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <Box
                    sx={(theme) => ({
                        p: 2,
                        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backdropFilter: "blur(10px)",
                        bgcolor: alpha(theme.palette.background.default, 0.8),
                        position: "sticky",
                        top: 0,
                        zIndex: 10,
                    })}
                >
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                                color: "text.secondary",
                                "&:hover": { color: "primary.main" },
                                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        >
                            <ArrowBackOutlinedIcon sx={{ fontSize: 20 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {content.chat.pageBackHome}
                            </Typography>
                        </Box>
                    </Link>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ textAlign: "right", display: { xs: "none", sm: "block" } }}>
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 700, color: "primary.main", display: "block" }}
                            >
                                LOGOS AI
                            </Typography>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                {content.chat.pageAgentLabel}
                            </Typography>
                        </Box>
                        <Box
                            sx={(theme) => ({
                                width: 44,
                                height: 44,
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                p: 1,
                            })}
                        >
                            <Image src={Logos} alt="LogOS Logo" width={32} height={32} />
                        </Box>
                    </Box>
                </Box>

                {messages.length === 0 && (
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            textAlign: "center",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 3,
                        }}
                    >
                        <Box
                            sx={(theme) => ({
                                width: 80,
                                height: 80,
                                borderRadius: "24px",
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 3,
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                            })}
                        >
                            <Image src={Logos} alt="LogOS" width={48} height={48} />
                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                mb: 2,
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {content.chat.pageWelcomeTitle} <br />
                            <Box component="span" sx={{ color: "primary.main" }}>
                                LogOS
                            </Box>
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 500, mx: "auto", fontWeight: 400, opacity: 0.8 }}
                        >
                            {content.chat.pageWelcomeSubtitle}
                        </Typography>
                    </Box>
                )}

                {/* Messages */}
                <Box sx={{ flex: 1, p: { xs: 2, md: 4 }, overflowY: "auto", scrollBehavior: "smooth" }}>
                    <Box sx={{ maxWidth: 900, mx: "auto" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                            {messages.map((message: any, index: number) => (
                                <Box
                                    key={index}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: message.role === "user" ? "flex-end" : "flex-start",
                                        gap: 2,
                                    }}
                                >
                                    {message.role !== "user" && (
                                        <Box
                                            sx={(theme) => ({
                                                width: 36,
                                                height: 36,
                                                borderRadius: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                                flexShrink: 0,
                                                alignSelf: "flex-start",
                                                mt: 0.5,
                                            })}
                                        >
                                            <Image src={Logos} alt="LogOS" width={24} height={24} />
                                        </Box>
                                    )}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            maxWidth: message.role === "user" ? "80%" : "90%",
                                            gap: 1,
                                        }}
                                    >
                                        <Box
                                            sx={(theme) => ({
                                                bgcolor: message.role === "user" ? "primary.main" : "background.paper",
                                                color:
                                                    message.role === "user" ? "primary.contrastText" : "text.primary",
                                                px: 3,
                                                py: 2,
                                                borderRadius:
                                                    message.role === "user"
                                                        ? "20px 20px 4px 20px"
                                                        : "20px 20px 20px 4px",
                                                border:
                                                    message.role === "user"
                                                        ? "none"
                                                        : `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                                boxShadow:
                                                    message.role === "user"
                                                        ? `0 10px 25px ${alpha(theme.palette.primary.main, 0.3)}`
                                                        : `0 4px 20px ${alpha(theme.palette.common.black, 0.2)}`,
                                                position: "relative",
                                            })}
                                        >
                                            <TypedMessage
                                                content={
                                                    message.parts
                                                        ? message.parts
                                                              .map((part: any) =>
                                                                  part.type === "text" ? part.text : "",
                                                              )
                                                              .join("")
                                                        : message.content
                                                }
                                                role={message.role}
                                            />
                                        </Box>
                                        {message.role !== "user" && (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    opacity: 0.6,
                                                    "&:hover": { opacity: 1 },
                                                    transition: "opacity 0.2s",
                                                }}
                                            >
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
                                                width: 36,
                                                height: 36,
                                                borderRadius: "10px",
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
                                            gap: 0.8,
                                            px: 3,
                                            py: 2.5,
                                            bgcolor: alpha(theme.palette.background.paper, 0.5),
                                            borderRadius: "20px 20px 20px 4px",
                                            border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                                            width: "fit-content",
                                        })}
                                    >
                                        {[0, 1, 2].map((item) => (
                                            <Box
                                                key={item}
                                                component={motion.div}
                                                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.2,
                                                    delay: item * 0.2,
                                                }}
                                                sx={{
                                                    width: 8,
                                                    height: 8,
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
                        p: { xs: 2, md: 4 },
                        pt: 2,
                        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        bgcolor: alpha(theme.palette.background.default, 0.8),
                        backdropFilter: "blur(10px)",
                    })}
                >
                    <Box sx={{ maxWidth: 800, mx: "auto", position: "relative" }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            multiline
                            maxRows={4}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey && !!input.trim() && !isLoading) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder={content.chat.pageInputPlaceholder}
                            disabled={isLoading}
                            sx={(theme) => ({
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "16px",
                                    bgcolor: alpha(theme.palette.background.paper, 0.8),
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    pr: 7,
                                    "&:hover": {
                                        bgcolor: theme.palette.background.paper,
                                    },
                                    "&.Mui-focused": {
                                        boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
                                    },
                                },
                            })}
                        />
                        <IconButton
                            aria-label={content.chat.sendMessageAriaLabel}
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            sx={(theme) => ({
                                position: "absolute",
                                right: 12,
                                bottom: 12,
                                width: 44,
                                height: 44,
                                borderRadius: "12px",
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                color: "white",
                                boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
                                "&:hover": {
                                    background: theme.palette.primary.main,
                                    transform: "scale(1.05)",
                                },
                                "&:active": {
                                    transform: "scale(0.95)",
                                },
                                "&.Mui-disabled": {
                                    background: alpha(theme.palette.action.disabled, 0.1),
                                    boxShadow: "none",
                                },
                            })}
                        >
                            <SendOutlinedIcon sx={{ fontSize: 22 }} />
                        </IconButton>

                        <Typography
                            variant="caption"
                            display="block"
                            sx={{
                                mt: 1.5,
                                textAlign: "center",
                                color: "text.secondary",
                                opacity: 0.6,
                                fontSize: "0.7rem",
                                letterSpacing: "0.02em",
                            }}
                        >
                            {content.chat.pageDisclaimer}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Chat;
