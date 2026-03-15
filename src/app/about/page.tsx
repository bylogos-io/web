import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutFounders } from "@/sections/about/AboutFounders";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description:
        "LogOS nace para resolver la brecha entre el mundo analógico y la IA. Nuestra misión es facilitar la vida de los técnicos y reducir pérdidas en HH mediante tecnología mixta de vanguardia.",
    openGraph: {
        title: "Sobre Nosotros | LogOS",
        description:
            "LogOS nace para resolver la brecha entre el mundo analógico y la IA. Nuestra misión es facilitar la vida de los técnicos y reducir pérdidas en HH mediante tecnología mixta de vanguardia.",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Sobre Nosotros | LogOS",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre Nosotros | LogOS",
        description:
            "LogOS nace para resolver la brecha entre el mundo analógico y la IA. Nuestra misión es facilitar la vida de los técnicos y reducir pérdidas en HH mediante tecnología mixta de vanguardia.",
        images: ["/twitter-image.jpg"],
    },
};

export default function Nosotros() {
    return (
        <Box
            component="main"
            sx={{
                pb: 10,
                flex: 1,
                backgroundColor: "background.default",
            }}
        >
            <AboutHero />
            <AboutFounders />
        </Box>
    );
}
