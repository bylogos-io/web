import type { Metadata } from "next";
import { Box } from "@mui/material";
import { IndustrySlider } from "@/sections/industries/IndustrySlider";
import { IndustryCards } from "@/sections/industries/IndustryCards";
import { IndustryFooter } from "@/sections/industries/IndustryFooter";

export const metadata: Metadata = {
    title: "Soluciones Industriales IT/OT | Sectores y Casos de Uso",
    description:
        "Software elástico y hardware fácil de integrar para cualquier industria: Oil & Gas, Food & Beverage, Agua, Data Centers y Energía. Moderniza tus operaciones con LogOS.",
};

export default function Industrias() {
    return (
        <Box component="main">
            <IndustrySlider />
            <IndustryCards />
            <IndustryFooter />
        </Box>
    );
}
