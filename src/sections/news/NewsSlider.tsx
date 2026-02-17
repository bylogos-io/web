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
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { News } from "../../../.velite"; // Assuming types will be generated here or adaptable

// Placeholder interface if Velite types aren't ready yet during dev
interface NewsItem {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  date: string;
}

interface NewsSliderProps {
  posts: NewsItem[];
  autoPlayInterval?: number;
}

export function NewsSlider({
  posts,
  autoPlayInterval = 5000,
}: NewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();

  const handleNext = useCallback(() => {
    if (posts.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  }, [posts.length]);

  const handlePrev = useCallback(() => {
    if (posts.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (posts.length === 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [handleNext, autoPlayInterval, posts.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  if (!posts || posts.length === 0) return null;

  return (
    <Box
      sx={{ position: "relative", width: "100%", overflow: "hidden", py: 4 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            height: { xs: 400, md: 500, lg: 600 },
            width: "100%",
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "background.paper",
            boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.4)}`,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.6 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${posts[currentIndex].cover || "/images/news-placeholder.png"})`,
                  filter: "brightness(0.7)",
                }}
              />

              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.9)} 0%, transparent 60%)`,
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 3, md: 6 },
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {new Date(posts[currentIndex].date).toLocaleDateString(
                      "es-ES",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight={900}
                    sx={{
                      fontSize: { xs: "1.8rem", md: "3rem" },
                      letterSpacing: "-0.02em",
                      mb: 2,
                      color: "common.white",
                    }}
                  >
                    {posts[currentIndex].title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "grey.300",
                      maxWidth: 700,
                      lineHeight: 1.5,
                      mb: 3,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {posts[currentIndex].description}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/${posts[currentIndex].slug}`}
                    variant="contained"
                    size="large"
                    sx={{
                      textTransform: "none",
                      px: 4,
                      fontWeight: 700,
                    }}
                  >
                    Leer Artículo
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            sx={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              backgroundColor: alpha(theme.palette.background.default, 0.4),
              backdropFilter: "blur(8px)",
              color: "white",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              backgroundColor: alpha(theme.palette.background.default, 0.4),
              backdropFilter: "blur(8px)",
              color: "white",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            mt: 4,
          }}
        >
          {posts.map((_, index) => (
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
      </Container>
    </Box>
  );
}
