'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';

const CLIENTS = [
  { name: 'Seeed Studio', src: '/seeed.png' },
  { name: 'UC Facultad de Ingeniería', src: '/uc-facultad-ingenieria.png', height: 52 },
  { name: 'Client 3', src: '/Mesa_de_trabajo_3.svg' },
  { name: 'Client 4', src: '/Mesa_de_trabajo_4.svg' },
  { name: 'Client 5', src: '/Mesa_de_trabajo_5.svg' },
  { name: 'Client 6', src: '/Mesa_de_trabajo_6.svg' },
  { name: 'Rodar', src: '/rodar_registrado.svg' },
];

const scrollRight = keyframes`
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
`;

export function ClientsMarquee() {
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <Box
      sx={{
        width: '100%',
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Typography
        variant='caption'
        sx={{
          color: 'text.disabled',
          letterSpacing: 3,
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          userSelect: 'none',
        }}
      >
        Confían en nosotros
      </Typography>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '40%',
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: (theme) =>
              `linear-gradient(to right, ${theme.palette.background.default} 40%, transparent)`,
          },
          '&::after': {
            right: 0,
            background: (theme) =>
              `linear-gradient(to left, ${theme.palette.background.default} 40%, transparent)`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: `${scrollRight} 28s linear infinite`,
          }}
        >
          {items.map((client, index) => (
            <Box
              key={`${client.name}-${index}`}
              component='img'
              src={client.src}
              alt={client.name}
              sx={{
                height: client.height ?? 32,
                width: 'auto',
                mx: 6,
                opacity: 0.35,
                filter: 'brightness(0) invert(1)',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
