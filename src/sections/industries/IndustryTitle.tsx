"use client";

import { Box, Container } from "@mui/material";
import { SectionHeader } from "@/components/SectionHeader";

export function IndustryTitle() {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 4, md: 6 },
            }}
        >
            <Container maxWidth="lg">
                <SectionHeader
                    as="h1"
                    eyebrow="USE CASES"
                    title="Industrias"
                    accent="inteligentes"
                    description="LogOS se adapta a los entornos más exigentes, transformando datos industriales complejos en decisiones estratégicas mediante hardware robusto y telemetría de última generación."
                    maxWidth={820}
                />
            </Container>
        </Box>
    );
}
