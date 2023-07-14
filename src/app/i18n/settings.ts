type Languages = readonly ["en", "pl"];

export const fallbackLng = "en";
export const languages: string[] = [fallbackLng, "pl"] satisfies Languages;

export type SupportedLanguages = (typeof languages)[number];

export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
