import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutFounders } from "@/sections/about/AboutFounders";

export const metadata: Metadata = {
    title: "Sobre Nosotros | LogOS",
    description:
        "Conoce al equipo detrás de LogOS y nuestra misión de transformar la gestión industrial mediante IA y AIoT.",
};

export default function Nosotros() {
    return (
        <Box
            component="main"
            sx={{
                pb: 10,
                flex: 1,
                backgroundColor: "background.default",
            }}
        >
            <AboutHero />
            <AboutFounders />
        </Box>
    );
}
