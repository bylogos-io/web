'use client';

import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Card,
  Avatar,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ABOUT_FOUNDERS_DATA } from '@/data/about';

export function AboutFounders() {
  return (
    <Box component='section' sx={{ py: 12, mb: 10 }}>
      <Container maxWidth='lg'>
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          variant='h2'
          sx={{
            color: 'text.primary',
            fontWeight: 800,
            textAlign: 'center',
            mb: 8,
          }}
        >
          Conoce a nuestros fundadores
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {ABOUT_FOUNDERS_DATA.founders.map((founder, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 5 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                sx={{ height: '100%' }}
              >
                <Card
                  sx={(theme) => ({
                    height: '100%',
                    p: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.4),
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                    },
                  })}
                >
                  <Avatar
                    src={founder.image}
                    alt={founder.name}
                    sx={{
                      width: 140,
                      height: 140,
                      mb: 4,
                      border: (theme) =>
                        `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                      bgcolor: 'background.default',
                      '& .MuiAvatar-img': {
                        filter:
                          'grayscale(100%) sepia(100%) hue-rotate(345deg) saturate(500%) brightness(0.9) contrast(1.2)',
                      },
                    }}
                  />
                  <Typography variant='h5' fontWeight={700} gutterBottom>
                    {founder.name}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
                  >
                    {founder.role}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    {founder.description}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
