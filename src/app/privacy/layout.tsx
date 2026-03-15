import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Consulta cómo protegemos tus datos y los de tu infraestructura en LogOS.",
    openGraph: {
        title: "Política de Privacidad | LogOS",
        description: "Consulta cómo protegemos tus datos y los de tu infraestructura en LogOS.",
        images: ["/opengraph-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Privacidad | LogOS",
        description: "Consulta cómo protegemos tus datos y los de tu infraestructura en LogOS.",
        images: ["/twitter-image.jpg"],
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
