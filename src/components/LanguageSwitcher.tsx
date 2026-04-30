"use client";

import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import {
    Box,
    Button,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
    alpha,
} from "@mui/material";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { getSiteContent, localeOptions } from "@/i18n/siteContent";

export function LanguageSwitcher() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const router = useRouter();
    const pathname = usePathname();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const availableLocales = localeOptions as ReadonlyArray<{
        code: string;
        shortLabel: string;
        nativeLabel: string;
    }>;
    const currentLocale =
        availableLocales.find((option) => option.code === locale) ?? availableLocales[0];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLocaleChange = (nextLocale: string) => {
        handleClose();
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Box>
            <Button
                onClick={handleClick}
                aria-label={content.languageSwitcher.label}
                aria-haspopup="menu"
                aria-expanded={Boolean(anchorEl)}
                startIcon={<LanguageIcon />}
                endIcon={<KeyboardArrowDownRoundedIcon />}
                sx={(theme) => ({
                    minWidth: "auto",
                    px: { xs: 1, sm: 1.5 },
                    py: 0.5,
                    borderRadius: 1,
                    color: "text.primary",
                    textTransform: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                    },
                    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
                        margin: 0,
                    },
                    "& .MuiButton-endIcon": {
                        ml: 0.5,
                    },
                })}
            >
                <Box sx={{ mx: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography
                        variant="caption"
                        sx={{
                            lineHeight: 1,
                            color: "text.secondary",
                            whiteSpace: "nowrap",
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        {content.languageSwitcher.currentLanguageLabel}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.2, whiteSpace: "nowrap" }}>
                        <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
                            {currentLocale.shortLabel}
                        </Box>
                        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                            {currentLocale.nativeLabel}
                        </Box>
                    </Typography>
                </Box>
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        mt: 1,
                        minWidth: 220,
                        backgroundColor: "background.paper",
                        backdropFilter: "blur(14px)",
                        border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        boxShadow: (theme) => `0 20px 50px ${alpha(theme.palette.common.black, 0.18)}`,
                    },
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        px: 2,
                        py: 1.25,
                        display: "block",
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                    }}
                >
                    {content.languageSwitcher.menuTitle}
                </Typography>

                {routing.locales.map((nextLocale) => {
                    const option = availableLocales.find((entry) => entry.code === nextLocale);
                    if (!option) {
                        return null;
                    }

                    return (
                        <MenuItem
                            key={nextLocale}
                            onClick={() => handleLocaleChange(nextLocale)}
                            selected={locale === nextLocale}
                            sx={{ py: 1.1, display: "flex", alignItems: "center", gap: 1.5 }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: locale === nextLocale ? 700 : 500 }}>
                                    {option.nativeLabel}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ textTransform: "uppercase", letterSpacing: 1, color: "text.secondary" }}
                                >
                                    {option.shortLabel}
                                </Typography>
                            </Box>
                            <ListItemIcon sx={{ minWidth: 28, justifyContent: "flex-end" }}>
                                {locale === nextLocale ? (
                                    <CheckRoundedIcon color="primary" fontSize="small" />
                                ) : null}
                            </ListItemIcon>
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
}
