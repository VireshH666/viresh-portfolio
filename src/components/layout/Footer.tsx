import React from "react";
import { Container } from "@/components/ui";
import { portfolioConfig } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalProfile, socialLinks } = portfolioConfig;

  return (
    <footer className="w-full border-t-2 border-[var(--border)] bg-[var(--surface-primary)] py-8 text-xs text-[var(--text-muted)] font-mono">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <div className="font-bold text-[var(--text-primary)]">
            © {currentYear} {personalProfile.name}. All rights reserved.
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg border-2 border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold neo-tag hover:bg-[#0284c7] hover:text-white dark:hover:bg-[var(--secondary-sky)] dark:hover:text-[#090a10] transition-colors"
              >
                GitHub
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg border-2 border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold neo-tag hover:bg-[#e11d48] hover:text-white dark:hover:bg-[var(--accent-pink)] dark:hover:text-[#090a10] transition-colors"
              >
                LinkedIn
              </a>
            )}
            {personalProfile.email && (
              <a
                href={`mailto:${personalProfile.email}`}
                className="px-3 py-1 rounded-lg border-2 border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold neo-tag hover:bg-[#7c3aed] hover:text-white dark:hover:bg-[var(--primary-lavender)] dark:hover:text-[#090a10] transition-colors"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
