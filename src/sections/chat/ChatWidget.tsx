"use client";

import { useState, useRef, useEffect } from "react";
import { useChatContext } from "@/providers/ChatProvider";
import { usePathname } from "next/navigation";

// MUI Icons - Outlined version to match Lucide aesthetic
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Image from "next/image";
import Logos from "@public/icon.svg";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Box,
  Button,
  TextField,
  Typography,
  alpha,
  useTheme,
  IconButton,
} from "@mui/material";
import { CopyButton } from "@/components/CopyButton";

export function ChatWidget() {
  const theme = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChatContext();
  const isLoading = status === "streaming" || status === "submitted";
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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

    const currentInput = input;
    setInput("");

    try {
      await sendMessage({ text: currentInput });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (isChatPage) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            sx={{
              mb: 2,
              width: { xs: 320, sm: 380 },
              height: 600,
              bgcolor: "background.paper",
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              boxShadow: theme.shadows[20],
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                p: 1.5,
                bgcolor: alpha(theme.palette.secondary.main, 0.05),
                borderBottom: `1px solid ${theme.palette.divider}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    p: 0.5,
                  }}
                >
                  <Image src={Logos} alt="Logos Logo" width={24} height={24} />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, lineHeight: 1.2 }}
                  >
                    LogOS
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "success.main",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Box component="span" sx={{ fontSize: 8 }}>
                      ●
                    </Box>{" "}
                    En línea
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Link href="/chat">
                  <IconButton size="small" title="Pantalla completa">
                    <OpenInFullOutlinedIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Link>
                <IconButton
                  size="small"
                  onClick={() => setIsOpen(false)}
                  sx={{
                    "&:hover": {
                      bgcolor: alpha(theme.palette.error.main, 0.1),
                      color: "error.main",
                    },
                  }}
                >
                  <CloseOutlinedIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>

            {/* Body */}
            <Box
              sx={{
                flex: 1,
                p: 2,
                bgcolor: alpha(theme.palette.background.default, 0.4),
                overflowY: "auto",
              }}
            >
              {messages.length === 0 ? (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "text.secondary",
                    p: 3,
                  }}
                >
                  <ForumOutlinedIcon
                    sx={{ fontSize: 40, opacity: 0.2, mb: 1.5 }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    ¡Hola! Soy el asistente de LogOS.
                  </Typography>
                  <Typography variant="caption">
                    Pregúntame sobre funcionalidades, protocolos o monitoreo.
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {messages.map((message: any, index: number) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent:
                          message.role === "user" ? "flex-end" : "flex-start",
                        gap: 1,
                      }}
                    >
                      {message.role !== "user" && (
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            border: `1px solid ${theme.palette.divider}`,
                            p: 0.3,
                            flexShrink: 0,
                            alignSelf: "flex-start",
                            mt: 0.5,
                          }}
                        >
                          <Image
                            src={Logos}
                            alt="LogOS"
                            width={18}
                            height={18}
                          />
                        </Box>
                      )}
                      <Box sx={{ maxWidth: "85%", position: "relative" }}>
                        <Box
                          sx={{
                            bgcolor:
                              message.role === "user"
                                ? "primary.main"
                                : "background.paper",
                            color:
                              message.role === "user"
                                ? "primary.contrastText"
                                : "text.primary",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontSize: "0.875rem",
                            border:
                              message.role === "user"
                                ? "none"
                                : `1px solid ${theme.palette.divider}`,
                            boxShadow: theme.shadows[1],
                          }}
                        >
                          <ReactMarkdown
                            components={{
                              ul: ({ node, ...props }) => (
                                <ul
                                  style={{
                                    paddingLeft: "16px",
                                    margin: "4px 0",
                                  }}
                                  {...props}
                                />
                              ),
                              p: ({ node, ...props }) => (
                                <Typography
                                  variant="body2"
                                  sx={{
                                    mb: 1,
                                    "&:last-child": { mb: 0 },
                                    fontSize: "inherit",
                                  }}
                                  {...props}
                                />
                              ),
                              a: ({ node, ...props }) => (
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    color: "inherit",
                                    textDecoration: "underline",
                                  }}
                                  {...props}
                                />
                              ),
                            }}
                          >
                            {message.parts
                              ? message.parts
                                  .map((p: any) =>
                                    p.type === "text" ? p.text : "",
                                  )
                                  .join("")
                              : message.content}
                          </ReactMarkdown>
                          {message.role !== "user" && (
                            <Box
                              sx={{
                                mt: 1,
                                pt: 1,
                                borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                display: "flex",
                                justifyContent: "flex-start",
                              }}
                            >
                              <CopyButton
                                text={
                                  message.parts
                                    ? message.parts
                                        .map((p: any) =>
                                          p.type === "text" ? p.text : "",
                                        )
                                        .join("")
                                    : message.content
                                }
                              />
                            </Box>
                          )}
                        </Box>
                      </Box>
                      {message.role === "user" && (
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
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
                          }}
                        >
                          <PersonOutlineOutlinedIcon sx={{ fontSize: 16 }} />
                        </Box>
                      )}
                    </Box>
                  ))}
                  {isLoading && (
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Box
                        sx={{
                          bgcolor: alpha(theme.palette.action.hover, 0.05),
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          display: "flex",
                          gap: 0.5,
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <Box
                            key={i}
                            component={motion.div}
                            animate={{
                              opacity: [0.4, 1, 0.4],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.2,
                              delay: i * 0.15,
                            }}
                            sx={{
                              width: 5,
                              height: 5,
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
              )}
            </Box>

            {/* Footer Input */}
            <Box
              sx={{
                p: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                bgcolor: "background.paper",
              }}
            >
              <TextField
                fullWidth
                size="small"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !isLoading &&
                    !!input.trim()
                  ) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Escribe un mensaje..."
                disabled={isLoading}
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        color="primary"
                        size="small"
                      >
                        <SendOutlinedIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                    ),
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 0.5,
                  color: "text.disabled",
                  fontSize: 10,
                }}
              >
                IA puede cometer errores.
              </Typography>
            </Box>
          </Box>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <Box
            component={motion.button}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              border: "none",
              cursor: "pointer",
              boxShadow: theme.shadows[10],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ForumOutlinedIcon sx={{ fontSize: 28 }} />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
