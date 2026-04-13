import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

const SPANISH_REGIONS = new Set([
  'AR',
  'BO',
  'CL',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'SV',
  'GQ',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PY',
  'PE',
  'PR',
  'ES',
  'UY',
  'VE'
]);

const PORTUGUESE_REGIONS = new Set([
  'BR',
  'PT',
  'AO',
  'MZ',
  'CV',
  'GW',
  'ST',
  'TL',
  'MO'
]);

function detectLocaleFromRequest(request: NextRequest) {
  // 1. Prioritize system/browser language (Accept-Language header)
  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() ?? '';

  if (acceptLanguage) {
    if (acceptLanguage.includes('pt')) {
      return 'pt';
    }

    if (acceptLanguage.includes('es')) {
      return 'es';
    }

    if (acceptLanguage.includes('en')) {
      return 'en';
    }
  }

  // 2. Fallback to geo-IP region detection
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country-code');

  if (country) {
    const normalizedCountry = country.toUpperCase();

    if (PORTUGUESE_REGIONS.has(normalizedCountry)) {
      return 'pt';
    }

    if (SPANISH_REGIONS.has(normalizedCountry)) {
      return 'es';
    }

    return 'en';
  }

  // 3. Default to English
  return 'en';
}

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/' && !request.cookies.get('NEXT_LOCALE')?.value) {
    const locale = detectLocaleFromRequest(request);
    const url = request.nextUrl.clone();

    url.pathname = `/${locale}`;

    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|pt)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
