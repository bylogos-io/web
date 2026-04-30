"use client";

import { Box, Typography, Container, alpha, Button } from "@mui/material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { Link } from "@/i18n/routing";

export function IndustryFooter() {
  const locale = useLocale();
  const content = getSiteContent(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
      <Box
        sx={(theme) => ({
          p: { xs: 4, md: 6 },
          borderRadius: 1,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.5)} 100%)`,
          border: `1px solid ${theme.palette.divider}`,
          textAlign: "center",
        })}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 400, letterSpacing: "-0.015em", mb: 1.5, textWrap: "balance" as any }}
        >
          {content.industries.footerTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto", textWrap: "balance" as any }}
        >
          {content.industries.footerDescription}
        </Typography>
        <Button component={Link} href="/contact" variant="contained" size="lg">
          {content.industries.footerButton}
        </Button>
      </Box>
    </Container>
  );
}
