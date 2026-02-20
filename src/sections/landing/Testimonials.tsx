'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import {
  alpha,
  Box,
  Typography,
  Card,
  Grid2 as Grid,
  Container,
  Stack,
} from '@mui/material';

// MUI Icons replacements
import { TESTIMONIALS_DATA, STATS, CERTIFICATIONS } from '@/data/landing';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = TESTIMONIALS_DATA;
const stats = STATS;

export function Testimonials() {
  return (
    <Box
      component='section'
      id='testimonials'
      sx={{
        py: 12,
        //backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.2),
      }}
    >
      <Container maxWidth='lg'>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 8 }}
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
            CASOS DE ÉXITO
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              fontWeight: 800,
              lineHeight: 1.2,
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
              Resultados que hablan
            </Box>{' '}
            <Box component='span' sx={{ color: 'primary.main' }}>
              por sí mismos
            </Box>
          </Typography>
          <Typography
            variant='h5'
            color='text.secondary'
            sx={{
              maxWidth: 800,
              mx: 'auto',
              fontWeight: 400,
              fontSize: '1.125rem',
              lineHeight: 1.6,
            }}
          >
            Empresas líderes confían en LogOS para gestionar sus
            infraestructuras eléctricas más críticas.
          </Typography>
        </Box>

        {/* Statistics */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Typography
                  variant='h3'
                  color='primary'
                  sx={{ mb: 1, fontWeight: 700 }}
                >
                  {stat.value}
                </Typography>
                <Typography color='text.secondary'>{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent='center'>
            {testimonials.map((testimonial, index) => (
              <Grid key={index} size={{ xs: 12, lg: 4 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ height: '100%' }}
                >
                  <Card
                    sx={(theme) => ({
                      p: 4,
                      height: '100%',
                      position: 'relative',
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                      },
                    })}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        opacity: 0.2,
                        color: 'primary.main',
                      }}
                    >
                      {/* FormatQuoteIcon was used here, removed as it's not in the data but maybe should be? 
                          Actually let's check if I need to re-import it or if I can use it from data.
                          Wait, FormatQuoteIcon is a visual element, not part of the data. 
                          I should probably keep it imported or add it to constants if I want to be strict.
                          For now, I'll re-import it as it's a UI element.
                       */}
                      <FormatQuoteIcon sx={{ fontSize: 40 }} />
                    </Box>

                    <Stack
                      direction='row'
                      spacing={2}
                      alignItems='center'
                      sx={{ mb: 3 }}
                    >
                      <Box
                        sx={(theme) => ({
                          p: 1.5,
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1,
                          ),
                          display: 'flex',
                        })}
                      >
                        <testimonial.icon sx={{ color: 'primary.main' }} />
                      </Box>
                      <Box>
                        <Typography variant='body1' sx={{ fontWeight: 600 }}>
                          {testimonial.company}
                        </Typography>
                        <Typography
                          variant='caption'
                          color='text.secondary'
                          sx={{ display: 'block' }}
                        >
                          {testimonial.industry}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      variant='body1'
                      component='blockquote'
                      sx={{
                        color: 'text.primary',
                        mb: 4,
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}
                    >
                      {'"' + testimonial.quote + '"'}
                    </Typography>

                    <Stack spacing={1.5} sx={{ mt: 'auto' }}>
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                      >
                        <Typography variant='caption' color='text.secondary'>
                          Resultado clave:
                        </Typography>
                        <Typography
                          variant='caption'
                          color='primary.main'
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.metrics}
                        </Typography>
                      </Stack>
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                      >
                        <Typography variant='caption' color='text.secondary'>
                          Instalaciones:
                        </Typography>
                        <Typography variant='caption' color='text.primary'>
                          {testimonial.installations}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technical certifications */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          sx={{ mt: 10, textAlign: 'center' }}
        >
          <Typography color='text.secondary' sx={{ mb: 4 }}>
            Certificaciones y estándares cumplidos:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 5 },
            }}
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <Stack
                key={idx}
                direction='row'
                spacing={1.5}
                alignItems='center'
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                  }}
                />
                <Typography variant='caption' color='text.secondary'>
                  {cert}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
