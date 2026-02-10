"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Box, Typography, useTheme, alpha, Container } from "@mui/material";
import {
  CloudOutlined as CloudIcon,
  MonitorOutlined as MonitorIcon,
  SettingsRemoteOutlined as RadioReceiverIcon,
  SettingsInputAntennaOutlined as RadioTowerIcon,
  DnsOutlined as ServerIcon,
  SmartphoneOutlined as SmartphoneIcon,
  PersonOutlineOutlined as UserIcon,
  RadioOutlined as RadioIcon,
} from "@mui/icons-material";

interface CircleProps {
  children?: React.ReactNode;
  size?: number;
  active?: boolean;
}

const Circle = ({ children, size = 48, active = true }: CircleProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        zIndex: 10,
        display: "flex",
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: "2px solid",
        borderColor: active ? "primary.main" : "divider",
        bgcolor: active
          ? alpha(theme.palette.primary.main, 0.1)
          : "background.paper",
        p: 1.5,
        boxShadow: `0 0 20px ${alpha(theme.palette.common.black, 0.2)}`,
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </Box>
  );
};

function ArchitectureDiagram() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: 400,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        p: 2,
      }}
    >
      {/* SVG Connections (Static but represented via MUI) */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Simple lines connecting sections as placeholders for AnimatedBeam */}
        <line
          x1="20%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.2)}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="20%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.2)}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="20%"
          y1="70%"
          x2="50%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.2)}
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.4)}
          strokeWidth="2"
        />

        <line
          x1="80%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.2)}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="80%"
          y1="70%"
          x2="50%"
          y2="50%"
          stroke={alpha(theme.palette.primary.main, 0.2)}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 800,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: alpha(theme.palette.background.paper, 0.5),
          p: 4,
          borderRadius: 2,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          zIndex: 1,
        }}
      >
        {/* Devices Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Circle>
            <RadioIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
          <Circle>
            <RadioTowerIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
          <Circle>
            <RadioReceiverIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
        </Box>

        {/* Central Processing Column */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Circle size={64}>
            <ServerIcon
              sx={{ fontSize: 32, color: theme.palette.primary.main }}
            />
          </Circle>
          <Circle size={64}>
            <CloudIcon
              sx={{ fontSize: 32, color: theme.palette.primary.main }}
            />
          </Circle>
        </Box>

        {/* Access Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Circle>
            <SmartphoneIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
          <Circle>
            <UserIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
          <Circle>
            <MonitorIcon sx={{ color: theme.palette.primary.main }} />
          </Circle>
        </Box>
      </Box>
    </Box>
  );
}

export function Arch() {
  return (
    <Box
      component="section"
      id="architecture"
      sx={{
        py: 12,
        bgcolor: (theme: any) => alpha(theme.palette.secondary.main, 0.05),
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.primary" }}>
              Flujo de{" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              Procesamiento
            </Box>
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 768, mx: "auto", fontWeight: 400 }}
          >
            Nuestra arquitectura de procesamiento en el borde permite manejar
            los datos de manera inteligente.
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <ArchitectureDiagram />
        </Box>
      </Container>
    </Box>
  );
}
