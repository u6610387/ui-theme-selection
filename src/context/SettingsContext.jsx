import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const SettingsContext = createContext(null);

const DEFAULTS = {
  theme: "light",
  language: "en",
};

const STORAGE_KEY = "app-settings";

export function SettingsProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULTS.theme);
  const [language, setLanguageState] = useState(DEFAULTS.language);

  // 2) Load from localStorage (on start)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (parsed?.theme === "light" || parsed?.theme === "dark") {
        setThemeState(parsed.theme);
      }
      if (parsed?.language === "en" || parsed?.language === "th") {
        setLanguageState(parsed.language);
      }
    } catch (err) {
      // If corrupted JSON, ignore and use defaults
      console.error("Failed to load settings:", err);
    }
  }, []);

  // 3) Save to localStorage (whenever changes)
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme, language })
      );
    } catch (err) {
      console.error("Failed to save settings:", err);
    }
  }, [theme, language]);

  // Optional: apply theme to <html> for global styling
  useEffect(() => {
    document.documentElement.dataset.theme = theme; // "light" or "dark"
  }, [theme]);

  // actions required by assignment
  const setTheme = (nextTheme) => {
    if (nextTheme === "light" || nextTheme === "dark") setThemeState(nextTheme);
  };

  const setLanguage = (nextLang) => {
    if (nextLang === "en" || nextLang === "th") setLanguageState(nextLang);
  };

  const resetSettings = () => {
    setThemeState(DEFAULTS.theme);
    setLanguageState(DEFAULTS.language);
  };

  const value = useMemo(
    () => ({ theme, language, setTheme, setLanguage, resetSettings }),
    [theme, language]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}