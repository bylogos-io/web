"use client";

import { useState } from "react";
import { useRouter, usePathname, Link } from "@/i18n/routing";
import Image from "next/image";
import LogosIcon from "@public/isologo.svg";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import { SOCIAL_LINKS } from "@/data/layout";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getSiteContent } from "@/i18n/siteContent";
import { useLocale } from "next-intl";

import {
    Box,
    Container,
    Stack,
    Typography,
    alpha,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Divider,
    Collapse,
    Theme,
} from "@mui/material";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const content = getSiteContent(locale);

    const navigationItems = content.header.navigation as Array<{
        label: string;
        href: string;
        submenu?: Array<{ label: string; href: string; description?: string }>;
    }>;

    const handleNavigation = (href: string) => {
        if (href.startsWith("#")) {
            if (pathname === "/") {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                router.push("/" + href);
            }
        } else {
            router.push(href);
        }
        setIsMobileMenuOpen(false);
    };

    const socialLinks = SOCIAL_LINKS;

    const isItemActive = (href: string | undefined) => {
        if (!href || href.startsWith("#")) return false;
        const current = pathname ?? "/";
        if (href === "/") return current === "/";
        return current === href || current.startsWith(`${href}/`);
    };

    function NavDropdown({ item }: { item: any }) {
        const [isOpen, setIsOpen] = useState(false);
        const isActive = isItemActive(item.href);
        const hasSubActive = item.submenu?.some((s: any) => isItemActive(s.href));
        const highlight = isActive || hasSubActive;

        return (
            <Box
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                sx={{ position: "relative" }}
            >
                <Box
                    component={item.href && !item.href.startsWith("#") ? Link : "button"}
                    {...(item.href && !item.href.startsWith("#") ? { href: item.href } : {})}
                    aria-haspopup={item.submenu ? "true" : undefined}
                    aria-expanded={item.submenu ? isOpen : undefined}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => item.href && handleNavigation(item.href as string)}
                    sx={{
                        position: "relative",
                        background: "none",
                        border: "none",
                        textDecoration: "none",
                        cursor: "pointer",
                        color: isOpen || highlight ? "primary.main" : "text.secondary",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "all 0.2s",
                        "&:hover": { color: "primary.main" },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: -6,
                            height: 2,
                            borderRadius: 1,
                            backgroundColor: "primary.main",
                            opacity: highlight ? 1 : 0,
                            transform: highlight ? "scaleX(1)" : "scaleX(0.4)",
                            transformOrigin: "center",
                            transition: "all 0.25s ease",
                        },
                    }}
                >
                    {item.label}
                    {item.submenu && (
                        <ExpandMoreIcon
                            sx={{
                                fontSize: 16,
                                transition: "transform 0.3s",
                                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                            }}
                        />
                    )}
                </Box>

                    {isOpen && item.submenu && (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%) !important",
                                pt: 2,
                                zIndex: 1200,
                            }}
                        >
                            <Box
                                sx={(theme: Theme) => ({
                                    width: 250,
                                    backgroundColor: alpha(theme.palette.background.default, 0.9),
                                    backdropFilter: "blur(20px)",
                                    borderRadius: 1,
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.4)}`,
                                    overflow: "hidden",
                                    p: 1,
                                })}
                            >
                                {item.submenu.map((sub: any, idx: number) => (
                                    <Box
                                        key={idx}
                                        component={sub.href.startsWith("#") ? "button" : Link}
                                        href={sub.href.startsWith("#") ? undefined : sub.href}
                                        onClick={() => sub.href.startsWith("#") && handleNavigation(sub.href as string)}
                                        sx={(theme: Theme) => ({
                                            display: "block",
                                            width: "100%",
                                            textAlign: "left",
                                            textDecoration: "none",
                                            background: "none",
                                            border: "none",
                                            p: 1.5,
                                            borderRadius: 1,
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            "&:hover": {
                                                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                            },
                                        })}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 700,
                                                color: "text.primary",
                                                mb: 0.5,
                                            }}
                                        >
                                            {sub.label}
                                        </Typography>
                                        {sub.description && (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "block",
                                                    lineHeight: 1.2,
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                {sub.description}
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
            </Box>
        );
    }

    return (
        <>
            <Box
                component="header"
                sx={(theme: Theme) => ({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    py: 1,
                    backgroundColor: theme.palette.background.default,
                    backdropFilter: "blur(20px) saturate(180%)",
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.2)}`,
                })}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 64,
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
                        <Box
                                component={Link}
                                href="/"
                                aria-label={content.header.logoAriaLabel}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    handleNavigation("#hero");
                                }}
                            >
                                <Box
                                    sx={(theme: Theme) => ({
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 44,
                                    })}
                                >
                                    <Image
                                        src={LogosIcon}
                                        alt="LogOS Logo"
                                        width={120}
                                        height={36}
                                        style={{ objectFit: "contain" }}
                                        unoptimized
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box
                            component="nav"
                            sx={{
                                display: { xs: "none", lg: "flex" },
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            {navigationItems.map((item, index) => (
                                <NavDropdown key={index} item={item} />
                            ))}
                        </Box>

                        {/* Desktop Actions */}
                        <Box
                            sx={{
                                display: { xs: "none", lg: "flex" },
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: 4,
                            }}
                        >
                            <LanguageSwitcher />
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label={content.header.mobileMenuButtonAriaLabel}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu-drawer"
                            sx={(theme: Theme) => ({
                                display: { lg: "none" },
                                color: "text.primary",
                                backgroundColor: alpha(theme.palette.action.hover, 0.05),
                            })}
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>

            {/* Mobile Menu Drawer */}
            <Drawer
                id="mobile-menu-drawer"
                anchor="right"
                open={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                PaperProps={{
                    sx: (theme: Theme) => ({
                        width: "300px",
                        backgroundColor: alpha(theme.palette.background.default, 1),
                        backgroundImage: "none",
                        borderLeft: `1px solid ${theme.palette.divider}`,
                        boxShadow: -10,
                    }),
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight={600}>
                        {content.header.menuTitle}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LanguageSwitcher />
                        <IconButton
                            aria-label={content.header.closeMenuAriaLabel}
                            onClick={() => setIsMobileMenuOpen(false)}
                            sx={{ color: "text.primary" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Divider />
                <List sx={{ px: 2, py: 3 }}>
                    {navigationItems.map((item) => {
                        const isExpanded = expandedItem === item.label;
                        const hasSubmenu = Boolean(item.submenu);
                        const isActive = isItemActive(item.href);
                        const hasSubActive = item.submenu?.some((s: any) => isItemActive(s.href));
                        const highlight = isActive || hasSubActive;

                        return (
                            <Box key={item.label} sx={{ mb: 1 }}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={item.href && !item.href.startsWith("#") ? Link : "div"}
                                        href={item.href && !item.href.startsWith("#") ? item.href : undefined}
                                        aria-current={isActive ? "page" : undefined}
                                        onClick={() => {
                                            if (hasSubmenu) {
                                                setExpandedItem(isExpanded ? null : item.label);
                                            } else if (item.href) {
                                                handleNavigation(item.href);
                                            }
                                        }}
                                        sx={(theme: Theme) => ({
                                            position: "relative",
                                            borderRadius: 1,
                                            py: 1.5,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            backgroundColor:
                                                isExpanded || highlight
                                                    ? alpha(theme.palette.primary.main, 0.08)
                                                    : "transparent",
                                            "&:hover": {
                                                backgroundColor: alpha(theme.palette.primary.main, 0.12),
                                            },
                                            "&::before": highlight
                                                ? {
                                                      content: '""',
                                                      position: "absolute",
                                                      left: 0,
                                                      top: 8,
                                                      bottom: 8,
                                                      width: 3,
                                                      borderRadius: 1,
                                                      backgroundColor: theme.palette.primary.main,
                                                  }
                                                : undefined,
                                        })}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: "1.25rem",
                                                color: isExpanded || highlight ? "primary.main" : "text.primary",
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                        {hasSubmenu && (
                                            <Box sx={{ color: "text.secondary", display: "flex" }}>
                                                {isExpanded ? (
                                                    <ExpandMoreIcon
                                                        sx={{
                                                            transform: "rotate(180deg)",
                                                            transition: "transform 0.3s",
                                                        }}
                                                    />
                                                ) : (
                                                    <ExpandMoreIcon
                                                        sx={{
                                                            transform: "rotate(0deg)",
                                                            transition: "transform 0.3s",
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                        )}
                                    </ListItemButton>
                                </ListItem>

                                {item.submenu && (
                                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ mt: 1 }}>
                                            {item.submenu.map((sub: any) => (
                                                <ListItem key={sub.label} disablePadding>
                                                    <ListItemButton
                                                        component={!sub.href.startsWith("#") ? Link : "div"}
                                                        href={!sub.href.startsWith("#") ? sub.href : undefined}
                                                        onClick={() =>
                                                            sub.href.startsWith("#")
                                                                ? handleNavigation(sub.href as string)
                                                                : handleNavigation(sub.href)
                                                        }
                                                        sx={(theme: Theme) => ({
                                                            borderRadius: 1,
                                                            py: 1.5,
                                                            pl: 3,
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            "&:hover": {
                                                                backgroundColor: alpha(
                                                                    theme.palette.primary.main,
                                                                    0.05,
                                                                ),
                                                            },
                                                        })}
                                                    >
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    fontSize: "1rem",
                                                                    color: "text.primary",
                                                                }}
                                                            >
                                                                {sub.label}
                                                            </Typography>
                                                            {sub.description && (
                                                                <Typography
                                                                    variant="caption"
                                                                    sx={{
                                                                        color: "text.secondary",
                                                                        display: "block",
                                                                        lineHeight: 1.4,
                                                                        fontSize: "0.85rem",
                                                                    }}
                                                                >
                                                                    {sub.description}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                        <AddIcon
                                                            sx={{
                                                                fontSize: 18,
                                                                color: "text.disabled",
                                                                opacity: 0.5,
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </Box>
                        );
                    })}
                </List>
                <Box
                    sx={(theme: Theme) => ({
                        mt: "auto",
                        p: 4,
                        borderTop: `1px solid ${theme.palette.divider}`,
                        backgroundColor: alpha(theme.palette.secondary.main, 0.02),
                    })}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            display: "block",
                            textAlign: "center",
                            mb: 3,
                            fontWeight: 700,
                            color: "text.disabled",
                            letterSpacing: 1,
                        }}
                    >
                        {content.header.followUs}
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="center">
                        {socialLinks.map((social, idx) => (
                            <IconButton
                                key={idx}
                                component="a"
                                href={social.href}
                                target="_blank"
                                aria-label={content.common.socialLinkAriaLabel}
                                sx={(theme: Theme) => ({
                                    color: "text.secondary",
                                    backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                                    "&:hover": {
                                        color: "primary.main",
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                    },
                                })}
                            >
                                <social.icon sx={{ fontSize: 22 }} />
                            </IconButton>
                        ))}
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}
