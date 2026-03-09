"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@public/logos.svg";
import { SOCIAL_LINKS, CONTACT_INFO, FOOTER_PROTOCOLS } from "@/data/layout";
import { Box, Container, Grid2 as Grid, Typography, Divider, Stack, alpha, Button, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const contactInfo = CONTACT_INFO;
    const socialLinks = SOCIAL_LINKS;

    return (
        <Box
            component="footer"
            id="contact"
            sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                borderTop: `1px solid ${theme.palette.divider}`,
                py: 2,
            })}
        >
            <Container maxWidth="lg" sx={{ pt: 10 }}>
                <Grid container spacing={4}>
                    {/* Brand */}
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Image src={logoImage} alt="LogOS" width={64} height={32} unoptimized />
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                Revoluciona infraestructura industrial en tiempo real.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {socialLinks.map((social, idx) => (
                                    <IconButton
                                        key={idx}
                                        component="a"
                                        href={social.href}
                                        target="_blank"
                                        aria-label="Visitar red social"
                                        sx={(theme) => ({
                                            color: "text.secondary",
                                            backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                                            "&:hover": {
                                                color: "primary.main",
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            },
                                        })}
                                    >
                                        <social.icon sx={{ fontSize: 22 }} />
                                    </IconButton>
                                ))}
                                {/* <Button
                  variant="ghost"
                  size="icon"
                  component="a"
                  href="https://www.linkedin.com/company/bylogos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <LinkedinIcon sx={{ fontSize: 18 }} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  component="a"
                  href="https://www.instagram.com/bylogos.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 18 }} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  component="a"
                  href="https://github.com/bylogos-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  <GithubIcon sx={{ fontSize: 18 }} />
                </Button> */}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Protocols & Standards */}
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                                Protocolos soportados
                            </Typography>
                            <Stack spacing={1}>
                                {FOOTER_PROTOCOLS.map((protocol, idx) => (
                                    <Typography key={idx} variant="body2" color="text.secondary">
                                        • {protocol}
                                    </Typography>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                                Contacto directo
                            </Typography>
                            <Stack spacing={2}>
                                {contactInfo.map((contact, index) => (
                                    <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                                        <contact.icon
                                            sx={{
                                                color: "primary.main",
                                                fontSize: 18,
                                                marginTop: 0.5,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ display: "block" }}
                                            >
                                                {contact.label}
                                            </Typography>
                                            <Link
                                                href={`mailto:${contact.value}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    color="text.primary"
                                                    sx={{ "&:hover": { color: "primary.main" } }}
                                                >
                                                    {contact.value}
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>

                            <Box sx={{ mt: 3 }}>
                                <Link href="mailto:contact@bylogos.io" style={{ textDecoration: "none" }}>
                                    <Button variant="default" sx={{ width: "100%", gap: 1 }}>
                                        <MailIcon sx={{ fontSize: 18 }} />
                                        Solicitar demo técnica
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 6 }} />

                {/* Bottom section */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} LogOS SCADA. Todos los derechos reservados.
                    </Typography>

                    <Stack direction="row" spacing={3}>
                        <Link href="/privacy" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                Política de privacidad
                            </Typography>
                        </Link>
                        <Link href="/terms" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                Términos de servicio
                            </Typography>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
