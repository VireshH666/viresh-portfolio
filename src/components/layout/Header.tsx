import React from "react";
import { Container } from "@/components/ui";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b-2 border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-colors",
        className
      )}
      {...props}
    >
      <Container size="default">
        <Navbar />
      </Container>
    </header>
  );
}
