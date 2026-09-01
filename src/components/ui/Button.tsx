import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "default";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "default";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
} = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-bold transition-all duration-200 select-none rounded-xl cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

  const variantStyles: Record<string, string> = {
    primary:
      "bg-[var(--primary-accent)] text-white hover:bg-[var(--accent-hover)] shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95",
    default:
      "bg-[var(--primary-accent)] text-white hover:bg-[var(--accent-hover)] shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95",
    secondary:
      "bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--surface-tertiary)] hover:border-[var(--border-hover)] hover:scale-105 active:scale-95",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--surface-secondary)] hover:border-[var(--primary-accent)] active:scale-95",
    ghost:
      "bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]",
  };

  const sizeStyles: Record<string, string> = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-xs sm:text-sm gap-2",
    lg: "h-12 px-6 text-sm sm:text-base gap-2.5 font-bold",
    icon: "h-10 w-10 p-0",
  };

  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
