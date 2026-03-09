import type { Metadata } from "next";
import { Box } from "@mui/material";
import { IndustrySlider } from "@/sections/industries/IndustrySlider";
import { IndustryCards } from "@/sections/industries/IndustryCards";
import { IndustryFooter } from "@/sections/industries/IndustryFooter";

export const metadata: Metadata = {
    title: "Soluciones por Industria",
    description:
        "Descubre cómo LogOS conecta IT y OT modernizando operaciones en infraestructuras vitales, petróleo, gas, energía y manufactura.",
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
