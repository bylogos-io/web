"use client";

import { Box } from "@mui/material";
import { Hero } from "@/sections/landing/Hero";
import { DemoVideo } from "@/sections/landing/DemoVideo";
import { Features } from "@/sections/landing/Features";
import { HardwareAlternatives } from "@/sections/landing/HardwareAlternatives";
import { Comparison } from "@/sections/landing/Comparison";
import { Testimonials } from "@/sections/landing/Testimonials";
import { Newsletter } from "@/sections/landing/Newsletter";

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
                    <DemoVideo />
                    <Features />
                    <HardwareAlternatives />
                    <Comparison />
                    <Testimonials />
                    <Newsletter />
                </Box>
            </Box>

            {/* Spacer para el efecto de revelación del footer */}
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
