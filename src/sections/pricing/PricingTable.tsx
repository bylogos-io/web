"use client";

import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    alpha,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import { PRICING_FEATURES } from "@/data/pricing";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

const features = PRICING_FEATURES;

export function PricingTable() {
    return (
        <Box
            component="section"
            sx={(theme) => ({
                py: { xs: 10, md: 16 },
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
            })}
        >
            <Container maxWidth="lg">
                <SectionHeader
                    eyebrow="MATRIX"
                    title="Comparativa de módulos"
                    description="Descubre todas las potencialidades de LogOS según el plan que necesites."
                />

                <TableContainer
                    sx={(theme) => ({
                        backgroundColor: "transparent",
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        overflow: "hidden",
                    })}
                >
                    <Table>
                        <TableHead>
                            <TableRow
                                sx={(theme) => ({
                                    "& th": {
                                        borderBottom: `1px solid ${theme.palette.divider}`,
                                        fontFamily: monoFont,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "text.secondary",
                                        py: 2,
                                    },
                                })}
                            >
                                <TableCell>Funcionalidad</TableCell>
                                <TableCell align="center" sx={{ color: "primary.main !important" }}>
                                    EDGE
                                </TableCell>
                                <TableCell align="center" sx={{ color: "secondary.main !important" }}>
                                    CLOUD
                                </TableCell>
                                <TableCell align="center">ENTERPRISE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {features.map((feature, index) => (
                                <TableRow
                                    key={index}
                                    sx={(theme) => ({
                                        "&:last-child td, &:last-child th": { border: 0 },
                                        "& td, & th": {
                                            borderBottom: `1px solid ${theme.palette.divider}`,
                                            py: 1.75,
                                        },
                                        "&:hover": {
                                            backgroundColor: alpha(theme.palette.primary.main, 0.03),
                                        },
                                    })}
                                >
                                    <TableCell component="th" scope="row" sx={{ color: "text.primary" }}>
                                        {feature.name}
                                    </TableCell>
                                    <TableCell align="center">{renderValue(feature.edge)}</TableCell>
                                    <TableCell align="center">{renderValue(feature.cloud)}</TableCell>
                                    <TableCell align="center">{renderValue(feature.enterprise)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}

function renderValue(value: boolean | string) {
    if (typeof value === "string") {
        return (
            <Typography sx={{ fontFamily: monoFont, fontSize: "0.8rem", color: "text.primary" }}>
                {value}
            </Typography>
        );
    }
    return value ? (
        <CheckCircleIcon color="primary" sx={{ fontSize: 18 }} />
    ) : (
        <RemoveIcon sx={{ color: "text.disabled", opacity: 0.4, fontSize: 18 }} />
    );
}
