import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";

export const metadata: Metadata = {
    title: {
        absolute: "LogOS | Adaptando Infraestructura Industrial a la era de la IA",
    },
    description:
        "LogOS crea el puente entre el mundo analógico OT y el área IT. Solución mixta para modernizar infraestructura, reducir pérdidas en HH y revolucionar la toma de decisiones con AI.",
};

export default function Home() {
    return <LandingPage />;
}
