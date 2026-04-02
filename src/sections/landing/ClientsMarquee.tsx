"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/material/styles";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

const CLIENTS = [
    { name: "Seeed Studio", src: "/seeed.webp" },
    { name: "UC Facultad de Ingeniería", src: "/uc-facultad-ingenieria.webp", height: 52 },
    { name: "Client 3", src: "/Mesa_de_trabajo_3.svg" },
    { name: "Client 4", src: "/Mesa_de_trabajo_4.svg" },
    { name: "Client 5", src: "/Mesa_de_trabajo_5.svg" },
    { name: "Client 6", src: "/Mesa_de_trabajo_6.svg" },
    { name: "Rodar", src: "/rodar_registrado.svg" },
    { name: "FS Curtis", src: "/fscurtis.png", height: 100 },
];

const scrollRight = keyframes`
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
`;

export function ClientsMarquee() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <Box
            sx={{
                width: "100%",
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    color: "text.disabled",
                    letterSpacing: 3,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                    userSelect: "none",
                }}
            >
                {content.home.clientsMarqueeLabel}
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    maskImage: "linear-gradient(to right, transparent, black 48%, black 52%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 48%, black 52%, transparent)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "max-content",
                        animation: `${scrollRight} 28s linear infinite`,
                    }}
                >
                    {items.map((client, index) => (
                        <Box
                            key={`${client.name}-${index}`}
                            component="img"
                            src={client.src}
                            alt={client.name}
                            sx={{
                                height: client.height ?? 32,
                                width: "auto",
                                mx: 6,
                                opacity: 0.35,
                                filter: "brightness(0) invert(1)",
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
