import { MuiRootProvider } from "@/providers/MuiRootProvider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ConditionalHeader } from "@/sections/layout/ConditionalHeader";
import { ConditionalFooter } from "@/sections/layout/ConditionalFooter";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: "#e16e09",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    return {
        title: {
            default: content.seo.layout.titleDefault,
            template: "LogOS | %s",
        },
        description: content.seo.layout.description,
        applicationName: "LogOS",
        keywords: content.seo.layout.keywords,
        authors: [{ name: "LogOS", url: "https://www.linkedin.com/company/bylogos/" }],
        creator: "Javier Vargas",
        publisher: "LogOS",
        metadataBase: new URL("https://bylogos.io"),
        alternates: {
            canonical: `/${resolvedLocale}`,
            languages: content.seo.languageAlternates,
        },
        openGraph: {
            type: "website",
            locale: content.seo.ogLocale,
            url: `https://bylogos.io/${resolvedLocale}`,
            siteName: "LogOS",
            title: content.seo.layout.openGraphTitle,
            description: content.seo.layout.openGraphDescription,
            images: [
                {
                    url: `https://bylogos.io/api/og?title=${encodeURIComponent(content.seo.layout.openGraphTitle)}&description=${encodeURIComponent(content.seo.layout.openGraphDescription)}&category=Home&ext=.png`,
                    width: 1200,
                    height: 630,
                    alt: content.seo.layout.openGraphImageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@bylogos",
            creator: "@javiervargas",
            title: content.seo.layout.twitterTitle,
            description: content.seo.layout.twitterDescription,
            images: [`https://bylogos.io/api/og?title=${encodeURIComponent(content.seo.layout.openGraphTitle)}&description=${encodeURIComponent(content.seo.layout.openGraphDescription)}&category=Home&ext=.png`],
        },
        icons: {
            icon: [
                { url: "/favicon.ico" },
                { url: "/icon.png", type: "image/png" },
                { url: "/icon.svg", type: "image/svg+xml" },
            ],
            apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
            other: [
                {
                    rel: "mask-icon",
                    url: "/icon.svg",
                },
            ],
        },
        manifest: "/manifest.json",
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        category: "technology",
        appleWebApp: {
            capable: true,
            statusBarStyle: "default",
            title: "LogOS",
        },
        formatDetection: {
            telephone: false,
        },
    };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning style={{ backgroundColor: "#070707", colorScheme: "dark" }}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{ backgroundColor: "#070707", color: "#fff", margin: 0 }}
            >
                <InitColorSchemeScript attribute="class" defaultMode="dark" />
                <NextIntlClientProvider messages={messages}>
                    <MuiRootProvider>
                        <ConditionalHeader />
                        {children}
                        <ConditionalFooter />
                    </MuiRootProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
