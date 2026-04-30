"use client";

import { Box, Container, Button } from "@mui/material";
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
                    <Button component={Link} href="/contact" variant="contained" size="lg">
                        {c.ctaButton}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
