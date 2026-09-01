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
            <span className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase bg-[var(--primary-lavender)] px-3 py-1 rounded-md border-2 border-[var(--border)] neo-tag">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-3.5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed",
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
