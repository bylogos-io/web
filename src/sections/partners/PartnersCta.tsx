"use client";

import { Box, Container, Button, alpha } from "@mui/material";
import { monoFont } from "@/theme";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function PartnersCta() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.partners;

    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
            <Container maxWidth="md">
                <SectionHeader eyebrow="JOIN" title={c.ctaTitle} description={c.ctaDescription} />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        component={Link}
                        href="/contact"
                        sx={(theme) => ({
                            fontFamily: monoFont,
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            px: 4,
                            py: 1.75,
                            borderRadius: 1,
                            color: theme.palette.primary.main,
                            backgroundColor: "transparent",
                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: "none",
                            transition: "background-color 0.15s ease",
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                boxShadow: "none",
                                transform: "none",
                            },
                        })}
                    >
                        {c.ctaButton}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
