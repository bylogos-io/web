"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LogosIcon from "@public/icon.svg";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  alpha,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      label: "Inicio",
      href: "/",
      submenu: [
        {
          label: "Características",
          href: "#features",
          description: "Potencia tu sistema",
        },
        {
          label: "Hardware",
          href: "#hardware",
          description: "Equipos industriales",
        },
        {
          label: "Compatibilidad",
          href: "#stack",
          description: "Integración total",
        },
        { label: "Contacto", href: "#newsletter", description: "Hablemos hoy" },
      ],
    },
    {
      label: "Soluciones",
      submenu: [
        {
          label: "Edge",
          href: "/soluciones",
          description: "Procesamiento local",
        },
        {
          label: "Cloud",
          href: "/soluciones",
          description: "Infraestructura en la nube",
        },
      ],
    },
    {
      label: "Industrias",
      submenu: [
        {
          label: "Petróleo",
          href: "/industrias#petroleo",
          description: "Oil & Gas",
        },
        {
          label: "Datos",
          href: "/industrias#datos",
          description: "Data Centers",
        },
        {
          label: "Aguas",
          href: "/industrias#aguas",
          description: "Water",
        },
        {
          label: "Energía",
          href: "/industrias#energia",
          description: "Power",
        },
        {
          label: "Producción",
          href: "/industrias#produccion",
          description: "Food & Beverage",
        },
      ],
    },
    {
      label: "Precios",
      submenu: [
        { label: "Edge", href: "/precios", description: "Desde $XXX/mes" },
        {
          label: "Cloud",
          href: "/precios",
          description: "Desde $XXX/mes",
        },
        {
          label: "Custom",
          href: "/precios",
          description: "Consúltanos",
        },
      ],
    },
    { label: "Nosotros", href: "/nosotros" },
    { label: "News", href: "/news" },
  ];

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

  const socialLinks = [
    { icon: LinkedInIcon, href: "https://www.linkedin.com/company/bylogos/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/bylogos.io/" },
    { icon: GitHubIcon, href: "https://github.com/bylogos-io" },
  ];

  function NavDropdown({ item }: { item: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Box
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        sx={{ position: "relative" }}
      >
        <Box
          component={
            item.href && !item.href.startsWith("#")
              ? motion(Link)
              : motion.button
          }
          {...(item.href && !item.href.startsWith("#")
            ? { href: item.href }
            : {})}
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
                sx={{
                  width: 250,
                  backgroundColor: alpha(theme.palette.background.default, 0.9),
                  backdropFilter: "blur(20px)",
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.4)}`,
                  overflow: "hidden",
                  p: 1,
                }}
              >
                {item.submenu.map((sub: any, idx: number) => (
                  <Box
                    key={idx}
                    component={sub.href.startsWith("#") ? "button" : Link}
                    href={sub.href.startsWith("#") ? undefined : sub.href}
                    onClick={() =>
                      sub.href.startsWith("#") &&
                      handleNavigation(sub.href as string)
                    }
                    sx={{
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
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.08,
                        ),
                      },
                    }}
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
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: isScrolled
            ? alpha(theme.palette.background.default, 0.8)
            : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? `1px solid ${theme.palette.divider}`
            : "1px solid transparent",
          py: isScrolled ? 1 : 2,
        }}
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
            <Box
              sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}
            >
              <Box
                component={motion(Link)}
                href="/"
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
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    p: 0.75,
                    boxShadow: isScrolled
                      ? "none"
                      : `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <Image
                    src={LogosIcon}
                    alt="Logos Logo"
                    width={32}
                    height={32}
                    unoptimized
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    ml: 1.5,
                    fontWeight: 800,
                    letterSpacing: -0.5,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  LogOS
                </Typography>
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
              {/* {socialLinks.map((social, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: "text.secondary",
                    transition: "all 0.2s",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  <social.icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))} */}
              <Box
                sx={{
                  ml: 2,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  pl: 2,
                }}
              >
                <Button
                  component={Link}
                  href="#newsletter"
                  variant="contained"
                  size="small"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    handleNavigation("#newsletter");
                  }}
                  sx={{
                    fontWeight: 700,
                    textTransform: "none",
                    px: 3,
                  }}
                >
                  Contacto
                </Button>
              </Box>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { lg: "none" },
                color: "text.primary",
                backgroundColor: alpha(theme.palette.action.hover, 0.05),
              }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: "300px",
            backgroundColor: alpha(theme.palette.background.default, 1),
            backgroundImage: "none",
            borderLeft: `1px solid ${theme.palette.divider}`,
            boxShadow: -10,
          },
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
                    component={
                      item.href && !item.href.startsWith("#") ? Link : "div"
                    }
                    href={
                      item.href && !item.href.startsWith("#")
                        ? item.href
                        : undefined
                    }
                    onClick={() => {
                      if (hasSubmenu) {
                        setExpandedItem(isExpanded ? null : item.label);
                      } else if (item.href) {
                        handleNavigation(item.href);
                      }
                    }}
                    sx={{
                      borderRadius: 1.5,
                      py: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: isExpanded
                        ? alpha(theme.palette.primary.main, 0.08)
                        : "transparent",
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.12,
                        ),
                      },
                    }}
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
                            href={
                              !sub.href.startsWith("#") ? sub.href : undefined
                            }
                            onClick={() =>
                              sub.href.startsWith("#")
                                ? handleNavigation(sub.href as string)
                                : handleNavigation(sub.href)
                            }
                            sx={{
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
                            }}
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
          sx={{
            mt: "auto",
            p: 4,
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: alpha(theme.palette.secondary.main, 0.02),
          }}
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
                sx={{
                  color: "text.secondary",
                  backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
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
