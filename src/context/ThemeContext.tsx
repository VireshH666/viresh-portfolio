"use client";

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

export type ThemeMode = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  resolvedTheme: ResolvedTheme;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const emptySubscribe = () => () => {};

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): ThemeMode {
  try {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored === "dark" || stored === "light" || stored === "system") {
      return stored;
    }
  } catch {
    // Ignore storage errors in restricted environments
  }
  return "system";
}

function getServerThemeSnapshot(): ThemeMode {
  return "system";
}

function resolveActiveTheme(theme: ThemeMode): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  if (theme === "dark") return "dark";
  if (theme === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore guarantees 100% hydration match with server snapshot
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  // useMounted via useSyncExternalStore resolves mounted state without set-state-in-effect
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  // Sync active theme with DOM elements & listen to system scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const active = resolveActiveTheme(theme);
      setResolvedTheme(active);

      const root = document.documentElement;
      if (active === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        root.style.colorScheme = "dark";
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
        root.style.colorScheme = "light";
      }
    };

    syncTheme();

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        syncTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    try {
      localStorage.setItem("theme", newTheme);
      window.dispatchEvent(new Event("theme-change"));
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
