"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioConfig } from "@/config";
import { useScrollSpy } from "@/hooks";
import { ThemeToggle } from "@/components/ui";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Technical Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.id), { offset: 120 });
  const { socialLinks, personalProfile } = portfolioConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between h-16 w-full" aria-label="Main Navigation">
      {/* Brand / Logo */}
      <Link
        href="#"
        className="group inline-flex items-center gap-1.5 font-mono text-base font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-xl px-3 py-1.5 bg-[var(--surface-primary)] border border-[var(--border)] shadow-sm"
      >
        <span className="text-[var(--primary-accent)] font-black text-lg">&gt;</span>
        <span>{personalProfile.name}</span>
      </Link>

      {/* Desktop Navigation Links & Action Controls */}
      <div className="hidden md:flex items-center gap-2 lg:gap-3">
        <ul
          className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-2xl border border-[var(--border)] transition-all duration-200 shadow-sm",
            isScrolled
              ? "bg-[var(--surface-primary)]/90 backdrop-blur-md"
              : "bg-[var(--surface-primary)]/60 backdrop-blur-sm"
          )}
          role="list"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs lg:text-sm font-mono font-bold rounded-xl transition-all select-none block",
                    isActive
                      ? "bg-[var(--primary-accent)] text-white shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social Icons & Theme Toggle */}
        <div className="flex items-center gap-2 pl-2">
          {/* Theme Selector */}
          <div className="border border-[var(--border)] rounded-xl bg-[var(--surface-primary)] shadow-sm">
            <ThemeToggle />
          </div>

          {/* GitHub Icon Link */}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-primary)] border border-[var(--border)] shadow-sm hover:border-[var(--primary-accent)] transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}

          {/* LinkedIn Icon Link */}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[#0a66c2] bg-[var(--surface-primary)] border border-[var(--border)] shadow-sm hover:border-blue-500 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Mobile Actions: Theme Toggle + Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="border border-[var(--border)] rounded-xl bg-[var(--surface-primary)] shadow-sm">
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="p-2 rounded-xl text-[var(--text-primary)] bg-[var(--surface-primary)] border border-[var(--border)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[var(--background)]/98 backdrop-blur-xl md:hidden flex flex-col p-6 border-t border-[var(--border)] overflow-y-auto"
        >
          <ul className="flex flex-col space-y-2.5 py-4" role="list">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-mono font-bold transition-all border",
                      isActive
                        ? "bg-[var(--primary-accent)] text-white border-[var(--primary-accent)] shadow-md"
                        : "bg-[var(--surface-primary)] text-[var(--text-primary)] border-[var(--border)] hover:bg-[var(--surface-secondary)]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-75 font-mono">#{item.id}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-6 border-t border-[var(--border)] flex flex-col gap-4">
            {/* Mobile Theme Selector */}
            <ThemeToggle isMobile />

            <div className="flex items-center justify-center gap-4 pt-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[var(--surface-primary)] text-[var(--text-primary)] border border-[var(--border)] shadow-sm hover:border-[var(--primary-accent)]"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[var(--surface-primary)] text-[#0a66c2] border border-[var(--border)] shadow-sm hover:border-blue-500"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
