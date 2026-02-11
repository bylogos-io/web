"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import Image from "next/image";
import demoImage from "@public/demo.png";

export function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 20, mt: 15 }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto" }}>
          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
                fontWeight: 500,
                mb: 2,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              Procesos inteligentes, industria eficiente.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem", lg: "5rem" },
                mb: 3,
                lineHeight: 1.1,
                userSelect: "none",
                pointerEvents: "none",
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
                LogOS es la nueva manera de eficiencia{" "}
              </Box>
              <Box component="span" sx={{ color: "primary.main" }}>
                industrial
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 5,
                maxWidth: 768,
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 400,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              La mejor integración{" "}
              <Box component="strong" sx={{ color: "primary.main" }}>
                AIIoT
              </Box>{" "}
              para optimización de procesos industriales.
            </Typography>
          </motion.div>
        </Box>
      </Container>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        sx={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          gap: 2.5,
          px: 2,
          mb: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            p: 0.5,
          }}
        >
          {/* Background Glow */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              sx={{
                minWidth: { xs: 300, md: 400 },
                height: 300,
                borderRadius: "50%",
                background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.4)}, ${alpha(theme.palette.primary.main, 0.1)}, transparent)`,
                filter: "blur(64px)",
                animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                },
              }}
            />
          </Box>

          {/* Browser Mockup with BorderBeam */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 900,
              borderRadius: "12px",
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              overflow: "hidden",
              boxShadow: `0 0 100px -20px ${alpha(theme.palette.primary.main, 0.3)}, 0 20px 40px ${alpha(theme.palette.common.black, 0.4)}`,
              bgcolor: "background.paper",
              position: "relative",
              zIndex: 1,
              p: "6.5px", // Anchura del haz de luz solicitada
              "&::before": {
                content: '""',
                position: "absolute",
                width: "200%",
                height: "200%",
                top: "-50%",
                left: "-50%",
                // longitud del haz se ajusta con el spread del gradiente (ej. del 40% al 60%)
                background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${theme.palette.primary.main} 50%, transparent 60%, transparent 100%)`,
                animation: "border-beam 4s linear infinite",
                zIndex: 0,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: "6.5px", // Debe coincidir con el p (padding)
                borderRadius: "8px", // Un poco menos que el contenedor padre (12px - espesor)
                bgcolor: "background.paper",
                zIndex: 1,
              },
              "@keyframes border-beam": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
            }}
          >
            {/* Content Wrapper ensures centering and layering */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                bgcolor: "background.paper",
                width: "100%",
              }}
            >
              {/* Fake browser header */}
              <Box
                sx={{
                  height: 32,
                  bgcolor: alpha(theme.palette.action.hover, 0.05),
                  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#ff5f56",
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#ffbd2e",
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#27c93f",
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    mx: 4,
                    height: 20,
                    bgcolor: alpha(theme.palette.common.black, 0.2),
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: 10, color: "text.secondary", opacity: 0.5 }}
                  >
                    app.bylogos.io
                  </Typography>
                </Box>
              </Box>

              {/* Main Demo Image */}
              <Box sx={{ position: "relative" }}>
                <Image
                  src={demoImage}
                  alt="LogOS Platform Demo"
                  layout="responsive"
                  width={1600}
                  height={900}
                  priority
                  style={{ display: "block" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Trust indicator */}
        <Typography
          variant="body2"
          color="text.secondary"
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          sx={{
            mt: 2,
            userSelect: "none",
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          Probado en industrias críticas • Acoplado a normativas RIC para SEC
        </Typography>
      </Box>
    </Box>
  );
}
