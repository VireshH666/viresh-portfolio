"use client";

import React, { useState } from "react";
import type { Project } from "@/types/portfolio.types";
import { Container, Section, SectionHeading, buttonVariants } from "@/components/ui";
import { portfolioConfig } from "@/config";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { projects } = portfolioConfig;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section id="projects" spacing="default" className="border-t border-[var(--border)] relative">
      <Container size="default">
        {/* Section Header */}
        <SectionHeading
          eyebrow="02 / PROJECTS"
          title="Featured Projects"
          description="Applied engineering projects in machine learning classification, computer vision diagnosis, and intelligent web discovery."
        />

        {/* 3 Prominent Project Cards Grid without technology lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => {
            const isCompleted = project.status === "completed";
            const isWhatsApp = project.id === "whatsapp-for-business";
            const isCrop = project.id === "crop-nutrient-deficiency-detection";

            return (
              <div
                key={project.id}
                className="p-7 sm:p-8 rounded-3xl bg-[var(--surface-primary)] border border-[var(--border)] card-engineering flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  {/* Top Header: Project Number, Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-black text-[var(--primary-accent)]">
                        {project.projectNumber}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border",
                        isCompleted
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                      )}
                    >
                      {isCompleted ? "Completed" : "Ongoing Project"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                    {project.shortDescription}
                  </p>

                  {/* Custom Visual Workflow Graphic (No external images) */}
                  <div className="w-full rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] p-4 mb-6 relative overflow-hidden group-hover:border-[var(--primary-accent)]/40 transition-colors">
                    {/* Background glow accent */}
                    <div
                      className={cn(
                        "absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity",
                        isWhatsApp && "bg-cyan-500",
                        isCrop && "bg-emerald-500",
                        !isWhatsApp && !isCrop && "bg-purple-500"
                      )}
                    />

                    <div className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2.5">
                      Visual Workflow
                    </div>

                    {/* Step-by-Step Interactive Workflow */}
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-[var(--text-primary)] font-extrabold">
                      {project.workflowSteps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2 py-1 rounded-lg bg-[var(--surface-primary)] border border-[var(--border)] shadow-xs">
                            {step}
                          </span>
                          {sIdx < project.workflowSteps.length - 1 && (
                            <span
                              className={cn(
                                "text-xs font-black",
                                isWhatsApp && "text-cyan-400",
                                isCrop && "text-emerald-400",
                                !isWhatsApp && !isCrop && "text-purple-400"
                              )}
                            >
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Verified Result Metric Callout (For Crop project only) */}
                    {isCrop && project.results && project.results.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--text-muted)] font-medium">Result:</span>
                        <span className="text-emerald-400 font-black">Up to 93% accuracy</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(project)}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "md" }),
                      "w-full text-center font-mono text-xs font-bold border-[var(--border)] hover:bg-[var(--primary-accent)] hover:text-white hover:border-[var(--primary-accent)] transition-all cursor-pointer shadow-sm"
                    )}
                  >
                    View Details ↗
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Accessible Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Section>
  );
}
