"use client";
import * as React from "react";
import { motion } from "framer-motion";
import {
  alpha,
  Box,
  Typography,
  Card,
  Chip,
  Grid2 as Grid,
  useTheme,
  Container,
  Stack,
} from "@mui/material";

// MUI Icons replacements
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const testimonials = [
  {
    company: "Red Salud",
    industry: "Médicina",
    quote:
      "Logos nos ha permitido reducir el tiempo de respuesta ante incidencias en un 70%. La integración con nuestros sistemas legacy fue perfecta.",
    metrics: "70% reducción MTTR",
    icon: BusinessIcon,
    installations: "45+ subestaciones",
  },
  {
    company: "Arcelor Mittal",
    industry: "Siderurgia",
    quote:
      "El módulo de IA predictiva identificó 3 fallos críticos antes de que ocurrieran. ROI del 340% en el primer año.",
    metrics: "340% ROI primer año",
    icon: FactoryIcon,
    installations: "12 plantas industriales",
  },
  {
    company: "Iberdrola Renovables",
    industry: "Energía Renovable",
    quote:
      "Monitoreo en tiempo real de 150+ parques eólicos desde una sola plataforma. Eficiencia operativa sin precedentes.",
    metrics: "150+ parques monitorizados",
    icon: ElectricBoltIcon,
    installations: "2.3 GW bajo gestión",
  },
];

const stats = [
  { value: "300+", label: "Instalaciones activas" },
  { value: "99.9%", label: "Disponibilidad SLA" },
  { value: "15M+", label: "Puntos de datos/día" },
  { value: "24/7", label: "Soporte técnico" },
];

export function Testimonials() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: 12,
        backgroundColor: alpha(theme.palette.secondary.main, 0.2),
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Chip
            label="Casos de Éxito"
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography variant="h2" sx={{ mb: 4, fontWeight: "bold" }}>
            Resultados que{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              hablan
            </Box>{" "}
            por sí mismos
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", fontWeight: 400 }}
          >
            Empresas líderes confían en LogOS para gestionar sus
            infraestructuras eléctricas más críticas.
          </Typography>
        </Box>

        {/* Statistics */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Grid container spacing={4} sx={{ textAlign: "center" }}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ mb: 1, fontWeight: 700 }}
                >
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid key={index} size={{ xs: 12, lg: 4 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      position: "relative",
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s",
                      "&:hover": {
                        borderColor: "primary.main",
                        boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        opacity: 0.2,
                        color: "primary.main",
                      }}
                    >
                      <FormatQuoteIcon sx={{ fontSize: 40 }} />
                    </Box>

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 3 }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1,
                          ),
                          display: "flex",
                        }}
                      >
                        <testimonial.icon sx={{ color: "primary.main" }} />
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {testimonial.company}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block" }}
                        >
                          {testimonial.industry}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      variant="body1"
                      component="blockquote"
                      sx={{
                        color: "text.primary",
                        mb: 4,
                        lineHeight: 1.6,
                        fontStyle: "italic",
                      }}
                    >
                      {'"' + testimonial.quote + '"'}
                    </Typography>

                    <Stack spacing={1.5} sx={{ mt: "auto" }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="caption" color="text.secondary">
                          Resultado clave:
                        </Typography>
                        <Typography
                          variant="caption"
                          color="primary.main"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.metrics}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="caption" color="text.secondary">
                          Instalaciones:
                        </Typography>
                        <Typography variant="caption" color="text.primary">
                          {testimonial.installations}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technical certifications */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          sx={{ mt: 10, textAlign: "center" }}
        >
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Certificaciones y estándares cumplidos:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 3, md: 5 },
            }}
          >
            {[
              "ISO 27001 - Seguridad de la información",
              "IEC 61850 - Automatización subestaciones",
              "NERC CIP - Seguridad cibernética",
              "IEC 62351 - Seguridad comunicaciones",
            ].map((cert, idx) => (
              <Stack
                key={idx}
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  {cert}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
