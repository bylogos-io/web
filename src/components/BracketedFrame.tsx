"use client";

import { Box, alpha, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    sx?: SxProps<Theme>;
    color?: "divider" | "primary";
    size?: number;
};

export function BracketedFrame({ children, sx, color = "divider", size = 16 }: Props) {
    return (
        <Box
            sx={[
                (theme) => {
                    const c =
                        color === "primary"
                            ? alpha(theme.palette.primary.main, 0.6)
                            : alpha(theme.palette.text.primary, 0.35);
                    const corner = {
                        content: '""',
                        position: "absolute",
                        width: size,
                        height: size,
                        borderColor: c,
                        borderStyle: "solid",
                        borderWidth: 0,
                    } as const;
                    return {
                        position: "relative",
                        p: { xs: 2, md: 3 },
                        "&::before": {
                            ...corner,
                            top: 0,
                            left: 0,
                            borderTopWidth: 1,
                            borderLeftWidth: 1,
                        },
                        "&::after": {
                            ...corner,
                            top: 0,
                            right: 0,
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                        },
                        "& > .frame-bl, & > .frame-br": corner,
                        "& > .frame-bl": {
                            bottom: 0,
                            left: 0,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                        },
                        "& > .frame-br": {
                            bottom: 0,
                            right: 0,
                            borderBottomWidth: 1,
                            borderRightWidth: 1,
                        },
                    };
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            {children}
            <span className="frame-bl" />
            <span className="frame-br" />
        </Box>
    );
}
