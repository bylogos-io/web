import type { Metadata } from 'next';
import { Box } from '@mui/material';
import { AboutHero } from '@/sections/about/AboutHero';
import { AboutInfo } from '@/sections/about/AboutInfo';
import { AboutFounders } from '@/sections/about/AboutFounders';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | LogOS',
  description:
    'Conoce al equipo detrás de LogOS y nuestra misión de transformar la gestión industrial mediante IA y AIoT.',
};

export default function Nosotros() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 15 },
        pb: 10,
        flex: 1,
        backgroundColor: 'background.default',
      }}
    >
      <AboutHero />
      <AboutInfo />
      <AboutFounders />
    </Box>
  );
}
