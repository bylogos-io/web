"use client";

import { Box, Typography, alpha } from "@mui/material";
import { brand } from "@/theme";
import { MDXContent } from "@/components/MdxContent";
import { docs } from "@/velite";

type Doc = (typeof docs)[number];

interface DocsViewProps {
    doc: Doc;
}

export function DocsView({ doc }: DocsViewProps) {
    // LogOS Brand Colors for documentation from theme
    const primaryAlpha10 = alpha(brand[500], 0.1);
    const primaryAlpha05 = alpha(brand[500], 0.05);
    const secondaryAlpha20 = alpha(brand[300], 0.2);

    return (
        <Box
            component="article"
            sx={{
                maxWidth: "none",
                "& h1": {
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 800,
                    mb: 4,
                    color: "primary.main",
                },
                "& h2": {
                    fontSize: "2rem",
                    fontWeight: 700,
                    mt: 6,
                    mb: 3,
                    color: "text.primary",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    pb: 1,
                },
                "& h3": {
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    mt: 5,
                    mb: 2,
                    color: "text.primary",
                },
                "& p": {
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    mb: 3,
                    color: "text.secondary",
                },
                "& ul, & ol": {
                    pl: 3,
                    mb: 3,
                    color: "text.secondary",
                },
                "& li": {
                    mb: 1.5,
                    fontSize: "1.125rem",
                },
                "& code": {
                    backgroundColor: primaryAlpha10,
                    color: "primary.main",
                    px: 0.8,
                    py: 0.2,
                    borderRadius: 1,
                    fontFamily: "monospace",
                    fontSize: "0.9em",
                },
                "& pre": {
                    backgroundColor: secondaryAlpha20,
                    p: 3,
                    borderRadius: 3,
                    overflowX: "auto",
                    mb: 4,
                    border: "1px solid",
                    borderColor: "divider",
                    "& code": {
                        backgroundColor: "transparent",
                        color: "inherit",
                        p: 0,
                        fontSize: "0.875rem",
                    },
                },
                "& blockquote": {
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                    pl: 3,
                    py: 1,
                    my: 4,
                    fontStyle: "italic",
                    backgroundColor: primaryAlpha05,
                    borderRadius: "0 8px 8px 0",
                },
            }}
        >
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        fontWeight: 800,
                        mb: 2,
                        lineHeight: 1.1,
                    }}
                >
                    {doc.title}
                </Typography>
                <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ fontWeight: 400, fontSize: "1.25rem", maxWidth: "800px" }}
                >
                    {doc.description}
                </Typography>
            </Box>
            <Box sx={{ color: "text.secondary" }}>
                <MDXContent code={doc.content} />
            </Box>
        </Box>
    );
}
