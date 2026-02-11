"use client";

import { Box, useTheme } from "@mui/material";
import { Header } from "@/sections/landing/Header";
import { Hero } from "@/sections/landing/Hero";
import { Features } from "@/sections/landing/Features";
import { HardwareAlternatives } from "@/sections/landing/HardwareAlternatives";
import { Stack } from "@/sections/landing/Stack";
import { Testimonials } from "@/sections/landing/Testimonials";
import { Newsletter } from "@/sections/landing/Newsletter";
import { Footer } from "@/sections/landing/Footer";

import "./page.css";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ backgroundColor: "background.default" }}>
          <Header />
          <Hero />
          <Features />
          <HardwareAlternatives />
          <Stack />
          <Testimonials />
          <Newsletter />
        </Box>
      </Box>

      {/* Spacer for fixed footer if needed, or matched exactly to original logic */}
      <Box
        sx={{
          height: { xs: 360, md: 360 },
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
