"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LogosIcon from "@public/logos.svg";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/data/layout";

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = NAVIGATION_ITEMS;

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

    function NavDropdown({ item }: { item: any }) {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Box
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                sx={{ position: "relative" }}
            >
                <Box
                    component={item.href && !item.href.startsWith("#") ? motion(Link) : motion.button}
                    {...(item.href && !item.href.startsWith("#") ? { href: item.href } : {})}
                    aria-haspopup={item.submenu ? "true" : undefined}
                    aria-expanded={item.submenu ? isOpen : undefined}
                    whileHover={{ y: -2 }}
                    onClick={() => item.href && handleNavigation(item.href as string)}
                    sx={{
                        background: "none",
                        border: "none",
                        textDecoration: "none",
                        cursor: "pointer",
                        color: isOpen ? "primary.main" : "text.secondary",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "all 0.2s",
                        "&:hover": { color: "primary.main" },
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

                <AnimatePresence>
                    {isOpen && item.submenu && (
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
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
                                    borderRadius: 2,
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
                                            borderRadius: 2,
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
                </AnimatePresence>
            </Box>
        );
    }

    return (
        <>
            <Box
                component={motion.header}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                sx={(theme: Theme) => ({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    py: isScrolled ? 1 : 2,
                    ...(isScrolled && {
                        backgroundColor: alpha(theme.palette.background.default, 0.7),
                        backdropFilter: "blur(20px) saturate(180%)",
                        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.2)}`,
                    }),
                    ...(!isScrolled && {
                        backgroundColor: "transparent",
                        borderBottom: "1px solid transparent",
                    }),
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
                                component={motion(Link)}
                                href="/"
                                aria-label="Inicio"
                                whileHover={{ scale: 1.05 }}
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
                                        alt="Logos Logo"
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
                                gap: 1.5,
                            }}
                        >
                            <Box
                                sx={(theme: Theme) => ({
                                    ml: 2,
                                    borderLeft: `1px solid ${theme.palette.divider}`,
                                    pl: 2,
                                })}
                            >
                                <Button
                                    component={Link}
                                    href="#newsletter"
                                    variant="contained"
                                    size="medium"
                                    onClick={(e: React.MouseEvent) => {
                                        e.preventDefault();
                                        handleNavigation("#newsletter");
                                    }}
                                    sx={(theme) => ({
                                        fontWeight: 800,
                                        textTransform: "none",
                                        px: 3.5,
                                        borderRadius: "50px",
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`,
                                        boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-2px)",
                                            boxShadow: `0 12px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
                                        },
                                    })}
                                >
                                    Contacto
                                </Button>
                            </Box>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label="Abrir menú de navegación"
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
                    <Typography variant="h6" fontWeight={800}>
                        Menú
                    </Typography>
                    <IconButton
                        aria-label="Cerrar menú"
                        onClick={() => setIsMobileMenuOpen(false)}
                        sx={{ color: "text.primary" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List sx={{ px: 2, py: 3 }}>
                    {navigationItems.map((item) => {
                        const isExpanded = expandedItem === item.label;
                        const hasSubmenu = Boolean(item.submenu);

                        return (
                            <Box key={item.label} sx={{ mb: 1 }}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={item.href && !item.href.startsWith("#") ? Link : "div"}
                                        href={item.href && !item.href.startsWith("#") ? item.href : undefined}
                                        onClick={() => {
                                            if (hasSubmenu) {
                                                setExpandedItem(isExpanded ? null : item.label);
                                            } else if (item.href) {
                                                handleNavigation(item.href);
                                            }
                                        }}
                                        sx={(theme: Theme) => ({
                                            borderRadius: 1.5,
                                            py: 1.5,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            backgroundColor: isExpanded
                                                ? alpha(theme.palette.primary.main, 0.08)
                                                : "transparent",
                                            "&:hover": {
                                                backgroundColor: alpha(theme.palette.primary.main, 0.12),
                                            },
                                        })}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 800,
                                                fontSize: "1.25rem",
                                                color: isExpanded ? "primary.main" : "text.primary",
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
                                                            borderRadius: 2,
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
                        SÍGUENOS
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="center">
                        {socialLinks.map((social, idx) => (
                            <IconButton
                                key={idx}
                                component="a"
                                href={social.href}
                                target="_blank"
                                aria-label="Visitar red social"
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
