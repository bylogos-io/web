import { MuiRootProvider } from "@/providers/MuiRootProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogOS",
  description:
    "Mejora tu eficiencia usando nuestro sistema de gestión inteligente. SCADA, BMS, AIIoT",
  applicationName: "LogOS",
  keywords: [
    "SCADA",
    "industrial",
    "AIIoT",
    "AI",
    "IIoT",
    "BMS",
    "HMI",
    "SEEED",
    "KUNBUS",
    "Smart Cities",
    "Smart City",
    "Building Management System",
    "Building",
    "Management",
    "System",
    "events",
    "alarms",
    "bylogosio",
    "logosia",
    "bylogosia",
    "bylogosiot",
    "logosio",
    "logosiot",
    "IoT",
    "automatización",
    "LogOS",
    "ByLogos",
    "IA",
    "Logos",
    "monitorización",
    "solución",
    "local-first",
    "software",
    "hardware",
  ],
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [
    { name: "LogOS", url: "https://www.linkedin.com/company/bylogos/" },
  ],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
