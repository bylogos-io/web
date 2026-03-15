import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";

export const metadata: Metadata = {
    title: {
        absolute: "LogOS | Adaptando Infraestructura Industrial a la era de la IA",
    },
    description:
        "LogOS crea el puente entre el mundo analógico OT y el área IT. Solución mixta para modernizar infraestructura, reducir pérdidas en HH y revolucionar la toma de decisiones con AI.",
    openGraph: {
        title: "LogOS | Adaptando Infraestructura Industrial a la era de la IA",
        description:
            "LogOS crea el puente entre el mundo analógico OT y el área IT. Solución mixta para modernizar infraestructura, reducir pérdidas en HH y revolucionar la toma de decisiones con AI.",
        url: "https://bylogos.io",
        siteName: "LogOS",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "LogOS - Unificando IT y OT para Infraestructura Industrial",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LogOS | Adaptando Infraestructura Industrial a la era de la IA",
        description:
            "LogOS crea el puente entre el mundo analógico OT y el área IT. Solución mixta para modernizar infraestructura, reducir pérdidas en HH y revolucionar la toma de decisiones con AI.",
        images: ["/twitter-image.jpg"],
    },
};

export default function Home() {
    return <LandingPage />;
}
