"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  alpha,
  Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const industries = [
  {
    title: "Petróleo",
    subtitle: "Oil & Gas",
    description:
      "Optimización de procesos y monitoreo en tiempo real para la extracción y refinamiento.",
    image: "/assets/industries/oil.png",
  },
  {
    title: "Datos",
    subtitle: "Data Centers",
    description:
      "Supervisión continua de infraestructura crítica para garantizar disponibilidad y eficiencia operativa.",
    image: "/assets/industries/oil.png", // TODO: reemplazar con /assets/industries/datacenter.png cuando esté disponible
  },
  {
    title: "Aguas",
    subtitle: "Water",
    description:
      "Tratamiento de recursos y gestión crítica de sistemas hídricos.",
    image: "/assets/industries/water.png",
  },
  {
    title: "Energía",
    subtitle: "Power",
    description:
      "Gestión inteligente de redes eléctricas y fuentes de energía renovables.",
    image: "/assets/industries/energy.png",
  },
  {
    title: "Producción",
    subtitle: "Food & Beverage",
    description:
      "Control de calidad y automatización en líneas de producción masiva.",
    image: "/assets/industries/food.png",
  },
];

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1, zIndex: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    zIndex: 0,
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

interface IndustrySliderProps {
  autoPlayInterval?: number;
}

export function IndustrySlider({
  autoPlayInterval = 5000,
}: IndustrySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + industries.length) % industries.length,
    );
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; }
    };
    const start = () => {
      stop();
      timer = setInterval(handleNext, autoPlayInterval);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [handleNext, autoPlayInterval]);

  const arrowSx = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 4,
    backgroundColor: alpha(theme.palette.background.default, 0.3),
    backdropFilter: "blur(8px)",
    color: "white",
    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.8),
      borderColor: "transparent",
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* ── Hero image ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "55vh", md: "70vh" },
          overflow: "hidden",
          backgroundColor: "background.default",
        }}
      >
        {/* Sliding images */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 280, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${industries[currentIndex].image})`,
              filter:
                "hue-rotate(200deg) saturate(2.5) brightness(1.0) contrast(1.1)",
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay: dark top for header → transparent → dark bottom */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom,
              ${alpha(theme.palette.background.default, 0.5)} 0%,
              transparent 30%,
              transparent 40%,
              ${theme.palette.background.default} 100%)`,
            zIndex: 2,
          }}
        />

        {/* Left arrow */}
        <IconButton
          aria-label="Anterior"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          sx={{ ...arrowSx, left: { xs: 12, md: 40 } }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Right arrow */}
        <IconButton
          aria-label="Siguiente"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          sx={{ ...arrowSx, right: { xs: 12, md: 40 } }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* ── Centered text: label + gradient title ── */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 3,
            textAlign: "center",
            px: { xs: 10, md: 20 },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              letterSpacing: 4,
              fontSize: { xs: "0.85rem", md: "1rem" },
              mb: 1.5,
              userSelect: "none",
            }}
          >
            SECTORES ESTRATÉGICOS
          </Typography>

          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontSize: { xs: "3rem", md: "5.5rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <Box
              component="span"
              sx={{
                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Industrias Inteligentes
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* ── Below image: dots → title → description ── */}
      <Container maxWidth="md">
        {/* Dot indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            pt: 4,
            pb: 3,
          }}
        >
          {industries.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              sx={{
                width: index === currentIndex ? 40 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor:
                  index === currentIndex
                    ? "primary.main"
                    : alpha(theme.palette.text.primary, 0.2),
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor:
                    index === currentIndex
                      ? "primary.main"
                      : alpha(theme.palette.text.primary, 0.4),
                },
              }}
            />
          ))}
        </Box>

        {/* Industry title + subtitle */}
        <Box sx={{ position: "relative", height: 90, textAlign: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentIndex}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              style={{ position: "absolute", left: 0, right: 0 }}
            >
              <Typography
                variant="h3"
                fontWeight={900}
                sx={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                {industries[currentIndex].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  letterSpacing: 1,
                  mt: 0.5,
                  display: "block",
                }}
              >
                {industries[currentIndex].subtitle}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Industry description */}
        <Box sx={{ position: "relative", height: 80, textAlign: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${currentIndex}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.05 }}
              style={{ position: "absolute", left: 0, right: 0 }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, lineHeight: 1.6 }}
              >
                {industries[currentIndex].description}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
