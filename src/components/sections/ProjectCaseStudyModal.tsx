"use client";

import React, { useEffect } from "react";
import type { Project } from "@/types/portfolio.types";
import { Badge, buttonVariants } from "@/components/ui";

export interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const workflowSteps = project.architecture
    ? project.architecture.split("→").map((s) => s.trim())
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--surface-primary)] border-2 border-[var(--border)] rounded-3xl p-6 sm:p-8 neo-card overflow-y-auto my-auto text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-primary)] bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag hover:bg-[#e11d48] hover:text-white dark:hover:bg-[var(--accent-pink)] dark:hover:text-[#090a10] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 1. Header & Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="lavender" size="sm">
            {project.subtitle || project.category}
          </Badge>
          <Badge
            variant={project.status === "completed" ? "default" : "coral"}
            size="sm"
          >
            {project.status === "completed" ? "Completed" : "Ongoing Project"}
          </Badge>
        </div>

        {/* Title */}
        <h2
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3"
        >
          {project.title}
        </h2>

        {/* Overview */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
          {project.description}
        </p>

        <div className="space-y-6 border-t-2 border-[var(--border)] pt-6 text-sm">
          {/* 2. Workflow Pipeline */}
          {workflowSteps.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
                Workflow Pipeline
              </div>
              <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                  {workflowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 rounded-lg bg-[var(--surface-primary)] border-2 border-[var(--border)] text-[var(--text-primary)] font-bold">
                        {step}
                      </span>
                      {idx < workflowSteps.length - 1 && (
                        <span className="text-[#e11d48] dark:text-[var(--accent-pink)] font-black text-xs">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. Problem & Solution */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag">
                  <div className="text-xs font-mono text-[var(--text-blue)] uppercase tracking-wider mb-1.5 font-extrabold">
                    Problem
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border-2 border-[var(--border)] neo-tag">
                  <div className="text-xs font-mono text-[var(--text-lavender)] uppercase tracking-wider mb-1.5 font-extrabold">
                    Solution
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 4. Key Capabilities */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
                Key Capabilities
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-primary)] p-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] font-medium"
                  >
                    <span className="text-[#e11d48] dark:text-[var(--accent-pink)] font-bold text-sm">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Technical Decisions */}
          {project.technicalDecisions && project.technicalDecisions.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
                Technical Approach
              </div>
              <div className="space-y-2">
                {project.technicalDecisions.map((decision, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs text-[var(--text-primary)] leading-relaxed font-medium"
                  >
                    • {decision}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-mint)] font-extrabold mb-2">
                Demonstrated Results
              </div>
              <div className="p-4 rounded-2xl bg-[var(--success-muted)] border-2 border-[var(--border)] neo-tag text-[var(--text-mint)] text-xs sm:text-sm font-mono font-black">
                {project.results.map((res, idx) => (
                  <p key={idx}>{res}</p>
                ))}
              </div>
            </div>
          )}

          {/* 7. Privacy Framing Note (for WhatsAppForBusiness) */}
          {project.id === "whatsapp-for-business" && (
            <div className="p-3.5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs text-[var(--text-muted)] font-mono">
              <span className="text-[var(--text-primary)] font-bold block mb-0.5">
                Public Web Search Architecture:
              </span>
              Strictly queries and structures publicly available business information via public web search endpoints.
            </div>
          )}

          {/* 8. Technologies Badges */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] neo-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Close Button */}
        <div className="mt-8 pt-4 border-t-2 border-[var(--border)] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
