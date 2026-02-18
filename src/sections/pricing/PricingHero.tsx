'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  Button,
  alpha,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';

const pricingPlans = [
  {
    title: 'EDGE',
    price: 'Desde 15 UF',
    description: 'Solución local para control crítico.',
    features: [
      'Protocolos Industriales',
      'Hardware Optimizado',
      'Baja Latencia',
    ],
    icon: SettingsInputComponentOutlinedIcon,
    color: 'primary.main',
  },
  {
    title: 'CLOUD',
    price: 'Desde 8 UF/mes',
    description: 'Escalabilidad e inteligencia en la nube.',
    features: ['Respaldo Híbrido', 'IA Copilot', 'Dashboards Web'],
    icon: CloudOutlinedIcon,
    color: 'secondary.main',
  },
  {
    title: 'CONTACTANOS',
    price: 'Custom',
    description: '¿Necesitas una solución a medida?',
    features: ['Soporte 24/7', 'Integraciones Custom', 'Enterprise Grade'],
    icon: ContactSupportOutlinedIcon,
    color: 'text.primary',
    isContact: true,
  },
];

export function PricingHero() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {pricingPlans.map((plan, index) => {
            const isMiddle = index === 1;

            return (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ height: '100%' }}
                >
                  <Card
                    sx={(theme) => ({
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: alpha(
                        theme.palette.background.paper,
                        0.4,
                      ),
                      backdropFilter: 'blur(12px)',
                      border: isMiddle
                        ? `2px solid ${alpha(theme.palette.primary.main, 0.6)}`
                        : `1px solid ${alpha(theme.palette.primary.main, 0.6)}`,
                      transition: 'all 0.3s ease',
                      transform: isMiddle
                        ? { xs: 'scale(1.05)', md: 'scale(1.1)' }
                        : 'scale(1)',
                      zIndex: isMiddle ? 2 : 1,
                      '&:hover': {
                        transform: isMiddle
                          ? {
                              xs: 'translateY(-4px)',
                              md: 'scale(1.1) translateY(-4px)',
                            }
                          : 'translateY(-4px)',
                      },
                    })}
                  >
                    <Stack spacing={3} sx={{ flex: 1 }}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                      >
                        <Box
                          sx={(theme) => ({
                            p: 1.5,
                            borderRadius: 1.5,
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.1,
                            ),
                            color: plan.color,
                            display: 'flex',
                          })}
                        >
                          <plan.icon />
                        </Box>
                        <Typography
                          variant='h6'
                          fontWeight={800}
                          letterSpacing={1}
                        >
                          {plan.title}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant='h4' fontWeight={900}>
                          {plan.price}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          sx={{ mt: 1 }}
                        >
                          {plan.description}
                        </Typography>
                      </Box>

                      <Stack spacing={1}>
                        {plan.features.map((feature, fIdx) => (
                          <Typography
                            key={fIdx}
                            variant='caption'
                            sx={{
                              color: 'text.secondary',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              component='span'
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                bgcolor: plan.color,
                              }}
                            />
                            {feature}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>

                    <Box sx={{ mt: 4 }}>
                      <Link
                        href='/#newsletter'
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          fullWidth
                          variant={plan.isContact ? 'contained' : 'outlined'}
                          sx={{
                            fontWeight: 700,
                            py: 1.5,
                          }}
                        >
                          {plan.isContact ? 'Contactar' : 'Más Información'}
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
