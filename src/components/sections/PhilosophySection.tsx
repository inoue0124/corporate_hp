'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const pillars = [
  {
    icon: '🤖',
    title: 'AI活用',
    description:
      'コーディング、デザイン、テスト。あらゆる工程でAIを活用し、開発速度を最大化。人間はクリエイティブな判断に集中します。',
  },
  {
    icon: '🌏',
    title: 'オフショア開発',
    description:
      '優秀なエンジニアチームとの連携で、コストを抑えながら高品質な開発を実現。日本人PMが品質をコントロール。',
  },
  {
    icon: '🚀',
    title: 'スタートアップ思考',
    description:
      'MVPを最速で市場に投入し、ユーザーフィードバックで磨き上げる。大企業的な過剰設計はしません。',
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Philosophy" ja="なんで速くて安いの？" />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-bg-card p-8 transition-colors hover:border-accent-purple/50">
                <div className="text-4xl">{pillar.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
