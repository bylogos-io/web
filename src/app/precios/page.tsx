import type { Metadata } from 'next';
import { Box } from '@mui/material';
import { PricingHero } from '@/sections/pricing/PricingHero';
import { PricingTable } from '@/sections/pricing/PricingTable';
import { PricingTitle } from '@/sections/pricing/PricingTitle';

export const metadata: Metadata = {
	title: 'Planes y Precios | LogOS',
	description:
		'Encuentra el plan que mejor se adapte a tus necesidades industriales. Precios competitivos para soluciones SCADA y BMS de última generación.',
};

export default function Precios() {
	return (
		<Box component='main'>
			<PricingTitle />
			<PricingHero />
			<PricingTable />
		</Box>
	);
}
