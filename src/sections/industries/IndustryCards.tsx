'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Container, alpha, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const industryDetails = [
  {
    tag: 'Refinería 4.0',
    title: 'Petrolera',
    description:
      'Monitoreo de activos críticos y detección temprana de fallas en entornos de alta presión.',
    points: [
      'SCADA en la nube',
      'IA de mantenimiento predictivo',
      'Control de fugas',
    ],
    image: '/assets/industries/oil.png',
  },
  {
    tag: 'Smart Grid',
    title: 'Energética',
    description:
      'Distribución eficiente y almacenamiento optimizado para plantas de energía renovable.',
    points: [
      'Balance de carga real',
      'Integración FV e Hidro',
      'Monitoreo térmico',
    ],
    image: '/assets/industries/energy.png',
  },
  {
    tag: 'Safe Food',
    title: 'Alimenticia',
    description:
      'Trazabilidad completa y control microbiológico automatizado en líneas de procesamiento.',
    points: [
      'Control de frío 24/7',
      'Cumplimiento ISO 22000',
      'Dashboards KPI',
    ],
    image: '/assets/industries/food.png',
  },
  {
    tag: 'Water Tech',
    title: 'Aguas',
    description:
      'Gestión inteligente del ciclo del agua para plantas de tratamiento y desalinización.',
    points: [
      'Control de pH y químicos',
      'Optimización de bombeo',
      'Alertas hidrológicas',
    ],
    image: '/assets/industries/water.png',
  },
];

export function IndustryCards() {
  return (
    <Container maxWidth='lg' sx={{ mt: 15 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant='h2' fontWeight={800}>
          Soluciones por Sector
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary', mt: 2 }}>
          Explora cómo optimizamos cada industria con tecnología de punta.
        </Typography>
      </Box>

      {industryDetails.map((industry, index) => (
        <IndustryCard key={index} industry={industry} index={index} />
      ))}
    </Container>
  );
}

function IndustryCard({ industry, index }: { industry: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component={motion.div}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      sx={(theme) => ({
        position: 'relative',
        mb: 4,
        height: { xs: 'auto', md: 320 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
        backgroundColor: alpha(theme.palette.background.paper, 0.4),
        backdropFilter: 'blur(10px)',
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        borderRadius: 2,
        transition: 'border-color 0.3s ease',
        '&:hover': {
          borderColor: alpha(theme.palette.primary.main, 0.3),
        },
      })}
    >
      {/* Left Image Section */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '40%' },
          height: { xs: 200, md: '100%' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${industry.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter:
              'hue-rotate(200deg) saturate(2.5) brightness(1.1) contrast(1.1)',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <Chip
          label={industry.tag}
          sx={(theme) => ({
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 2,
            backgroundColor: alpha(theme.palette.primary.main, 0.9),
            fontWeight: 700,
            color: 'white',
            fontSize: '0.75rem',
            px: 1,
          })}
        />
      </Box>

      {/* Right Content Section */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          variant='h4'
          fontWeight={900}
          sx={{ mb: 1.5, color: 'text.primary' }}
        >
          {industry.title}
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: 'text.secondary', mb: 4, maxWidth: 450 }}
        >
          {industry.description}
        </Typography>

        <Stack spacing={1.5}>
          {industry.points.map((point: string, idx: number) => (
            <Stack key={idx} direction='row' spacing={1.5} alignItems='center'>
              <CheckCircleOutlineIcon
                sx={{ fontSize: 18, color: 'primary.main' }}
              />
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                {point}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      {/* Diagonal Reveal Overlay (Hover Mode) */}
      <AnimatePresence>
        {isHovered && (
          <Box
            component={motion.div}
            initial={{
              clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            }}
            animate={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)' }} // Adjusted for better text focus
            exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            sx={(theme) => ({
              position: 'absolute',
              inset: 0,
              backgroundColor: alpha(theme.palette.background.paper, 0.98),
              backdropFilter: 'blur(20px)',
              zIndex: 3,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              overflow: 'hidden',
            })}
          >
            {/* Left Reveal Content */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                p: { xs: 4, md: 6 },
                pl: { md: 8 }, // More padding on left to escape the diagonal cut
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Typography
                variant='overline'
                sx={{
                  color: 'primary.main',
                  fontWeight: 900,
                  mb: 1,
                  display: 'block',
                }}
              >
                VISTA PREVIA DE LOGOS
              </Typography>
              <Typography variant='h5' fontWeight={800} sx={{ mb: 3 }}>
                Panel de Control {industry.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'text.secondary', mb: 4, maxWidth: 350 }}
              >
                Integramos telemetría avanzada y visualización 3D específica
                para cada activo en {industry.title.toLowerCase()}.
              </Typography>
              <Stack
                direction='row'
                spacing={2}
                alignItems='center'
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Typography
                  variant='body2'
                  sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
                >
                  Detalles
                </Typography>
                <ArrowForwardIcon fontSize='small' />
              </Stack>
            </Box>

            {/* Right Reveal Image (Demo Foto) */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                m: 2,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${industry.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter:
                    'hue-rotate(200deg) saturate(2.5) grayscale(0.5) brightness(0.8)',
                }}
              />
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)}, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <Box
                  sx={(theme) => ({
                    px: 2,
                    py: 1,
                    backgroundColor: alpha(theme.palette.common.black, 0.6),
                    backdropFilter: 'blur(10px)',
                    borderRadius: 1.5,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                  })}
                >
                  <Typography
                    variant='caption'
                    sx={{ color: 'white', fontWeight: 800 }}
                  >
                    MÓDULO LIVE
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
