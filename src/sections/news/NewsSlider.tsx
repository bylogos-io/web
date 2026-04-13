'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  IconButton,
  Typography,
  alpha,
  Container,
  Button,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { News } from '../../../.velite'; // Assuming types will be generated here or adaptable

// Placeholder interface if Velite types aren't ready yet during dev
interface NewsItem {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  date: string;
  redirectUrl?: string;
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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  if (!posts || posts.length === 0) return null;

  return (
    <Box
      sx={{ position: 'relative', width: '100%', overflow: 'hidden', py: 4 }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={(theme) => ({
            position: 'relative',
            height: { xs: 400, md: 500, lg: 600 },
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
                x: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }, // Cinematic smooth ease
                opacity: { duration: 0.6 },
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${posts[currentIndex].cover || '/images/news-placeholder.webp'})`,
                  filter: 'blur(7px) brightness(0.6)',
                  transform: 'scale(1.1)', // Scale up slightly to prevent blur edges from showing
                }}
              />

              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 100%)',
                }}
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
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography
                    variant='overline'
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    {new Date(posts[currentIndex].date).toLocaleDateString(
                      'es-ES',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      },
                    )}
                  </Typography>
                  <Typography
                    variant='h3'
                    fontWeight={900}
                    sx={{
                      fontSize: { xs: '1.8rem', md: '3rem' },
                      letterSpacing: '-0.02em',
                      mb: 2,
                      color: 'common.white',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {posts[currentIndex].title}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      color: 'grey.300',
                      maxWidth: 700,
                      lineHeight: 1.5,
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 2, md: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                  >
                    {posts[currentIndex].description}
                  </Typography>
                  <Button
                    component={Link}
                    href={posts[currentIndex].redirectUrl || `/${posts[currentIndex].slug}`}
                    target={posts[currentIndex].redirectUrl ? '_blank' : '_self'}
                    rel={posts[currentIndex].redirectUrl ? 'noopener noreferrer' : undefined}
                    variant='contained'
                    size='large'
                    sx={{
                      textTransform: 'none',
                      px: 4,
                      fontWeight: 700,
                    }}
                  >
                    {posts[currentIndex].redirectUrl ? 'Ver Noticia Externa' : 'Leer Artículo'}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            aria-label='Noticia anterior'
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
            aria-label='Siguiente noticia'
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
          {posts.map((_, index) => (
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
