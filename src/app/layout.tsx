import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
import { ChatProvider } from "@/components/chat-provider";
//import { CustomCursor } from "@/components/ui/custom-cursor";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Logos",
  description:
    "Mejora tu eficiencia usando nuestro sistema de gestión inteligente. SCADA, BMS, AIIoT",
  applicationName: "Logos",
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
    { name: "Logos", url: "https://www.linkedin.com/company/bylogos/" },
  ],
  creator: "Javier Vargas",
  metadataBase: new URL("https://bylogos.io"),
};

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ChatProvider>
            {/*
            <CustomCursor />*/}
            {children}
            <ChatWidget />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
