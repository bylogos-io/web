'use client';

import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  alpha,
  Stack as MuiStack,
  Chip,
  Card,
} from '@mui/material';

import {
  TECH_STACK,
  ARCHITECTURES,
  TECH_SPECS,
  MINIMUM_REQUIREMENTS,
} from '@/data/landing';

export function Stack() {
  const techStack = TECH_STACK;
  const architectures = ARCHITECTURES;

  return (
    <Box
      component='section'
      id='stack'
      sx={(theme) => ({
        py: 12,
        backgroundColor: alpha(theme.palette.secondary.main, 0.05),
      })}
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
              Compatibilidad
            </Box>{' '}
            <Box component='span' sx={{ color: 'primary.main' }}>
              Técnica
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
            Hardware verificado y optimizado para LogOS. Plataformas
            industriales probadas que garantizan máximo rendimiento y
            estabilidad.
          </Typography>
        </Box>

        {/* Tech stack grid */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Grid container spacing={3} sx={{ maxWidth: 1000, mx: 'auto' }}>
            {techStack.map((tech, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
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
                      textAlign: 'center',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: alpha(
                          theme.palette.background.paper,
                          0.9,
                        ),
                        boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                      },
                      '& .tech-logo': {
                        transition: 'color 0.3s ease',
                      },
                      '&:hover .tech-logo': {
                        color: 'primary.main',
                      },
                    })}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        mb: 3,
                        flexWrap: 'wrap',
                      }}
                    >
                      {tech.chips?.map((chip: string) => (
                        <Chip
                          key={chip}
                          variant='outlined'
                          label={chip}
                          size='small'
                        />
                      ))}
                    </Box>
                    <Box
                      className='tech-logo'
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                        color: 'primary.main',
                      }}
                    >
                      {tech.logo}
                    </Box>
                    <Typography variant='h6' sx={{ mb: 1.5, fontWeight: 700 }}>
                      {tech.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {tech.description}
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Platform compatibility */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          sx={{ maxWidth: 1000, mx: 'auto' }}
        >
          <Card sx={{ p: { xs: 4, md: 6 } }}>
            <Typography
              variant='h6'
              sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}
            >
              Compatibilidad de Arquitecturas
            </Typography>

            <Grid container spacing={2} justifyContent='center'>
              {architectures.map((arch, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={(theme) => ({
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      ...(arch.supported
                        ? {
                            borderColor: alpha(theme.palette.primary.main, 0.5),
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05,
                            ),
                          }
                        : arch.coming
                          ? {
                              borderColor: 'divider',
                              borderStyle: 'dashed',
                              backgroundColor: alpha(
                                theme.palette.action.disabledBackground,
                                0.05,
                              ),
                            }
                          : {
                              borderColor: 'divider',
                              backgroundColor: alpha(
                                theme.palette.secondary.main,
                                0.1,
                              ),
                            }),
                    })}
                  >
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {arch.name}
                    </Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        color: arch.supported
                          ? 'primary.main'
                          : 'text.secondary',
                      }}
                    >
                      {arch.supported
                        ? '✓ Soportado'
                        : arch.coming
                          ? 'Próximamente'
                          : 'No disponible'}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Technical requirements */}
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                Requisitos mínimos para LogOS
              </Typography>
              <MuiStack
                direction='row'
                spacing={2}
                justifyContent='center'
                flexWrap='wrap'
                useFlexGap
                sx={{ gap: 2 }}
              >
                <Chip
                  label={MINIMUM_REQUIREMENTS[0].label}
                  variant='outlined'
                  sx={{ px: 2, py: 0.75 }}
                />
                <Chip
                  label={MINIMUM_REQUIREMENTS[1].label}
                  variant='outlined'
                  sx={{ px: 2, py: 0.75 }}
                />
                <Chip
                  label={MINIMUM_REQUIREMENTS[2].label}
                  variant='outlined'
                  sx={{ px: 2, py: 0.75 }}
                />
              </MuiStack>
            </Box>
          </Card>
        </Box>

        {/* Technical specs - Stats or protocols */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{ mt: 10 }}
        >
          <Grid container spacing={4} sx={{ maxWidth: 900, mx: 'auto' }}>
            {TECH_SPECS.map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Box
                  sx={(theme) => ({
                    borderLeft: {
                      xs: 'none',
                      md:
                        idx > 0
                          ? `2px solid ${alpha(theme.palette.primary.main, 0.3)}`
                          : 'none',
                    },
                    pl: { md: 4 },
                    textAlign: { xs: 'center', md: 'left' },
                  })}
                >
                  <Typography
                    variant='h5'
                    color='primary.main'
                    sx={{ fontWeight: 700 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    {stat.sub}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}
