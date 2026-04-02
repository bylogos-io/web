"use client";

import { usePathname } from "@/i18n/routing";
import { Header } from "./Header";

export function ConditionalHeader() {
  const pathname = usePathname();

  // List of paths where the header should NOT be shown
  const excludedPaths = ["/docs", "/terms", "/privacy"];

  const shouldExclude = excludedPaths.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );

  if (shouldExclude) return null;

  return <Header />;
}
