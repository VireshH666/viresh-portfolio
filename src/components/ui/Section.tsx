import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  spacing?: "default" | "compact" | "loose" | "none";
}

const spacingMap = {
  default: "py-16 sm:py-24 lg:py-28",
  compact: "py-12 sm:py-16 lg:py-20",
  loose: "py-24 sm:py-32 lg:py-40",
  none: "py-0",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, spacing = "default", className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("w-full relative scroll-mt-20", spacingMap[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
