import { MuiRootProvider } from "@/providers/MuiRootProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Inteligencia Industrial SCADA, BMS, AI + IIoT | LogOS",
        template: "%s | LogOS",
    },
    description:
        "LogOS: Sistema de gestión inteligente para SCADA, BMS y AI + IIoT. Mejora la eficiencia operacional en Smart Cities e industria.",
    applicationName: "LogOS",
    keywords: [
        "LogOS",
        "SCADA",
        "BMS",
        "AI + IIoT",
        "IIoT",
        "Industrial AI",
        "Smart Cities",
        "Automatización Industrial",
        "Monitorización en Tiempo Real",
        "Gestión de Edificios",
        "HMI",
        "ByLogos",
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    authors: [{ name: "LogOS", url: "https://www.linkedin.com/company/bylogos/" }],
    creator: "Javier Vargas",
    metadataBase: new URL("https://bylogos.io"),
};

import { ConditionalHeader } from "@/sections/layout/ConditionalHeader";
import { ConditionalFooter } from "@/sections/layout/ConditionalFooter";

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
