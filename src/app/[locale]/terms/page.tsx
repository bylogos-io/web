'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { getSiteContent } from '@/i18n/siteContent';

export default function Terms() {
  const locale = useLocale();
  const content = getSiteContent(locale);
  const sections = content.terms.sections;

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
          {content.terms.backHome}
        </Button>

        <Typography
          variant='h3'
          component='h1'
          color='primary'
          sx={{ fontWeight: 700, mb: 6 }}
        >
          {content.terms.title}
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

              {section.content && (
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ mb: 2 }}
                >
                  {section.content}
                </Typography>
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
              {section.title === 'Contacto' || section.title === 'Contact' || section.title === 'Contato' ? (
                <Typography variant='body1' color='text.secondary'>
                  {content.terms.contactIntro}{' '}
                  <Button
                    href='mailto:contact@bylogos.io'
                    sx={{
                      color: 'primary.main',
                      textTransform: 'none',
                      p: 0,
                      minWidth: 'auto',
                      fontWeight: 600,
                      '&:hover': { backgroundColor: 'transparent', opacity: 0.8 },
                    }}
                  >
                    contact@bylogos.io
                  </Button>
                </Typography>
              ) : null}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
