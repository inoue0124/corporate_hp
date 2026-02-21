'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Light',
    price: '150万円〜',
    description: 'MVP・プロトタイプ開発',
    features: [
      'LP / シンプルなWebアプリ',
      'AI機能の組み込み',
      '開発期間: 1〜2ヶ月',
      'デザイン込み',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '300万円〜',
    description: '本格的なプロダクト開発',
    features: [
      'Webアプリ / モバイルアプリ',
      'ユーザー認証・管理画面',
      '開発期間: 2〜4ヶ月',
      'AI機能フル活用',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '要相談',
    description: '大規模システム開発',
    features: [
      '基幹システム連携',
      'スケーラブルなアーキテクチャ',
      '開発期間: 4ヶ月〜',
      '運用・保守サポート',
    ],
    highlighted: false,
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Service" ja="150万ボッキリMVP開発" />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl border p-8 transition-colors ${
                  plan.highlighted
                    ? 'border-accent-purple bg-accent-purple/5'
                    : 'border-border bg-bg-card hover:border-accent-purple/50'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-purple px-4 py-1 text-xs font-bold text-white">
                    POPULAR
                  </span>
                )}
                <h3 className="font-koho text-2xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {plan.description}
                </p>
                <p className="mt-4 text-3xl font-bold text-accent-yellow">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-accent-purple">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    相談する
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button href="/service" variant="secondary">
              詳しく見る →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
