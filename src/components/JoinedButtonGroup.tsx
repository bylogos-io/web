"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    direction?: "row" | "column" | { xs?: "row" | "column"; sm?: "row" | "column"; md?: "row" | "column" };
    seamColor?: "primary" | "secondary" | "divider";
    gap?: number;
    sx?: any;
    [key: string]: any;
};

export function JoinedButtonGroup({
    children,
    direction = { xs: "column", sm: "row" },
    gap = 1.5,
    sx,
    ...rest
}: Props) {
    const dir = typeof direction === "string" ? { xs: direction } : direction;
    return (
        <Box
            {...rest}
            sx={[
                {
                    display: "inline-flex",
                    flexDirection: dir,
                    alignItems: "stretch",
                    gap,
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            {children}
        </Box>
    );
}
