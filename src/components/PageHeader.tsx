interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="bg-gradient-soft border-b border-border">
    <div className="container-narrow py-16 lg:py-24 text-center">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4 animate-fade-in">
          {eyebrow}
        </div>
      )}
      <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance animate-slide-up">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: "150ms" }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
);
