'use client';

import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container, Typography, Stack, Button } from '@mui/material';

import { PRIVACY_DATA } from '@/data/privacy';

export default function Privacy() {
  const sections = PRIVACY_DATA;

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        color: 'text.primary',
        py: 8,
      }}
    >
      <Container maxWidth='md'>
        <Button
          component={Link}
          href='/'
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            textTransform: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Volver al inicio
        </Button>

        <Typography
          variant='h3'
          component='h1'
          color='primary'
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Política de Privacidad
        </Typography>

        <Stack spacing={6}>
          {sections.map((section, index) => (
            <Box key={index}>
              <Typography
                variant='h5'
                component='h2'
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              {Array.isArray(section.content) ? (
                <Stack spacing={2}>
                  {section.content.map((text, i) => (
                    <Typography key={i} variant='body1' color='text.secondary'>
                      {text}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                section.content && (
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                  >
                    {section.content}
                  </Typography>
                )
              )}

              {section.list && (
                <Box
                  component='ul'
                  sx={{
                    pl: 2,
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  {section.list.map((item, i) => (
                    <Typography
                      key={i}
                      component='li'
                      variant='body1'
                      color='text.secondary'
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              )}

              {section.customContent}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
