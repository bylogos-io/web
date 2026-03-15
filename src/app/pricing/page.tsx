import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PricingHero } from "@/sections/pricing/PricingHero";
import { PricingModules } from "@/sections/pricing/PricingModules";
import { PricingTitle } from "@/sections/pricing/PricingTitle";

export const metadata: Metadata = {
    title: "Planes y Precios",
    description:
        "Invierte en eficiencia. Conoce nuestros planes para digitalizar tu infraestructura, reducir pérdidas en HH y automatizar reportes con LogOS.",
};

export default function Precios() {
    return (
        <Box component="main">
            <PricingTitle />
            <PricingHero />
            <PricingModules />
        </Box>
    );
}
