'use client';
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <Box component='section' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Grid container spacing={8} alignItems='center'>
          {/* Image Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={(theme) => ({
                position: 'relative',
                height: { xs: 300, md: 500 },
                borderRadius: 4,
                overflow: 'hidden',
                border: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
                backgroundImage: `url(/assets/about-us/why-logos.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter:
                  'grayscale(100%) sepia(100%) hue-rotate(345deg) saturate(500%) brightness(0.9) contrast(1.2)',
              })}
            />
          </Grid>

          {/* Text Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant='h1'
                fontWeight={900}
                sx={{
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  letterSpacing: '-0.02em',
                  mb: 3,
                }}
              >
                <Box
                  component='span'
                  sx={(theme) => ({
                    background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  })}
                >
                  ¿Por qué{' '}
                </Box>
                <Box component='span' sx={{ color: 'primary.main' }}>
                  LogOS?
                </Box>
              </Typography>

              <Typography
                variant='h6'
                color='text.secondary'
                sx={{ mb: 3, fontWeight: 400, lineHeight: 1.6 }}
              >
                LogOS nace de la necesidad de cerrar la brecha entre la
                industria tradicional y las tecnologías de Industria 4.0.
              </Typography>
              <Typography
                variant='h6'
                color='text.secondary'
                sx={{ mb: 3, fontWeight: 400, lineHeight: 1.6 }}
              >
                Nuestra plataforma AIoT integral proporciona visibilidad en
                tiempo real, inteligencia predictiva y control avanzado sobre
                activos críticos, todo con una arquitectura flexible y agnóstica
                de hardware.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
