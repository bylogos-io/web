import type { Metadata } from 'next';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
	title: 'Planes y Precios',
	description:
		'Encuentra el plan que mejor se adapte a tus necesidades industriales. Precios competitivos para soluciones SCADA y BMS de última generación.',
};

export default function Precios() {
	return (
		<Container sx={{ mt: 15, mb: 10, flex: 1 }}>
			<Typography variant='h2' fontWeight={800} gutterBottom>
				Precios
			</Typography>
			<Typography variant='h5' color='text.secondary'>
				Esta página está en construcción. Pronto encontrarás nuestros planes y
				tarifas.
			</Typography>
		</Container>
	);
}
