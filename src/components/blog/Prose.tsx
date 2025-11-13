import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <article className={`prose ${className ?? ""}`}>
      {children}
    </article>
  );
}
