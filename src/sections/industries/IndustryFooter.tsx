"use client";

import { Box, Typography, Container, alpha, Button } from "@mui/material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { Link } from "@/i18n/routing";

export function IndustryFooter() {
  const locale = useLocale();
  const content = getSiteContent(locale);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, pb: 10 }}>
      <Box
        sx={{
          p: 6,
          borderRadius: 6,
          background: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.5)} 100%)`,
          border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={800} gutterBottom>
          {content.industries.footerTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto" }}
        >
          {content.industries.footerDescription}
        </Typography>
        <Button
          component={Link}
          href="/#newsletter"
          variant="contained"
          size="large"
          sx={{ fontWeight: 700, px: 5 }}
        >
          {content.industries.footerButton}
        </Button>
      </Box>
    </Container>
  );
}
