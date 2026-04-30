"use client";

import { Box, alpha } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    direction?: "row" | "column" | { xs?: "row" | "column"; sm?: "row" | "column"; md?: "row" | "column" };
    seamColor?: "primary" | "secondary" | "divider";
    sx?: any;
    [key: string]: any;
};

export function JoinedButtonGroup({
    children,
    direction = { xs: "column", sm: "row" },
    seamColor = "primary",
    sx,
    ...rest
}: Props) {
    return (
        <Box
            {...rest}
            sx={[
                (theme) => {
                    const seam =
                        seamColor === "primary"
                            ? theme.palette.primary.main
                            : seamColor === "secondary"
                              ? theme.palette.secondary.main
                              : theme.palette.divider;

                    const isRow = (d: any) => d === "row";
                    const dir =
                        typeof direction === "string"
                            ? { xs: direction }
                            : direction;

                    return {
                        display: "inline-flex",
                        flexDirection: dir,
                        alignItems: "stretch",
                        borderRadius: 1,
                        overflow: "hidden",
                        boxShadow: `0 0 0 1px ${alpha(seam, 0.35)}`,
                        "& > .MuiButton-root": {
                            border: "none",
                            borderRadius: 0,
                            boxShadow: "none",
                        },
                        "& > .MuiButton-root:hover": {
                            transform: "none",
                            boxShadow: "none",
                        },
                        "& > .MuiButton-root + .MuiButton-root": {
                            borderLeft: {
                                xs: isRow(dir.xs) ? `1px solid ${seam}` : "none",
                                sm: isRow(dir.sm ?? dir.xs) ? `1px solid ${seam}` : "none",
                                md: isRow(dir.md ?? dir.sm ?? dir.xs) ? `1px solid ${seam}` : "none",
                            },
                            borderTop: {
                                xs: isRow(dir.xs) ? "none" : `1px solid ${seam}`,
                                sm: isRow(dir.sm ?? dir.xs) ? "none" : `1px solid ${seam}`,
                                md: isRow(dir.md ?? dir.sm ?? dir.xs) ? "none" : `1px solid ${seam}`,
                            },
                        },
                    };
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            {children}
        </Box>
    );
}
