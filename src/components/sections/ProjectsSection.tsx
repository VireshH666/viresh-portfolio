"use client";

import React, { useState } from "react";
import type { Project } from "@/types/portfolio.types";
import {
  Container,
  Section,
  SectionHeading,
  Badge,
  buttonVariants,
} from "@/components/ui";
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
    <Section id="projects" spacing="default" className="border-t-2 border-[var(--border)] relative">
      <Container size="default">
        {/* Section Header */}
        <SectionHeading
          eyebrow="02 // FEATURED PROJECTS"
          title="Practical Engineering Projects"
          description="Applied machine learning models, computer vision diagnostic systems, and intelligent discovery applications."
        />

        {/* 3 Prominent Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {projects.map((project) => {
            const isCompleted = project.status === "completed";
            const isWhatsApp = project.id === "whatsapp-for-business";
            const isCrop = project.id === "crop-nutrient-deficiency-detection";

            const badgeVariant = isWhatsApp ? "lavender" : isCrop ? "sky" : "coral";
            const ctaVariant = isWhatsApp ? "lavender" : isCrop ? "sky" : "coral";

            return (
              <div
                key={project.id}
                className={cn(
                  "p-6 sm:p-7 rounded-3xl bg-[var(--surface-primary)] border-2 border-[var(--border)] neo-card flex flex-col justify-between relative overflow-hidden",
                  project.featured && "ring-2 ring-[var(--primary-lavender)]/60"
                )}
              >
                <div>
                  {/* Top Category Badge & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Badge variant={badgeVariant} size="sm">
                      {isWhatsApp ? "Business Intelligence / AI" : isCrop ? "Computer Vision / ML" : "Signal Processing / Audio ML"}
                    </Badge>
                    <span className="text-[11px] font-mono font-bold text-[var(--text-muted)]">
                      {isCompleted ? "Completed" : "Ongoing Project"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-medium">
                    {project.shortDescription}
                  </p>

                  {/* Verified Metric Callout (for Crop project) */}
                  {isCrop && project.results && project.results.length > 0 && (
                    <div className="mb-5 p-2.5 rounded-xl bg-[var(--secondary-sky-muted)] border-2 border-[var(--border)] neo-tag text-xs font-mono font-bold text-[var(--text-primary)] flex items-center justify-between">
                      <span>Verified Result:</span>
                      <span className="text-[var(--text-blue)] font-black">{project.results[0]}</span>
                    </div>
                  )}

                  {/* Ongoing Badge (for Acoustic project) */}
                  {!isCompleted && (
                    <div className="mb-5 p-2.5 rounded-xl bg-[var(--accent-pink-muted)] border-2 border-[var(--border)] neo-tag text-xs font-mono font-bold text-[var(--text-primary)] flex items-center justify-between">
                      <span>Status:</span>
                      <span className="text-[var(--text-pink)] font-black">Ongoing Exploration</span>
                    </div>
                  )}

                  {/* Key Workflow Capabilities */}
                  {isWhatsApp && (
                    <div className="mb-5 p-3 rounded-xl bg-[var(--surface-secondary)] border-2 border-[var(--border)] text-xs font-mono text-[var(--text-primary)] space-y-1.5 font-medium">
                      <div className="text-[11px] uppercase font-extrabold text-[var(--text-lavender)]">Key Capabilities:</div>
                      <div>• Public web discovery via SerpAPI</div>
                      <div>• AI/LLM structured entity extraction</div>
                      <div>• Deduplication & Geolocation</div>
                      <div>• MongoDB & PhonePe API integration</div>
                    </div>
                  )}
                </div>

                {/* Technologies Badges & Action Trigger */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] neo-tag"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold text-[var(--text-muted)] border border-[var(--border)]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(project)}
                    className={cn(
                      buttonVariants({ variant: ctaVariant, size: "md" }),
                      "w-full text-center font-mono text-xs font-bold"
                    )}
                  >
                    View Case Study ↗
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
