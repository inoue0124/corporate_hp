'use client';

import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { team } from '@/data/team';

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Team" ja="中の人" />
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2">
          {team.map((member, i) => (
            <ScrollReveal
              key={member.name}
              delay={i * 0.2}
              direction={i === 0 ? 'left' : 'right'}
            >
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-bg-card p-8 md:flex-row md:items-start">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-accent-purple/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="font-koho mt-1 text-sm text-accent-purple">
                    {member.role}
                  </p>
                  <div className="mt-4 space-y-1">
                    {member.bio.map((line) => (
                      <p
                        key={line}
                        className="text-sm leading-relaxed text-text-secondary"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
