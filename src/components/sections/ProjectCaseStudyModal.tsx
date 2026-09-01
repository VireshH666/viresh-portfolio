"use client";

import React, { useEffect } from "react";
import type { Project } from "@/types/portfolio.types";
import { buttonVariants } from "@/components/ui";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--surface-primary)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 card-modern overflow-y-auto my-auto text-left shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-secondary)] border border-[var(--border)] hover:border-[var(--primary-accent)] transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
            {project.category}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
              project.status === "completed"
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                : "bg-purple-500/15 text-purple-400 border-purple-500/30"
            }`}
          >
            {project.status === "completed" ? "Completed" : "Ongoing Project"}
          </span>
        </div>

        {/* Title */}
        <h2
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 pr-10"
        >
          {project.title}
        </h2>

        {/* Overview */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
          {project.description}
        </p>

        <div className="space-y-6 border-t border-[var(--border-subtle)] pt-6 text-sm">
          {/* Objective */}
          {project.goal && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2">
                Objective
              </div>
              <p className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                {project.goal}
              </p>
            </div>
          )}

          {/* Workflow */}
          {workflowSteps.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
                Workflow
              </div>
              <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                  {workflowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1 rounded-xl bg-[var(--surface-primary)] border border-[var(--border)] text-[var(--text-primary)] font-bold">
                        {step}
                      </span>
                      {idx < workflowSteps.length - 1 && (
                        <span className="text-[var(--primary-accent)] font-black text-xs">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Approach */}
          {project.technicalDecisions && project.technicalDecisions.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-2.5">
                Technical Approach
              </div>
              <div className="space-y-2">
                {project.technicalDecisions.map((decision, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs text-[var(--text-primary)] leading-relaxed font-medium"
                  >
                    • {decision}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results (Only when exists) */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-extrabold mb-2">
                Demonstrated Results
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-bold">
                {project.results.map((res, idx) => (
                  <p key={idx}>{res}</p>
                ))}
              </div>
            </div>
          )}

          {/* Privacy Note (Only for WhatsAppForBusiness) */}
          {project.privacyNote && (
            <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs text-[var(--text-muted)] font-mono">
              <span className="text-[var(--text-primary)] font-bold block mb-1">
                Privacy Architecture:
              </span>
              {project.privacyNote}
            </div>
          )}
        </div>

        {/* Footer Close Button */}
        <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
