"use client";

import { Box } from "@mui/material";
import { Hero } from "@/sections/landing/Hero";
import { IntegrationsBar } from "@/sections/landing/IntegrationsBar";
import { Pillars } from "@/sections/landing/Pillars";
import { BeforeAfter } from "@/sections/landing/BeforeAfter";
import { EdgeArchitecture } from "@/sections/landing/EdgeArchitecture";
import { VerticalsSnapshot } from "@/sections/landing/VerticalsSnapshot";
import dynamic from "next/dynamic";
import { LazyOnView } from "@/components/LazyOnView";
const DemoVideo = dynamic(
    () => import("@/sections/landing/DemoVideo").then((m) => m.DemoVideo),
    {
        ssr: false,
        loading: () => <div style={{ minHeight: 480 }} />,
    },
);
import { HeroCase } from "@/sections/landing/HeroCase";
import { SecurityBand } from "@/sections/landing/SecurityBand";
import { HardwareAlternatives } from "@/sections/landing/HardwareAlternatives";

export function LandingPage() {
    return (
        <Box
            sx={{
                minHeight: "100dvh",
                backgroundColor: "background.default",
                color: "text.primary",
            }}
        >
            <Box sx={{ position: "relative", zIndex: 10 }}>
                <Box sx={{ backgroundColor: "background.default" }}>
                    <Hero />
                    <IntegrationsBar />
                    <Pillars />
                    <BeforeAfter />
                    <EdgeArchitecture />
                    <VerticalsSnapshot />
                    <LazyOnView placeholder={<div style={{ minHeight: 480 }} />}>
                        <DemoVideo />
                    </LazyOnView>
                    <HeroCase />
                    <SecurityBand />
                    <HardwareAlternatives />
                </Box>
            </Box>

            <Box
                sx={{
                    height: { xs: 700, md: 360 },
                    visibility: "hidden",
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
}
