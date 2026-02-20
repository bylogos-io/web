"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  alpha,
  Divider,
} from "@mui/material";
import { MDXContent } from "@/components/MdxContent"; // Using existing component
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { News } from "../../../.velite"; // Placeholder

// Placeholder
interface NewsItem {
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  content: any; // MDX content
}

interface NewsPostProps {
  post: NewsItem;
}

export function NewsPost({ post }: NewsPostProps) {
  return (
    <Box component="article" sx={{ pb: 10 }}>
      {/* Hero / Header of the Post */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 300, md: 500 },
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          mb: 8,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${post.cover || "/images/news-placeholder.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 80%)",
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, pb: 6 }}
        >
          <Link href="/news" passHref style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                color: "white",
                mb: 4,
                opacity: 0.8,
                "&:hover": { opacity: 1 },
              }}
            >
              <ArrowBackIcon fontSize="small" />
              <Typography variant="subtitle2" fontWeight={700}>
                Volver a Noticias
              </Typography>
            </Stack>
          </Link>

          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {post.tags?.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                color="primary"
                size="small"
                sx={{ fontWeight: 700 }}
              />
            ))}
          </Stack>

          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
              maxWidth: 900,
            }}
          >
            {post.title}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ color: "rgba(255,255,255,0.8)" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayIcon sx={{ fontSize: 18 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                {new Date(post.date).toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            color: "text.secondary",
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          {post.description}
        </Typography>
        <Divider sx={{ mb: 6 }} />

        <Box
          sx={{
            "& p": {
              fontSize: "1.125rem",
              lineHeight: 1.8,
              mb: 3,
              color: "text.primary",
            },
            "& h2": {
              fontSize: "2rem",
              fontWeight: 700,
              mt: 6,
              mb: 3,
              color: "text.primary",
            },
            "& h3": {
              fontSize: "1.5rem",
              fontWeight: 600,
              mt: 4,
              mb: 2,
              color: "text.primary",
            },
            "& ul, & ol": { pl: 3, mb: 3, color: "text.primary" },
            "& li": { mb: 1, fontSize: "1.125rem" },
            "& blockquote": {
              borderLeft: "4px solid",
              borderColor: "primary.main",
              pl: 3,
              py: 1,
              my: 4,
              fontStyle: "italic",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.05),
            },
          }}
        >
          <MDXContent code={post.content} />
        </Box>
      </Container>
    </Box>
  );
}
