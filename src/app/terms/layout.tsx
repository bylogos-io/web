import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso de la plataforma LogOS y sus servicios asociados.",
    openGraph: {
        title: "Términos y Condiciones | LogOS",
        description: "Términos y condiciones de uso de la plataforma LogOS y sus servicios asociados.",
        images: ["/opengraph-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Términos y Condiciones | LogOS",
        description: "Términos y condiciones de uso de la plataforma LogOS y sus servicios asociados.",
        images: ["/twitter-image.jpg"],
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
