"use client";

import { Box, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function PartnersHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.partners;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 8, md: 12 },
            }}
        >
            <Container maxWidth="lg">
                <SectionHeader
                    as="h1"
                    eyebrow={c.heroEyebrow}
                    title={c.heroTitleStart}
                    accent={c.heroTitleAccent}
                    description={c.heroDescription}
                    maxWidth={820}
                />
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Button component={Link} href="/contact" variant="contained" size="lg">
                        {c.heroCta}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
