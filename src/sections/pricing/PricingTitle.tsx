"use client";

import { Box, Container } from "@mui/material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function PricingTitle() {
    const locale = useLocale();
    const content = getSiteContent(locale);

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 4, md: 6 },
            }}
        >
            <Container maxWidth="lg">
                <SectionHeader
                    as="h1"
                    eyebrow={content.pricing.eyebrow}
                    title={content.pricing.titleStart}
                    accent={content.pricing.titleAccent}
                    description={content.pricing.description}
                    maxWidth={820}
                />
            </Container>
        </Box>
    );
}
