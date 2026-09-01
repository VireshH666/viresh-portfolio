import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = React.forwardRef<
  HTMLDivElement,
  SectionHeadingProps
>(
  (
    { eyebrow, title, description, align = "left", className, ...props },
    ref
  ) => {
    const isCenter = align === "center";

    return (
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mb-12 sm:mb-16",
          isCenter && "mx-auto text-center",
          className
        )}
        {...props}
      >
        {eyebrow && (
          <div className="mb-3.5">
            <span className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-[var(--primary-accent)] uppercase bg-[var(--primary-accent-muted)] px-3.5 py-1 rounded-full border border-[var(--accent-border)]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium",
              isCenter && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";
