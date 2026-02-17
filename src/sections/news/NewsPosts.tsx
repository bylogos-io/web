"use client";

import {
  Box,
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";
import Link from "next/link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { News } from "../../../.velite"; // Placeholder for generated type

// Placeholder interface if Velite types aren't ready
interface NewsItem {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  date: string;
  tags?: string[];
}

interface NewsPostsProps {
  posts: NewsItem[];
}

export function NewsPosts({ posts }: NewsPostsProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="h2" fontWeight={800} sx={{ mb: 2 }}>
            Últimas Publicaciones
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Explora nuestros artículos más recientes sobre innovación industrial
            y tecnología.
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {posts.map((post, index) => (
            <Grid2
              key={post.slug}
              size={{ xs: 12, md: index === 0 ? 12 : 6, lg: 4 }}
            >
              <Card
                sx={{
                  height: "100%",

                  backgroundColor: alpha(theme.palette.background.paper, 0.5),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px ${alpha(theme.palette.common.black, 0.1)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    "& .post-cover": {
                      transform: "scale(1.05)",
                    },
                    "& .read-more": {
                      color: "primary.main",
                      gap: 1.5,
                    },
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/${post.slug}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      pt: "56.25%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      className="post-cover"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${post.cover || "/images/news-placeholder.png"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    {post.tags && post.tags.length > 0 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        {post.tags.slice(0, 2).map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              backdropFilter: "blur(4px)",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              height: 24,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, width: "100%", p: 3 }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 2, color: "text.disabled" }}
                    >
                      <CalendarTodayIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" fontWeight={600}>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight={800}
                      sx={{ mb: 2, lineHeight: 1.3 }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.description}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      className="read-more"
                      sx={{
                        mt: "auto",
                        fontWeight: 700,
                        color: "text.primary",
                        transition: "all 0.3s ease",
                        gap: 0.5,
                        fontSize: "0.875rem",
                      }}
                    >
                      Leer más
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
