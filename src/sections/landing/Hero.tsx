'use client';

import { motion } from 'framer-motion';
import { Box, Container, Typography, alpha } from '@mui/material';
import { ReterminalScene } from '@/components/3d/ReterminalScene';

export function Hero() {
  return (
    <Box
      component='section'
      id='hero'
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth='lg'
        sx={{ position: 'relative', zIndex: 20, mt: 15 }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 'lg', mx: 'auto' }}>
          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant='subtitle2'
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                userSelect: 'none',
                pointerEvents: 'none',
                letterSpacing: 2,
                mb: 2,
              }}
            >
              PROCESOS INTELLIGENTES, INDUSTRIA EFICIENTE.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5rem' },
                mb: 3,
                lineHeight: 1.1,
                userSelect: 'none',
                pointerEvents: 'none',
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
                LogOS es la nueva manera de eficiencia{' '}
              </Box>
              <Box component='span' sx={{ color: 'primary.main' }}>
                industrial
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant='h5'
              color='text.secondary'
              sx={{
                mb: 5,
                maxWidth: 768,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              La mejor integración{' '}
              <Box component='strong' sx={{ color: 'primary.main' }}>
                AIIoT
              </Box>{' '}
              para optimización de procesos industriales.
            </Typography>
          </motion.div>
        </Box>
      </Container>

      <Container
        maxWidth='lg'
        sx={{ position: 'relative', zIndex: 20, mt: { xs: 0, md: 2 } }}
      >
        <Box sx={{ position: 'relative', py: 0 }}>
          <ReterminalScene />
        </Box>
      </Container>
    </Box>
  );
}
