"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "./ThemeProvider";
import { ChatProvider } from "./ChatProvider";
import { ChatWidget } from "@/sections/chat/ChatWidget";
import { getTheme } from "@/theme";

export function MuiRootProvider({ children }: { children: React.ReactNode }) {
  // We use dark by default for the MUI theme if not specified
  const theme = getTheme("dark");

  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ChatProvider>
            {children}
            <ChatWidget />
          </ChatProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
