'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton, Typography, alpha, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { INDUSTRY_SLIDER_DATA } from '@/data/industries';

const industries = INDUSTRY_SLIDER_DATA;

interface IndustrySliderProps {
  autoPlayInterval?: number;
}

export function IndustrySlider({
  autoPlayInterval = 5000,
}: IndustrySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

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
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [handleNext, autoPlayInterval]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
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
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <Box
      sx={{ position: 'relative', width: '100%', overflow: 'hidden', py: 4 }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={(theme) => ({
            position: 'relative',
            height: { xs: 300, md: 500, lg: 600 },
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.4)}`,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          })}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.6 },
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${industries[currentIndex].image})`,
                cursor: 'grab',
                filter:
                  'grayscale(100%) sepia(100%) hue-rotate(345deg) saturate(500%) brightness(0.9) contrast(1.2)', // Transforms to brand orange
              }}
            >
              {/* Overlay Gradient */}
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.9)} 0%, transparent 60%)`,
                })}
              />

              {/* Content */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 3, md: 6 },
                  zIndex: 2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography
                    variant='h3'
                    fontWeight={900}
                    sx={{
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      letterSpacing: '-0.02em',
                      mb: 2,
                    }}
                  >
                    {industries[currentIndex].title}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      color: 'text.secondary',
                      maxWidth: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {industries[currentIndex].description}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            aria-label='Industria anterior'
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            sx={(theme) => ({
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              backgroundColor: alpha(theme.palette.background.default, 0.4),
              backdropFilter: 'blur(8px)',
              color: 'white',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
              },
            })}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            aria-label='Siguiente industria'
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            sx={(theme) => ({
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              backgroundColor: alpha(theme.palette.background.default, 0.4),
              backdropFilter: 'blur(8px)',
              color: 'white',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.8),
              },
            })}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1.5,
            mt: 4,
          }}
        >
          {industries.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              sx={(theme) => ({
                width: index === currentIndex ? 40 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor:
                  index === currentIndex
                    ? 'primary.main'
                    : alpha(theme.palette.text.primary, 0.2),
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor:
                    index === currentIndex
                      ? 'primary.main'
                      : alpha(theme.palette.text.primary, 0.4),
                },
              })}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
