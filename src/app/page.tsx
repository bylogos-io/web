import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";

export const metadata: Metadata = {
    title: {
        absolute: "LogOS | El puente entre IT y OT para Infraestructura Industrial",
    },
    description:
        "LogOS: El puente entre IT y OT. Plataforma integral agnóstica para modernizar, unificar y optimizar operaciones industriales.",
};

export default function Home() {
    return <LandingPage />;
}
