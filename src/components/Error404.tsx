"use client";

import { motion } from "framer-motion";
// Eliminados imports de ./ui/*
import {
    HomeOutlined as HomeIcon,
    ArrowBackOutlined as ArrowLeftIcon,
    WarningAmberOutlined as AlertTriangleIcon,
    ElectricBoltOutlined as ZapIcon,
    QueryStatsOutlined as ActivityIcon,
    SearchOutlined as SearchIcon,
    MailOutlineOutlined as MailIcon,
} from "@mui/icons-material";
import Image from "next/image";
import logoImage from "@public/isologo.svg";
import { Box, Container, Typography, Stack, Grid2 as Grid, alpha, Chip, Card, Button } from "@mui/material";

export default function ERR404() {
    const diagnostics = [
        { label: "HTTP Status", value: "404", status: "error" },
        { label: "Connection", value: "Active", status: "success" },
        { label: "Protocol", value: "HTTPS", status: "success" },
        { label: "Response Time", value: "45ms", status: "success" },
    ];

    const suggestions = [
        {
            icon: HomeIcon,
            title: "Volver al inicio",
            description: "Regresa a la página principal de LogOS.",
            action: "Ir a inicio",
            href: "/",
        },
        {
            icon: SearchIcon,
            title: "Revisar la URL",
            description: "Revisa la dirección que estás buscando.",
            action: "Revisar",
        },
        {
            icon: MailIcon,
            title: "Newsletter",
            description: "Suscríbete a nuestra bandeja de entrada y entérate de todo.",
            action: "Suscribir",
            href: "#newsletter",
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "background.default",
                color: "text.primary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background pattern */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${alpha("#fff", 0.02)} 1px, transparent 1px), linear-gradient(90deg, ${alpha("#fff", 0.02)} 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                    pointerEvents: "none",
                }}
            />

            {/* Animated background elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={(theme) => ({
                    position: "absolute",
                    top: "25%",
                    left: "25%",
                    width: 256,
                    height: 256,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: "50%",
                    filter: "blur(48px)",
                })}
            />
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                sx={(theme) => ({
                    position: "absolute",
                    bottom: "25%",
                    right: "25%",
                    width: 384,
                    height: 384,
                    backgroundColor: alpha(theme.palette.error.main, 0.05),
                    borderRadius: "50%",
                    filter: "blur(48px)",
                })}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                <Box sx={{ maxWidth: 900, mx: "auto" }}>
                    {/* Header with logo */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        sx={{ textAlign: "center", mb: 8 }}
                    >
                        <Image
                            src={logoImage}
                            alt="LogOS Logo"
                            width={150}
                            height={48}
                            style={{
                                height: "auto",
                                margin: "0 auto 16px",
                                opacity: 0.5,
                            }}
                        />
                        <Chip
                            label="Página no encontrada"
                            color="error"
                            variant="outlined"
                            sx={(theme) => ({
                                backgroundColor: alpha(theme.palette.error.main, 0.1),
                                border: `1px solid ${alpha(theme.palette.error.main, 0.3)}`,
                                opacity: 0.7,
                                fontWeight: 600,
                            })}
                        />
                    </Box>

                    <Grid container spacing={8} alignItems="center">
                        {/* Error display */}
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            component={motion.div}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
                                <Typography
                                    variant="h1"
                                    sx={(theme) => ({
                                        fontSize: { xs: "5rem", md: "8rem" },
                                        color: alpha(theme.palette.primary.main, 0.3),
                                        fontWeight: 700,
                                        lineHeight: 1,
                                        mb: 2,
                                        userSelect: "none",
                                    })}
                                >
                                    404
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: "2.5rem", md: "3rem" },
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                >
                                    Página{" "}
                                    <Box component="span" sx={{ color: "error.main" }}>
                                        no encontrada
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="text.secondary"
                                    sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
                                >
                                    La ruta solicitada no existe. Verifica la URL o utiliza los enlaces de navegación.
                                </Typography>
                            </Box>

                            {/* System diagnostics */}
                            <Card sx={{ p: 4 }}>
                                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                                    <ActivityIcon sx={{ color: "primary.main", fontSize: 20 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Diagnóstico del sistema
                                    </Typography>
                                </Stack>

                                <Grid container spacing={3}>
                                    {diagnostics.map((diag, index) => (
                                        <Grid key={index} size={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Typography variant="caption" color="text.secondary">
                                                    {diag.label}:
                                                </Typography>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color:
                                                                diag.status === "error" ? "error.main" : "primary.main",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {diag.value}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: "50%",
                                                            backgroundColor:
                                                                diag.status === "error" ? "error.main" : "primary.main",
                                                        }}
                                                    />
                                                </Stack>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Card>
                        </Grid>

                        {/* Solutions panel */}
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            component={motion.div}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                    justifyContent={{ xs: "center", md: "flex-start" }}
                                    sx={{ mb: 2 }}
                                >
                                    <AlertTriangleIcon sx={{ color: "primary.main", fontSize: 24 }} />
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        Recuperación
                                    </Typography>
                                </Stack>
                                <Typography color="text.secondary">
                                    Selecciona una de las siguientes opciones para continuar navegando.
                                </Typography>
                            </Box>

                            {/* Action cards */}
                            <Stack spacing={2} sx={{ mb: 4 }}>
                                {suggestions.map((suggestion, index) => (
                                    <Box
                                        key={index}
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 * index }}
                                    >
                                        <Card
                                            sx={(theme) => ({
                                                p: 2,
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    borderColor: alpha(theme.palette.primary.main, 0.5),
                                                    backgroundColor: alpha(theme.palette.background.paper, 0.6),
                                                    "& .suggestion-icon": {
                                                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                                                    },
                                                    "& .suggestion-button": {
                                                        opacity: 1,
                                                    },
                                                },
                                            })}
                                            onClick={() => suggestion.href && (window.location.href = suggestion.href)}
                                        >
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Box
                                                    className="suggestion-icon"
                                                    sx={(theme) => ({
                                                        p: 1.5,
                                                        borderRadius: 2,
                                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                        transition: "all 0.3s ease",
                                                    })}
                                                >
                                                    <suggestion.icon
                                                        sx={{
                                                            color: "primary.main",
                                                            fontSize: 20,
                                                        }}
                                                    />
                                                </Box>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                        {suggestion.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {suggestion.description}
                                                    </Typography>
                                                </Box>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="suggestion-button"
                                                    sx={{
                                                        opacity: 0,
                                                        transition: "opacity 0.3s ease",
                                                        display: { xs: "none", sm: "flex" },
                                                    }}
                                                >
                                                    {suggestion.action}
                                                </Button>
                                            </Stack>
                                        </Card>
                                    </Box>
                                ))}
                            </Stack>

                            {/* Primary actions */}
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{ flex: 1, height: 48 }}
                                    onClick={() => (window.location.href = "/")}
                                >
                                    <HomeIcon sx={{ fontSize: 18, mr: 1 }} />
                                    Volver al inicio
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{ flex: 1, height: 48 }}
                                    onClick={() => window.history.back()}
                                >
                                    <ArrowLeftIcon sx={{ fontSize: 18, mr: 1 }} />
                                    Página anterior
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Technical footer */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        sx={{ mt: 10, textAlign: "center" }}
                    >
                        <Card
                            sx={(theme) => ({
                                p: 3,
                                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                            })}
                        >
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={4}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <ZapIcon sx={{ color: "primary.main", fontSize: 20 }} />
                                    <Box sx={{ textAlign: "left" }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                            LogOS v1.1.0
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Plataforma • Tiempo de actividad: 99.9%
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Stack direction="row" spacing={4} sx={{ display: { xs: "none", sm: "flex" } }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            component={motion.div}
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                bgcolor: "primary.main",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <Typography variant="caption" color="text.secondary">
                                            Servicios activos
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                bgcolor: "primary.main",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <Typography variant="caption" color="text.secondary">
                                            Conectado a edge
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>

                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 3 }}>
                            Error ID: ERR-404 • Soporte técnico:{" "}
                            <Box component="span" sx={{ color: "primary.main" }}>
                                soporte@bylogos.cl
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
