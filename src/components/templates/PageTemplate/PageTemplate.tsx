import type { ReactNode } from "react";

type PageTemplateProps = {
  header: ReactNode;
  model: ReactNode;
  content: ReactNode;
  stats: ReactNode;
  footer: ReactNode;
};

/** Esqueleto da página: define a ordem das seções, sem conhecer o conteúdo. */
export const PageTemplate = ({ header, model, content, stats, footer }: PageTemplateProps) => (
  <div>
    {header}
    {model}
    {content}
    {stats}
    {footer}
  </div>
);
