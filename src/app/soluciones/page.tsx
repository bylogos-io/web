import type { Metadata } from 'next';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
	title: 'Nuestras Soluciones',
	description:
		'Explora nuestras soluciones Edge y Cloud para el control y monitorización inteligente de activos.',
};

export default function Soluciones() {
	return (
		<Container sx={{ mt: 15, mb: 10, flex: 1 }}>
			<Typography variant='h2' fontWeight={800} gutterBottom>
				Soluciones
			</Typography>
			<Typography variant='h5' color='text.secondary'>
				Esta página está en construcción. Pronto verás todos nuestros servicios
				Edge y Cloud.
			</Typography>
		</Container>
	);
}
