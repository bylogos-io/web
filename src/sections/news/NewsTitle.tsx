"use client";

import { Box, Typography, Container, useTheme } from "@mui/material";

export function NewsTitle() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        overflow: "hidden",
        pt: 15,
        pb: 5,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 20, textAlign: "center" }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "primary.main",
            fontWeight: 500,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: 2,
            mb: 2,
          }}
        >
          BLOG & NOTICIAS
        </Typography>
        <Typography
          variant="h1"
          fontWeight={900}
          sx={{
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            letterSpacing: "-0.02em",
            mb: 3,
          }}
        >
          <Box
            component="span"
            sx={{
              background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Logos{" "}
          </Box>
          <Box component="span" sx={{ color: "primary.main" }}>
            News
          </Box>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            maxWidth: 800,
            mx: "auto",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Mantente al día con las últimas tendencias en tecnología industrial,
          IA, IoT y automatización.
        </Typography>
      </Container>
    </Box>
  );
}
