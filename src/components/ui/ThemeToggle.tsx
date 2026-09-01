"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, ThemeMode } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeOption {
  value: ThemeMode;
  label: string;
  icon: React.ReactNode;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    value: "system",
    label: "System",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export interface ThemeToggleProps {
  className?: string;
  dropdownAlign?: "left" | "right";
  isMobile?: boolean;
}

export function ThemeToggle({ className, dropdownAlign = "right", isMobile = false }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Use a stable "system" default on initial render (both server & client) until mounted
  const activeTheme = mounted ? theme : "system";
  const currentOption = themeOptions.find((opt) => opt.value === activeTheme) || themeOptions[2];

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-2 pt-2 border-t-2 border-[var(--border)]">
        <span className="text-xs font-mono text-[var(--text-muted)] font-bold uppercase tracking-wider">
          Theme Mode
        </span>
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag" role="group" aria-label="Theme selector">
          {themeOptions.map((opt) => {
            const isSelected = activeTheme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setTheme(opt.value)}
                aria-pressed={isSelected}
                className={cn(
                  "flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  isSelected
                    ? "bg-[var(--surface-primary)] text-[var(--text-primary)] shadow-sm border border-[var(--border)] neo-tag"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={mounted ? `Current theme: ${currentOption.label}. Click to select theme.` : "Theme mode selector"}
        className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] flex items-center justify-center"
      >
        <span className="text-[var(--text-primary)]">{currentOption.icon}</span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Theme Options"
          className={cn(
            "absolute mt-2 w-36 rounded-xl bg-[var(--surface-primary)] border-2 border-[var(--border)] p-1.5 neo-card z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md",
            dropdownAlign === "right" ? "right-0" : "left-0"
          )}
        >
          {themeOptions.map((opt) => {
            const isSelected = activeTheme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setTheme(opt.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-xs font-mono font-bold rounded-lg transition-colors select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  isSelected
                    ? "bg-[var(--primary-lavender)] text-[#111111] dark:text-[#ffffff]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
                )}
              >
                <span className="flex items-center gap-2">
                  <span>{opt.icon}</span>
                  <span>{opt.label}</span>
                </span>
                {isSelected && (
                  <span className="font-black text-xs">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
