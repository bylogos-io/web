import type { Metadata } from 'next';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
	title: 'Sobre Nosotros',
	description:
		'Conoce al equipo detrás de LogOS y nuestra misión de transformar la gestión industrial mediante IA y AIIoT.',
};

export default function Nosotros() {
	return (
		<Container sx={{ mt: 15, mb: 10, flex: 1 }}>
			<Typography variant='h2' fontWeight={800} gutterBottom>
				Nosotros
			</Typography>
			<Typography variant='h5' color='text.secondary'>
				Esta página está en construcción. Pronto conocerás más sobre LogOS y
				nuestro equipo.
			</Typography>
		</Container>
	);
}
