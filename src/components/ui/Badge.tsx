import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "accent"
    | "outline"
    | "muted"
    | "success"
    | "lavender"
    | "sky"
    | "coral"
    | "mint"
    | "amber";
  size?: "sm" | "md";
  dot?: boolean;
}

const variantStyles: Record<string, string> = {
  default:
    "bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)]",
  lavender:
    "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30",
  sky:
    "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
  coral:
    "bg-rose-500/15 text-rose-400 border border-rose-500/30",
  mint:
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  amber:
    "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  accent:
    "bg-[var(--primary-accent-muted)] text-[var(--primary-accent)] border border-[var(--accent-border)]",
  outline:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border)]",
  muted:
    "bg-[var(--surface-primary)] text-[var(--text-secondary)] border border-[var(--border)]",
  success:
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
};

const sizeStyles: Record<string, string> = {
  sm: "text-[11px] px-2.5 py-0.5 font-bold",
  md: "text-xs px-3 py-1 font-bold",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "sm",
      dot = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full font-mono tracking-tight transition-colors select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "w-2 h-2 rounded-full shrink-0",
              variant === "success"
                ? "bg-emerald-400 animate-pulse"
                : variant === "coral"
                ? "bg-rose-400"
                : variant === "sky"
                ? "bg-cyan-400"
                : "bg-indigo-400"
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
