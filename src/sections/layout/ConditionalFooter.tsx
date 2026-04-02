"use client";

import { usePathname } from "@/i18n/routing";
import { Footer } from "./Footer";
import { Box } from "@mui/material";

export function ConditionalFooter() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  // List of paths where the footer should NOT be shown
  const excludedPaths = ["/chat", "/docs", "/terms", "/privacy"];

  const shouldExclude = excludedPaths.some(
    (path) => currentPath === path || currentPath.startsWith(`${path}/`),
  );

  if (shouldExclude) return null;

  const isHome = currentPath === "/";

  if (isHome) {
    return (
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <Footer />
      </Box>
    );
  }

  return <Footer />;
}
