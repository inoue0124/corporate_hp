'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { techStack, categories } from '@/data/techStack';

export function TechStackSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Tech Stack" ja="使ってる技術" />
        </ScrollReveal>

        <div className="space-y-8">
          {categories.map((category, ci) => {
            const items = techStack.filter((t) => t.category === category);
            return (
              <ScrollReveal key={category} delay={ci * 0.1}>
                <div>
                  <h3 className="font-koho mb-3 text-sm font-semibold tracking-wider text-accent-purple">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item.name}
                        className="rounded-lg border border-border bg-bg-card px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent-purple/50"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
