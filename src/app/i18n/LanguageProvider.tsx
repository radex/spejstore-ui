'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { SupportedLanguages, fallbackLng } from "./settings";

const LanguageContext = createContext(fallbackLng);

export function LanguageProvider({ lng, children }: {
  lng: SupportedLanguages,
  children: ReactNode
}) {
  const [language, setLanguage] = useState<SupportedLanguages>(fallbackLng)
  useEffect(() => {
    setLanguage(lng)
  }, [lng])

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
}

export function useProvidedLanguage() {
  const lng = useContext(LanguageContext);
  return lng;
}
