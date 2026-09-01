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
    "bg-[var(--surface-secondary)] text-[var(--text-primary)] border-2 border-[var(--border)]",
  lavender:
    "bg-[var(--primary-lavender-muted)] text-[var(--text-lavender)] border-2 border-[var(--border)]",
  sky:
    "bg-[var(--secondary-sky-muted)] text-[var(--text-blue)] border-2 border-[var(--border)]",
  coral:
    "bg-[var(--accent-pink-muted)] text-[var(--text-pink)] border-2 border-[var(--border)]",
  mint:
    "bg-[var(--accent-mint-muted)] text-[var(--text-mint)] border-2 border-[var(--border)]",
  amber:
    "bg-amber-500/20 text-amber-800 dark:text-amber-300 border-2 border-[var(--border)]",
  accent:
    "bg-[var(--primary-lavender-muted)] text-[var(--text-lavender)] border-2 border-[var(--border)]",
  outline:
    "bg-transparent text-[var(--text-primary)] border-2 border-[var(--border)]",
  muted:
    "bg-[var(--surface-primary)] text-[var(--text-secondary)] border border-[var(--border)]",
  success:
    "bg-[var(--success-muted)] text-[var(--text-mint)] border-2 border-[var(--border)]",
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
          "inline-flex items-center gap-1.5 rounded-full font-mono tracking-tight transition-colors neo-tag select-none",
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
                ? "bg-[var(--success)] animate-pulse"
                : variant === "coral"
                ? "bg-[var(--text-pink)]"
                : variant === "sky"
                ? "bg-[var(--text-blue)]"
                : "bg-[var(--text-lavender)]"
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
