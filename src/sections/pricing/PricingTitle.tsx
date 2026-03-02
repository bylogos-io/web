'use client';

import { Box, Typography, Container } from '@mui/material';

export function PricingTitle() {
  return (
    <Box
      sx={{
        position: 'relative',
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
        sx={{ position: 'relative', zIndex: 20, mt: 15, textAlign: 'center' }}
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
          INVERSIÓN ESTRATÉGICA
        </Typography>
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
            Planes y{' '}
          </Box>
          <Box component='span' sx={{ color: 'primary.main' }}>
            Precios
          </Box>
        </Typography>

        <Typography
          variant='h5'
          sx={{
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Escalabilidad y eficiencia adaptada a tu operación industrial. Elige
          el modelo que mejor se adapte a tu infraestructura y objetivos de
          negocio.
        </Typography>
      </Container>
    </Box>
  );
}
