"use client";

import { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { IconButton, Tooltip } from "@mui/material";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Tooltip title={isCopied ? "Copiado" : "Copiar respuesta"} arrow>
      <IconButton
        size="small"
        sx={{
          color: "text.secondary",
          "&:hover": { color: "primary.main" },
          transition: "colors 0.2s",
        }}
        onClick={handleCopy}
      >
        {isCopied ? (
          <CheckOutlinedIcon sx={{ fontSize: 18, color: "success.main" }} />
        ) : (
          <ContentCopyOutlinedIcon sx={{ fontSize: 18 }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
