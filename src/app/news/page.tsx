import { news } from '@/velite'; // Using alias
import { Box } from '@mui/material';
import { NewsTitle } from '@/sections/news/NewsTitle';
import { NewsSlider } from '@/sections/news/NewsSlider';
import { NewsPosts } from '@/sections/news/NewsPosts';
import { IndustryFooter } from '@/sections/industries/IndustryFooter'; // Reusing footer as requested ('mismo footer') - actually prompt said "same header and footer as most sections" which usually means global layout, but Industry page has IndustryFooter.
import { Metadata } from 'next';
// User said: "usará mismo header y footer que la mayoria de las secciones del website"
// Industry page uses `IndustryFooter`. Global layout likely handles Header/Footer if not overridden.
// Industries page explicitly imports `IndustryFooter`. I will check if I should use that or default.
// "toma la page de industrias/ como ejemplo"
// Industrias page has: IndustryTitle, IndustrySlider, IndustryCards, IndustryFooter.
// But the prompt also said "same header and footer as MOST sections".
// Typically "most sections" implies the properties in layout.tsx.
// However `industrias/page.tsx` returns a `Box component="main"` and includes `IndustryFooter`.
// I will include `IndustryFooter` for consistency with Industrias if that's the "News" specific footer,
// OR I should rely on global `layout.tsx` if "most sections" means standard pages.
// Given "como ejemplo puedes tomar la page de industrias/", I will follow the pattern of Industrias Page for now,
// but if Industrias has a specific footer, News might need one too.
// Let's assume standard global footer is desired but Industrias overrides it?
// Actually, looking at `src/app/industrias/page.tsx`, it includes `IndustryFooter`.
// I'll stick to the global layout if possible, BUT the user said "usará mismo header y footer que la mayoria de las secciones".
// If Industrias is the exception, then I should NOT use IndustryFooter.
// But then user said "toma la page de industrias/ como ejemplo".
// I will assume Industrias is the structural example (components composition) but the Footer requirement "same as most" MIGHT mean standard footer.
// Let's check `src/sections/layout/Footer.tsx`.
// I'll check `src/app/layout.tsx` quickly to see if footer is there.
// If I can't check now, safe bet is to follow Industrias pattern if it's the explicit reference.
// Wait, prompt: "usará mismo header y footer que la mayoria de las secciones del website".
// Industrias might be a "Landing Page" style with custom footer.
// If I make a `src/app/news/page.tsx`, it automatically inherits RootLayout.
// Does RootLayout have a footer?
// PROBABLY.
// In `industrias/page.tsx`, `IndustryFooter` is manually added.
// I will NOT add `IndustryFooter` to News unless I'm sure. I'll stick to inheriting global footer.
// Wait, `industrias/page.tsx` is:
/*
export default function Industrias() {
  return (
    <Box component="main">
      <IndustryTitle />
      <IndustrySlider />
      <IndustryCards />
      <IndustryFooter />
    </Box>
  );
}
*/
// If I use global footer, I shouldn't add one here.
// I'll leave footer OUT of the page component, letting Layout handle it, UNLESS I see `layout.tsx` doesn't have it.
// I'll view `src/app/layout.tsx` to be sure.

// Better yet, I'll just write the page without footer first, as that's safer for "most sections".
// But I need to sort the news.

export const metadata: Metadata = {
	title: 'Noticias y Blog',
	description:
		'Mantente informado con las últimas noticias sobre tecnología industrial, IA e IoT de la mano de LogOS.',
};

export default function NewsPage() {
	// Sort posts by date descending (newest first)
	const sortedPosts = news.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// Top 5 for slider
	const sliderPosts = sortedPosts.slice(0, 5);

	return (
		<Box component='main'>
			<NewsTitle />
			<NewsSlider posts={sliderPosts} />
			<NewsPosts posts={sortedPosts} />
		</Box>
	);
}
