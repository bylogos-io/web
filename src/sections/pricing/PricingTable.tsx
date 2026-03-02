'use client';

import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  alpha,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { PRICING_FEATURES } from '@/data/pricing';

const features = PRICING_FEATURES;

export function PricingTable() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '30vh' }}>
      <Container maxWidth='lg' sx={{ py: 10 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant='h3' fontWeight={800} gutterBottom>
            Comparativa de Módulos
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Descubre todas las potencialidades de LogOS según el plan que
            necesites.
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={(theme) => ({
            backgroundColor: alpha(theme.palette.background.paper, 0.4),
            backdropFilter: 'blur(12px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            backgroundImage: 'none',
          })}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={(theme) => ({
                  '& th': {
                    borderBottom: `2px solid ${theme.palette.divider}`,
                  },
                })}
              >
                <TableCell sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
                  Funcionalidad
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: 'primary.main',
                  }}
                >
                  EDGE
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: 'secondary.main',
                  }}
                >
                  CLOUD
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ fontWeight: 800, fontSize: '1.1rem' }}
                >
                  ENTERPRISE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={(theme) => ({
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.action.hover, 0.02),
                    },
                  })}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.name}
                  </TableCell>
                  <TableCell align='center'>
                    {renderValue(feature.edge)}
                  </TableCell>
                  <TableCell align='center'>
                    {renderValue(feature.cloud)}
                  </TableCell>
                  <TableCell align='center'>
                    {renderValue(feature.enterprise)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

function renderValue(value: boolean | string) {
  if (typeof value === 'string') {
    return (
      <Typography variant='body2' fontWeight={700}>
        {value}
      </Typography>
    );
  }
  return value ? (
    <CheckCircleIcon color='primary' sx={{ fontSize: 20 }} />
  ) : (
    <RemoveIcon sx={{ color: 'text.disabled', opacity: 0.3 }} />
  );
}
