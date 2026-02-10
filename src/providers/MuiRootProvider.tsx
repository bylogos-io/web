"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";
import { ChatProvider } from "./ChatProvider";
import { ChatWidget } from "@/sections/chat/ChatWidget";
import { theme } from "@/theme";

export function MuiRootProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <MuiThemeProvider theme={theme} defaultMode="dark">
          <CssBaseline />
          <ChatProvider>
            {children}
            <ChatWidget />
          </ChatProvider>
        </MuiThemeProvider>
      </NextThemesProvider>
    </AppRouterCacheProvider>
  );
}
