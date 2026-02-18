import type { Metadata } from 'next';
import { Box } from '@mui/material';
import { IndustrySlider } from '@/sections/industries/IndustrySlider';
import { IndustryCards } from '@/sections/industries/IndustryCards';
import { IndustryTitle } from '@/sections/industries/IndustryTitle';
import { IndustryFooter } from '@/sections/industries/IndustryFooter';

export const metadata: Metadata = {
	title: 'Soluciones por Industria',
	description:
		'Descubre cómo LogOS optimiza operaciones en Smart Cities, gestión de edificios y entornos industriales.',
};

export default function Industrias() {
	return (
		<Box component='main'>
			<IndustryTitle />
			<IndustrySlider />
			<IndustryCards />
			<IndustryFooter />
		</Box>
	);
}
