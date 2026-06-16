import en from './en.json';
import de from './de.json';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export type Translations = typeof en;

const dictionaries: Record<Locale, Translations> = {
  en,
  de: de as Translations,
};

export function getTranslations(lang: Locale): Translations {
  return dictionaries[lang];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
