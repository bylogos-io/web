"use client";

import { motion } from "@/lib/motion-shim";
import Link from "next/link";

// MUI Icons - Outlined version for consistent premium look
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

import { Box, Typography, Stack, alpha } from "@mui/material";

export default function DocsIndex() {
    const iconMap = {
        Search: SearchOutlinedIcon,
        Home: HomeOutlinedIcon,
        Download: FileDownloadOutlinedIcon,
        Settings: SettingsOutlinedIcon,
        Code: CodeOutlinedIcon,
        Database: StorageOutlinedIcon,
        Shield: ShieldOutlinedIcon,
        Zap: ElectricBoltOutlinedIcon,
        Book: MenuBookOutlinedIcon,
        AlertTriangle: WarningAmberOutlinedIcon,
        X: CloseOutlinedIcon,
        CopySize: ContentCopyOutlinedIcon,
        Check: CheckOutlinedIcon,
        ExternalLink: OpenInNewOutlinedIcon,
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", py: 8 }}>
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" sx={{ fontWeight: 600, mb: 4, letterSpacing: -1 }}>
                    Guía de Estilo & Iconos
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 8, fontWeight: 400, lineHeight: 1.6 }}>
                    Referencia visual de los componentes de interfaz de usuario y el sistema de iconografía nativo de
                    MUI utilizado en LogOS.
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 4,
                    }}
                >
                    {Object.entries(iconMap).map(([name, Icon], idx) => (
                        <Box
                            key={name}
                            component={motion.div}
                            whileHover={{ x: 8 }}
                            sx={(theme) => ({
                                p: 3,
                                borderRadius: 1,
                                bgcolor: alpha(theme.palette.secondary.main, 0.04),
                                border: "1px solid",
                                borderColor: "divider",
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                                transition: "all 0.2s ease",
                            })}
                        >
                            <Box
                                sx={(theme) => ({
                                    p: 1.5,
                                    borderRadius: 1,
                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                    color: "primary.main",
                                    display: "flex",
                                })}
                            >
                                <Icon sx={{ fontSize: 24 }} />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700}>
                                    {name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "monospace" }}>
                                    mui-icons/{name}Outlined
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={(theme) => ({
                        mt: 10,
                        p: 4,
                        borderRadius: 1,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        border: "1px dashed",
                        borderColor: "primary.main",
                    })}
                >
                    <Stack direction="row" spacing={3} alignItems="center">
                        <MenuBookOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                ¿Necesitas más información?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Consulta la documentación completa de Material UI Icons para ver todas las opciones
                                disponibles.
                            </Typography>
                            <Link href="https://mui.com/material-ui/material-icons/" target="_blank">
                                <Typography variant="button" color="primary.main" fontWeight={700}>
                                    VER LIBRERÍA COMPLETA
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
