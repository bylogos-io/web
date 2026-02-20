import { news } from '@/velite'; // Using alias
import { Box } from '@mui/material';
import { NewsTitle } from '@/sections/news/NewsTitle';
import { NewsSlider } from '@/sections/news/NewsSlider';
import { NewsPosts } from '@/sections/news/NewsPosts';
import { Metadata } from 'next';

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
