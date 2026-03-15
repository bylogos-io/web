"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChatContext } from "@/providers/ChatProvider";
import Link from "next/link";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { motion, AnimatePresence } from "framer-motion";
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
    Fab,
    Tooltip,
    useTheme
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import EmailIcon from "@mui/icons-material/Email";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CopyButton } from "@/components/CopyButton";

const TypedMessage = ({ content, role, skipAnimation }: { content: string; role: string; skipAnimation?: boolean }) => {
    const theme = useTheme();
    const [displayedContent, setDisplayedContent] = useState((role === "user" || skipAnimation) ? content : "");
    const [isTyping, setIsTyping] = useState(role !== "user" && !skipAnimation);

    useEffect(() => {
        if (role === "user" || skipAnimation) {
            setDisplayedContent(content);
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        let i = 0;
        const speed = 10;
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
                ul: ({ node, ref, ...props }) => (
                    <ul style={{ paddingLeft: "24px", margin: "12px 0" }} {...props} />
                ),
                ol: ({ node, ref, ...props }) => (
                    <ol style={{ paddingLeft: "24px", margin: "12px 0" }} {...props} />
                ),
                li: ({ node, ref, ...props }) => (
                    <Typography 
                        component="li" 
                        variant="body2" 
                        sx={{ 
                            mb: 1,
                            "&::marker": {
                                color: "primary.main",
                                fontWeight: "bold"
                            }
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
                            borderBottom: role === "user" ? "none" : `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        })}
                        {...props}
                    />
                ),
                a: ({ node, ...props }) => {
                    const isEmail = props.href?.startsWith("mailto:");
                    const isInternal = props.href?.startsWith("/") || props.href?.startsWith("#");
                    
                    const linkStyle = (theme: any) => ({
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
                        }
                    });

                    if (isInternal) {
                        return (
                            <Box
                                component={Link}
                                href={props.href || "#"}
                                sx={linkStyle}
                                {...props}
                            >
                                {props.children}
                            </Box>
                        );
                    }

                    return (
                        <Box
                            component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={linkStyle}
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
                            alignItems: "flex-start"
                        })}
                    >
                        <InfoOutlinedIcon sx={{ color: "primary.main", mt: 0.3 }} />
                        <Box sx={{ "& p": { mb: 0 } }}>{props.children}</Box>
                    </Box>
                ),
                table: ({ node, ...props }) => (
                    <TableContainer component={Paper} variant="outlined" sx={{ my: 2, bgcolor: "transparent", border: `1px solid ${alpha("#fff", 0.1)}`, overflow: 'auto' }}>
                        <Table size="small">
                            {props.children}
                        </Table>
                    </TableContainer>
                ),
                thead: ({ node, ...props }) => <TableHead sx={{ bgcolor: alpha("#fff", 0.05) }}>{props.children}</TableHead>,
                tbody: ({ node, ...props }) => <TableBody>{props.children}</TableBody>,
                tr: ({ node, ...props }) => <TableRow>{props.children}</TableRow>,
                th: ({ node, ...props }) => (
                    <TableCell sx={{ fontWeight: 800, color: "primary.main", borderBottom: `2px solid ${alpha("#fff", 0.1)}` }}>
                        {props.children}
                    </TableCell>
                ),
                td: ({ node, ...props }) => <TableCell sx={{ borderBottom: `1px solid ${alpha("#fff", 0.1)}` }}>{props.children}</TableCell>,
                h1: ({ node, ...props }) => (
                    <Typography 
                        variant="subtitle1" 
                        sx={{ 
                            mt: 2, 
                            mb: 1, 
                            fontWeight: 900, 
                            color: "primary.main",
                            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            pb: 0.5
                        }} 
                        {...props} 
                    />
                ),
                h2: ({ node, ...props }) => (
                    <Typography 
                        variant="subtitle2" 
                        sx={{ 
                            mt: 1.5, 
                            mb: 1, 
                            fontWeight: 800, 
                            color: "text.primary" 
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
                            fontSize: "0.8rem",
                            border: `1px solid ${alpha("#fff", 0.1)}`,
                        })}
                        {...props}
                    />
                ),
            }}
        >
            {`${displayedContent}${isTyping ? " |" : ""}`}
        </ReactMarkdown>
    );
};

export function ChatBubble() {
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [initialMessageCount, setInitialMessageCount] = useState(0);
    const [input, setInput] = useState("");
    const { messages, sendMessage, status } = useChatContext();
    const isLoading = status === "streaming" || status === "submitted";
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setInitialMessageCount(messages.length);
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, status]);

    useEffect(() => {
        if (isOpen && isHovering) {
            document.body.style.overflow = 'hidden';
            // Add a small padding to prevent layout shift if possible, 
            // but for now simple hidden is what's requested
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, isHovering]);

    const handleSend = () => {
        if (!input.trim() || isLoading) return;
        sendMessage({ text: input, context: pathname || undefined }).then(() => setInput(""));
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && !isOpen && (
                    <Box sx={{ position: "fixed", bottom: { xs: 20, md: 30 }, right: { xs: 20, md: 30 }, zIndex: 2000 }}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Fab
                                onClick={() => setIsOpen(!isOpen)}
                                sx={(theme) => ({
                                    width: { xs: 56, md: 64 },
                                    height: { xs: 56, md: 64 },
                                    background: "#000",
                                    color: "white",
                                    boxShadow: `0 8px 30px ${alpha("#000", 0.6)}`,
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    '&:hover': {
                                        background: "#111",
                                        boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        borderColor: theme.palette.primary.main,
                                        transform: "translateY(-2px)"
                                    }
                                })}
                            >
                                {isOpen ? <CloseIcon /> : <Image src={Logos} alt="LogOS" width={32} height={32} />}
                            </Fab>
                        </motion.div>

                        {!isOpen && (
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2 }}
                                sx={(theme) => ({
                                    position: "absolute",
                                    right: "100%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    mr: 2,
                                    bgcolor: "background.paper",
                                    px: 2,
                                    py: 1,
                                    borderRadius: "12px 12px 4px 12px",
                                    boxShadow: `0 4px 20px ${alpha("#000", 0.3)}`,
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    whiteSpace: "nowrap",
                                    display: { xs: "none", md: "block" },
                                    pointerEvents: "none"
                                })}
                            >
                                <Typography variant="caption" sx={{ fontWeight: 700 }}>¿En qué puedo ayudarte?</Typography>
                            </Box>
                        )}
                    </Box>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 100, scale: 0.9, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        sx={(theme) => ({
                            position: "fixed",
                            bottom: { xs: 20, md: 30 },
                            right: { xs: 20, md: 30 },
                            width: { xs: "calc(100vw - 40px)", sm: 420 },
                            height: { xs: "calc(100vh - 40px)", sm: 650 },
                            maxHeight: 800,
                            bgcolor: alpha(theme.palette.background.paper, 0.8),
                            backdropFilter: "blur(25px) saturate(180%)",
                            borderRadius: "28px",
                            boxShadow: `0 30px 60px ${alpha("#000", 0.5)}, inset 0 0 0 1px ${alpha("#fff", 0.1)}`,
                            zIndex: 1999,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            transformOrigin: "bottom right",
                        })}
                    >
                        {/* Chat Header */}
                        <Box sx={{ p: 2.5, borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`, display: "flex", alignItems: "center", gap: 2, bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
                            <Box sx={{ width: 40, height: 40, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: alpha(theme.palette.primary.main, 0.1), border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
                                <Image src={Logos} alt="LogOS" width={24} height={24} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>LogOS Assistant</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4CAF50" }} />
                                    <Typography variant="caption" sx={{ color: "text.secondary" }}>En línea ahora</Typography>
                                </Box>
                            </Box>
                            <IconButton 
                                size="small" 
                                onClick={() => setIsOpen(false)}
                                sx={{ 
                                    color: "text.secondary",
                                    bgcolor: alpha(theme.palette.divider, 0.05),
                                    "&:hover": { bgcolor: alpha(theme.palette.divider, 0.1) }
                                }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        {/* Messages Area */}
                        <Box sx={{ flex: 1, p: 2, overflowY: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
                            {messages.length === 0 && (
                                <Box sx={{ textAlign: "center", py: 4, px: 2 }}>
                                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>¡Hola! Soy el asistente de LogOS.</Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.6 }}>Pregúntame sobre IoT Industrial, SCADA o cómo modernizar tu infraestructura.</Typography>
                                </Box>
                            )}
                            {messages.map((msg: any, i: number) => (
                                <Box key={i} sx={{ alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", display: "flex", gap: 1, flexDirection: msg.role === "user" ? "row-reverse" : "row" }}>
                                    <Box sx={(theme) => ({
                                        p: 1.5,
                                        borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                        bgcolor: msg.role === "user" ? theme.palette.primary.main : alpha(theme.palette.divider, 0.05),
                                        color: msg.role === "user" ? "primary.contrastText" : "text.primary",
                                        boxShadow: msg.role === "user" ? `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}` : "none",
                                    })}>
                                        <TypedMessage
                                            role={msg.role}
                                            content={msg.parts ? msg.parts.map((p: any) => (p.type === "text" ? p.text : "")).join("") : msg.content}
                                            skipAnimation={i < initialMessageCount}
                                        />
                                    </Box>
                                </Box>
                            ))}
                            {isLoading && (
                                <Box sx={{ alignSelf: "flex-start", p: 1.5, borderRadius: "16px 16px 16px 4px", bgcolor: alpha(theme.palette.divider, 0.05) }}>
                                    <Box sx={{ display: "flex", gap: 0.5 }}>
                                        {[0, 1, 2].map((d) => (
                                            <Box key={d} component={motion.div} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }} sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "primary.main" }} />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <div ref={messagesEndRef} />
                        </Box>

                        {/* Input Area */}
                        <Box sx={(theme) => ({ p: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.05)}`, bgcolor: alpha(theme.palette.background.paper, 0.8) })}>
                            <Box sx={{ display: "flex", gap: 1, position: "relative" }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Escribe un mensaje..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', pr: 5 } }}
                                />
                                <IconButton 
                                    onClick={handleSend} 
                                    disabled={!input.trim() || isLoading}
                                    sx={{ 
                                        position: "absolute", 
                                        right: 4, 
                                        top: "50%", 
                                        transform: "translateY(-50%)",
                                        color: "primary.main"
                                    }}
                                >
                                    <SendOutlinedIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Typography variant="caption" sx={{ display: "block", mt: 1, textAlign: "center", opacity: 0.5, fontSize: "0.6rem" }}>
                                LogOS AI • Estamos para ayudarte
                            </Typography>
                        </Box>
                    </Box>
                )}
            </AnimatePresence>
        </>
    );
}
