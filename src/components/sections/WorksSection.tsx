'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { works } from '@/data/works';
import { cn } from '@/lib/utils';

type Filter = 'all' | 'own' | 'client';

export function WorksSection() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = works.filter(
    (w) => filter === 'all' || w.type === filter,
  );

  return (
    <section id="works" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Works" ja="つくったもの" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-8 flex justify-center gap-4">
            {([
              ['all', 'All'],
              ['own', '自社プロダクト'],
              ['client', '受託開発'],
            ] as [Filter, string][]).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-all',
                  filter === value
                    ? 'bg-accent-purple text-white'
                    : 'border border-border text-text-secondary hover:border-accent-purple/50',
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work, i) => (
            <ScrollReveal key={work.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-accent-purple/50 hover:-translate-y-1">
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-bg-secondary">
                  <span className="text-4xl font-bold text-text-secondary/30">
                    {work.title.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-accent-purple">
                  {work.type === 'own' ? '自社プロダクト' : '受託開発'}
                </span>
                <h3 className="mt-1 text-xl font-bold">{work.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {work.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
