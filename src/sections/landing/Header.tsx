"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LogosIcon from "@public/icon.svg";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
} from "@mui/material";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Características", href: "#features" },
    { label: "Hardware", href: "#hardware" },
    { label: "Compatibilidad", href: "#stack" },
    { label: "Newsletter", href: "#newsletter" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { icon: LinkedInIcon, href: "https://www.linkedin.com/company/bylogos/" },
    { icon: InstagramIcon, href: "https://www.instagram.com/bylogos.io/" },
    { icon: GitHubIcon, href: "https://github.com/bylogos-io" },
  ];

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
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => scrollToSection("#hero")}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
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
                <Box
                  key={index}
                  component={motion.button}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "text.secondary",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Box>
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
              {socialLinks.map((social, idx) => (
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
              ))}
              <Box
                sx={{
                  ml: 2,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  pl: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => scrollToSection("#newsletter")}
                  sx={{
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: "none",
                    px: 3,
                  }}
                >
                  Newsletter
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
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1.5 }}>
              <ListItemButton
                onClick={() => scrollToSection(item.href)}
                sx={{
                  borderRadius: 2.5,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
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
