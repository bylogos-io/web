import { MuiRootProvider } from "@/providers/MuiRootProvider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ConditionalHeader } from "@/sections/layout/ConditionalHeader";
import { ConditionalFooter } from "@/sections/layout/ConditionalFooter";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: "#e16e09",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    title: {
        default: "LogOS | Unificando IT y OT para Infraestructura Industrial",
        template: "%s | LogOS",
    },
    description:
        "LogOS: La solución mixta de infraestructura y software que conecta el mundo analógico con la IA. Reducimos pérdidas en HH, optimizamos el control industrial y automatizamos reportes para Oil & Gas, Energía y Data Centers.",
    applicationName: "LogOS",
    keywords: [
        "LogOS",
        "convergencia IT OT",
        "infraestructura industrial",
        "inteligencia artificial industrial",
        "automatización de reportes",
        "reducción de HH",
        "eficiencia operativa",
        "monitoreo OT",
        "control industrial",
        "SCADA",
        "IIoT",
        "Oil & Gas",
        "Data Centers",
        "Energy & Power",
        "Food & Beverage",
        "modernización infraestructura legada",
        "gestión de activos industriales",
        "gemelo digital",
        "Edge Computing",
    ],
    authors: [{ name: "LogOS", url: "https://www.linkedin.com/company/bylogos/" }],
    creator: "Javier Vargas",
    publisher: "LogOS",
    metadataBase: new URL("https://bylogos.io"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "es_ES",
        url: "https://bylogos.io",
        siteName: "LogOS",
        title: "LogOS | Solución Mixta IT/OT para Infraestructura Crítica",
        description: "LogOS adapta tu infraestructura analógica a la era de la IA. Reduce pérdidas de HH y revoluciona la toma de decisiones mediante control detallado y automatización de reportes.",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "LogOS - Unificando IT y OT para Infraestructura Industrial",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LogOS | Conectando el Campo OT con el Área IT",
        description: "Deja de analizar tu infraestructura a mano. LogOS automatiza reportes y adapta sistemas legados a algoritmos de inteligencia artificial.",
        images: ["/twitter-image.png"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/manifest.json",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <InitColorSchemeScript attribute="class" defaultMode="dark" />
                <MuiRootProvider>
                    <ConditionalHeader />
                    {children}
                    <ConditionalFooter />
                </MuiRootProvider>
            </body>
        </html>
    );
}
