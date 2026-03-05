"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function AboutInfo() {
    return (
        <Box component="section" sx={{ py: 10 }}>
            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    sx={{ textAlign: "center" }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "text.primary",
                            fontWeight: 800,
                            mb: 4,
                        }}
                    >
                        Nuestra Misión
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3, fontWeight: 400, lineHeight: 1.6 }}>
                        Nuestra misión es empoderar a las industrias mediante herramientas tecnológicas de vanguardia
                        que simplifiquen operaciones complejas. Creemos que la transformación digital no debe ser un
                        lujo, sino un estándar accesible.
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3, fontWeight: 400, lineHeight: 1.6 }}>
                        Construimos soluciones robustas de Edge-to-Cloud que garantizan seguridad, baja latencia y
                        operabilidad continua incluso en los entornos más exigentes.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
