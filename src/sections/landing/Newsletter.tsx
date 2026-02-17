"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// MUI Icons - Outlined version
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Stack,
  useTheme,
  alpha,
  CircularProgress,
  Alert,
  TextField,
  Chip,
  Card,
  Button,
} from "@mui/material";

export function Newsletter() {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const benefits = [
    {
      icon: DescriptionOutlinedIcon,
      title: "Actualizaciones técnicas",
      description:
        "Nuevas funcionalidades, protocolos soportados y mejoras de rendimiento de LogOS.",
    },
    {
      icon: ElectricBoltOutlinedIcon,
      title: "Casos de uso industriales",
      description:
        "Implementaciones reales, configuraciones optimizadas y mejores prácticas de campo.",
    },
    {
      icon: TrendingUpOutlinedIcon,
      title: "Tendencias del sector",
      description:
        "Análisis de mercado, nuevos estándares IEC y evolución tecnológica del Sector Eléctrico.",
    },
    {
      icon: ShieldOutlinedIcon,
      title: "Alertas de seguridad",
      description:
        "Vulnerabilidades, parches críticos y recomendaciones proactivas de ciberseguridad industrial.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, introduce un email válido");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://cloud.bylogos.com/webhook/email-catcher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        },
      );

      if (!response.ok) {
        throw new Error("Error al suscribirse");
      }

      setIsSubmitted(true);
      setEmail("");
      setName("");
    } catch (err) {
      setError(
        "Hubo un problema al procesar tu suscripción. Inténtalo de nuevo.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Box
        component="section"
        sx={{
          py: 16,
          background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.08)}, ${theme.palette.background.default})`,
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 12 }}
          >
            <Card
              sx={{
                p: 8,
                textAlign: "center",
                borderColor: alpha(theme.palette.primary.main, 0.4),
                boxShadow: theme.shadows[10],
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "50%",
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ fontSize: 64, color: theme.palette.primary.main }}
                  />
                </Box>
              </Box>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
                ¡Bienvenido!
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 6, fontSize: "1.125rem", lineHeight: 1.6 }}
              >
                Tu suscripción ha sido confirmada correctamente. Pronto
                recibirás nuestras actualizaciones técnicas y novedades
                industriales.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => setIsSubmitted(false)}
                sx={{ px: 4, py: 1.25, fontWeight: 700 }}
              >
                Suscribir otro correo
              </Button>
            </Card>
          </motion.div>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      id="newsletter"
      sx={{
        py: 16,
        background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.05)}, ${theme.palette.background.default})`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 12 }}
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
            CONTACTO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 3,
              fontWeight: 800,
              lineHeight: 1.2,
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
              Expertiz Técnica
            </Box>{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              con nosotros
            </Box>
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            Únete a nuestra comunidad industrial para recibir las últimas
            actualizaciones de producto, estándares internacionales y casos de
            éxito en monitoreo eléctrico.
          </Typography>
        </Box>

        <Grid container spacing={10} alignItems="center">
          {/* Benefits */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ mb: 6, fontWeight: 800 }}>
                Valor exclusivo para ti
              </Typography>

              <Stack spacing={5}>
                {benefits.map((benefit, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    sx={{ display: "flex", gap: 3 }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: alpha(
                          theme.palette.background.paper,
                          1,
                        ),
                        border: "1px solid",
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                        height: "fit-content",
                        boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.05)}`,
                      }}
                    >
                      <benefit.icon
                        sx={{
                          fontSize: 24,
                          color: theme.palette.primary.main,
                          display: "block",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, fontSize: "1.125rem" }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, fontSize: "0.975rem" }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 8 },
                  boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                  border: "1px solid",
                  borderColor: alpha(theme.palette.divider, 0.5),
                }}
              >
                <Box sx={{ textAlign: "center", mb: 6 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      width: 80,
                      height: 80,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <MailOutlineIcon
                      sx={{ fontSize: 40, color: theme.palette.primary.main }}
                    />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>
                    Suscríbete ahora
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    Mantente a la vanguardia industrial
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <TextField
                    fullWidth
                    label="Nombre y Apellido"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="email@empresa.com"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  {error && (
                    <Alert
                      severity="error"
                      variant="outlined"
                      icon={<ErrorOutlineOutlinedIcon />}
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {error}
                    </Alert>
                  )}

                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    sx={{
                      height: 56,
                      mt: 2,
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                  >
                    {isLoading ? (
                      <Stack direction="row" spacing={2} alignItems="center">
                        <CircularProgress
                          size={24}
                          thickness={5}
                          sx={{ color: "inherit" }}
                        />
                        <Typography variant="button">
                          SUSCRIBIENDO...
                        </Typography>
                      </Stack>
                    ) : (
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <MailOutlineIcon />
                        <Typography variant="button" sx={{ letterSpacing: 1 }}>
                          SUSCRIBIRSE GRATIS
                        </Typography>
                      </Stack>
                    )}
                  </Button>
                </Box>

                <Typography
                  variant="caption"
                  color="text.disabled"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 4,
                    fontWeight: 500,
                  }}
                >
                  * Respetamos tu privacidad. No enviamos spam.
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
