import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PricingHero } from "@/sections/pricing/PricingHero";
import { PricingModules } from "@/sections/pricing/PricingModules";
import { PricingTitle } from "@/sections/pricing/PricingTitle";

export const metadata: Metadata = {
    title: "Planes y Precios | LogOS",
    description:
        "Conoce la inversión requerida para digitalizar tu instalación. Instalación inicial de infraestructura y suscripción mensual adaptable a tus necesidades.",
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
