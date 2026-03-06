import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";

export const metadata: Metadata = {
    title: {
        absolute: "LogOS | Inteligencia Industrial SCADA, BMS, AI + IIoT",
    },
    description:
        "Sistema de gestión inteligente LogOS. Soluciones avanzadas de SCADA, BMS y AI + IIoT para mejorar la eficiencia operacional en industrias y ciudades inteligentes.",
};

export default function Home() {
    return <LandingPage />;
}
