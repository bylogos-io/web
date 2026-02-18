'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Image from 'next/image';
import Logos from '@public/icon.svg';
import { Box, Typography, alpha } from '@mui/material';

interface Doc {
  slug: string;
  title: string;
  order: number;
}

export function DocsSidebar({ docs }: { docs: Doc[] }) {
  const pathname = usePathname();

  // Ordenamos los documentos según el campo `order`
  const sortedDocs = [...docs].sort((a, b) => a.order - b.order);

  return (
    <Box
      sx={{
        width: 280,
        borderRight: '1px solid',
        borderColor: 'divider',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
              transition: 'color 0.2s',
              mb: 3,
            }}
          >
            <ArrowBackOutlinedIcon sx={{ fontSize: 18 }} />
            <Typography variant='body2' fontWeight='medium'>
              Volver al inicio
            </Typography>
          </Box>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={(theme) => ({
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              border: '1px solid',
              borderColor: alpha(theme.palette.primary.main, 0.2),
              p: 0.75,
            })}
          >
            <Image src={Logos} alt='Logos Logo' width={24} height={24} />
          </Box>
          <Typography variant='subtitle1' fontWeight='bold'>
            Documentación
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        <Box
          component='nav'
          sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
        >
          {sortedDocs.map((doc) => {
            const cleanSlug = doc.slug.replace(/^docs\//, '');
            const href = `/docs/${cleanSlug}`;
            const isExactActive = pathname === href || pathname === `${href}/`;
            const isDefaultActive =
              (pathname === '/docs' || pathname === '/docs/') &&
              doc.order === 1;
            const isActive = isExactActive || isDefaultActive;

            return (
              <Link
                key={doc.slug}
                href={href}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  sx={(theme) => ({
                    px: 2,
                    py: 1.25,
                    borderRadius: 1.5,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    bgcolor: isActive
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                    color: isActive ? 'primary.main' : 'text.secondary',
                    fontWeight: isActive ? 600 : 500,
                    '&:hover': {
                      bgcolor: isActive
                        ? alpha(theme.palette.primary.main, 0.12)
                        : alpha(theme.palette.action.hover, 0.04),
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  })}
                >
                  {doc.title}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
