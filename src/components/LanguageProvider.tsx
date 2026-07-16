"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getDict, type Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: ReturnType<typeof getDict>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "selina-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  // Restore saved preference on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  // Keep <html> attributes + storage in sync with the active language.
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggle = () => setLangState((prev) => (prev === "ar" ? "en" : "ar"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: getDict(lang) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
