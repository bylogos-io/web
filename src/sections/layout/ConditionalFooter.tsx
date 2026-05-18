"use client";

import { usePathname } from "@/i18n/routing";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  // List of paths where the footer should NOT be shown
  const excludedPaths = ["/docs", "/terms", "/privacy"];

  const shouldExclude = excludedPaths.some(
    (path) => currentPath === path || currentPath.startsWith(`${path}/`),
  );

  if (shouldExclude) return null;

  return <Footer />;
}
