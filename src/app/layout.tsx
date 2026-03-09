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
        default: "LogOS | Unificando IT y OT para Infraestructura Industrial",
        template: "%s | LogOS",
    },
    description:
        "LogOS: Plataforma inteligente agnóstica de hardware que moderniza sistemas legados y establece un puente entre IT y OT mediante SCADA, AI y Edge Computing.",
    applicationName: "LogOS",
    keywords: [
        "LogOS",
        "SCADA",
        "BMS",
        "AI + IIoT",
        "Edge Computing",
        "Modernización IT/OT",
        "Infraestructura Legada",
        "Automatización Industrial",
        "Gemelos Digitales",
        "Monitorización en Tiempo Real",
        "HMI",
        "LogOS",
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
