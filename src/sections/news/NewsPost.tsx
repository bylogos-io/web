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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { News } from "../../../.velite"; // Placeholder

// Placeholder
interface NewsItem {
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  links?: { title: string; url: string }[];
  redirectUrl?: string;
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
          height: { xs: "auto", md: 500 },
          minHeight: { xs: 400, md: 500 },
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          pt: { xs: 12, md: 15 }, // Clearance for sticky header
          pb: { xs: 4, md: 0 },
          mb: 8,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${post.cover || "/images/news-placeholder.webp"})`,
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

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mb: 3,
            }}
          >
            {post.tags?.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                color="primary"
                size="small"
                sx={{ fontWeight: 700 }}
              />
            ))}
          </Box>

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
              <Typography variant="subtitle1" fontWeight={400}>
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
        {post.links && post.links.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 4, letterSpacing: '-0.02em' }}>
              Enlaces de Interés
            </Typography>
            <Stack spacing={2}>
              {post.links.map((link, index) => (
                <Box
                  key={index}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 3,
                    borderRadius: 3,
                    textDecoration: 'none',
                    backgroundColor: alpha(theme.palette.primary.main, 0.03),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      borderColor: theme.palette.primary.main,
                      transform: 'translateX(8px)',
                      '& .link-title': { color: 'primary.main' },
                      '& .link-arrow': { transform: 'translateX(8px)' },
                    },
                  })}
                >
                  <Typography
                    className="link-title"
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: 'text.primary', transition: 'color 0.3s ease', fontSize: '1rem' }}
                  >
                    {link.title}
                  </Typography>
                  <Box
                    className="link-arrow"
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
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
          sx={(theme) => ({
            /* ── Párrafos ── */
            "& p": {
              fontSize: "1.125rem",
              lineHeight: 1.9,
              mb: 3,
              color: "text.primary",
            },

            /* ── Encabezados ── */
            "& h2": {
              fontSize: { xs: "1.6rem", md: "2rem" },
              fontWeight: 800,
              mt: 7,
              mb: 3,
              color: "text.primary",
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              pl: 2,
              lineHeight: 1.2,
            },
            "& h3": {
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 700,
              mt: 5,
              mb: 2,
              color: "text.primary",
            },
            "& h4": {
              fontSize: "1.1rem",
              fontWeight: 700,
              mt: 3,
              mb: 1,
              color: "primary.main",
            },

            /* ── Listas ── */
            "& ul": {
              pl: 0,
              mb: 3,
              listStyle: "none",
              "& li": {
                position: "relative",
                pl: "1.5em",
                mb: 1.5,
                fontSize: "1.1rem",
                lineHeight: 1.8,
                "&::before": {
                  content: '"▸"',
                  position: "absolute",
                  left: 0,
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                },
              },
            },
            "& ol": {
              pl: 3,
              mb: 3,
              "& li": {
                mb: 1.5,
                fontSize: "1.1rem",
                lineHeight: 1.8,
                pl: "0.5em",
              },
            },

            /* ── Citas / Blockquote ── */
            "& blockquote": {
              borderLeft: `5px solid ${theme.palette.primary.main}`,
              pl: 3,
              pr: 2,
              py: 2,
              my: 5,
              mx: 0,
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "text.secondary",
              backgroundColor: alpha(theme.palette.primary.main, 0.06),
              "& p": { mb: 0 },
            },

            /* ── Código inline ── */
            "& code": {
              fontFamily: "monospace",
              fontSize: "0.9em",
              px: "6px",
              py: "2px",
              borderRadius: "4px",
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            },

            /* ── Bloques de código ── */
            "& pre": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? alpha("#000", 0.5)
                  : alpha(theme.palette.grey[900], 0.92),
              color: "#e2e8f0",
              borderRadius: "10px",
              p: 3,
              my: 4,
              overflowX: "auto",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              "& code": {
                backgroundColor: "transparent",
                border: "none",
                color: "inherit",
                fontSize: "inherit",
                p: 0,
              },
            },

            /* ── Tablas ── */
            "& table": {
              width: "100%",
              borderCollapse: "collapse",
              my: 5,
              fontSize: "0.97rem",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: `0 0 0 1px ${alpha(theme.palette.divider, 0.5)}`,
              display: "block",
              overflowX: "auto",
            },
            "& thead": {
              backgroundColor: theme.palette.primary.main,
              "& th": {
                color: "#fff",
                fontWeight: 700,
                px: 2.5,
                py: 1.5,
                textAlign: "left",
                whiteSpace: "nowrap",
                fontSize: "0.9rem",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              },
            },
            "& tbody": {
              "& tr:nth-of-type(even)": {
                backgroundColor: alpha(theme.palette.primary.main, 0.04),
              },
              "& tr:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                transition: "background 0.15s ease",
              },
              "& td": {
                px: 2.5,
                py: 1.5,
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
                verticalAlign: "top",
                lineHeight: 1.6,
              },
            },

            /* ── Imágenes ── */
            "& img": {
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
              my: 4,
              display: "block",
              mx: "auto",
              boxShadow: `0 4px 24px ${alpha("#000", 0.15)}`,
            },

            /* ── Links ── */
            "& a": {
              color: theme.palette.primary.main,
              textDecoration: "underline",
              textDecorationColor: alpha(theme.palette.primary.main, 0.4),
              textUnderlineOffset: "3px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                textDecorationColor: theme.palette.primary.main,
                color: theme.palette.primary.dark,
              },
            },

            /* ── Énfasis ── */
            "& strong, & b": {
              fontWeight: 700,
              color: "text.primary",
            },
            "& em": {
              fontStyle: "italic",
              color: "text.secondary",
            },

            /* ── Separador ── */
            "& hr": {
              border: "none",
              borderTop: `2px solid ${alpha(theme.palette.divider, 0.5)}`,
              my: 6,
            },
          })}
        >
          <MDXContent code={post.content} />
        </Box>

      </Container>
    </Box>
  );
}
