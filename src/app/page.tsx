"use client";

import { Box, useTheme } from "@mui/material";
import { Hero } from "@/sections/landing/Hero";
import { Features } from "@/sections/landing/Features";
import { HardwareAlternatives } from "@/sections/landing/HardwareAlternatives";
import { Stack } from "@/sections/landing/Stack";
import { Testimonials } from "@/sections/landing/Testimonials";
import { Newsletter } from "@/sections/landing/Newsletter";

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
          <Hero />
          <Features />
          <HardwareAlternatives />
          <Stack />
          <Testimonials />
          <Newsletter />
        </Box>
      </Box>

      {/* Spacer para el efecto de revelación del footer */}
      <Box
        sx={{
          height: { xs: 360, md: 360 },
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
