"use client";

import { Box, Typography, Container, useTheme, alpha } from "@mui/material";

export function IndustryTitle() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mb: 8, textAlign: "center" }}>
      <Typography
        variant="overline"
        sx={{
          color: "primary.main",
          fontWeight: 900,
          letterSpacing: 2,
          mb: 2,
          display: "block",
        }}
      >
        SECTORES ESTRATÉGICOS
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
          Industrias{" "}
        </Box>
        <Box component="span" sx={{ color: "primary.main" }}>
          Inteligentes
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
        LogOS se adapta a los entornos más exigentes, transformando datos
        industriales complejos en decisiones estratégicas mediante nuestra
        infraestructura de hardware robusta y software de telemetría de última
        generación.
      </Typography>
    </Container>
  );
}
