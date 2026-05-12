import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const messageLoaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('../../messages/en.json'),
  es: () => import('../../messages/es.json'),
  pt: () => import('../../messages/pt.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const load = messageLoaders[locale] ?? messageLoaders[routing.defaultLocale];
  return {
    locale,
    messages: (await load()).default,
  };
});
