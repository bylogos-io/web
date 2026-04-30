"use client";

import { Box, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { getSiteContent } from "@/i18n/siteContent";
import { JoinedButtonGroup } from "@/components/JoinedButtonGroup";
import { SectionHeader } from "@/components/SectionHeader";

export function PlatformHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.platform;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 8, md: 12 },
                overflow: "hidden",
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
                    <JoinedButtonGroup>
                        <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            size="lg"
                        >
                            {c.heroCtaPrimary}
                        </Button>
                        <Button
                            component={Link}
                            href="/industries"
                            variant="contained"
                            size="lg"
                            sx={(theme) => ({
                                backgroundColor: theme.palette.background.paper,
                                color: theme.palette.text.primary,
                                "&:hover": { backgroundColor: theme.palette.background.default },
                            })}
                        >
                            {c.heroCtaSecondary}
                        </Button>
                    </JoinedButtonGroup>
                </Box>
            </Container>
        </Box>
    );
}
