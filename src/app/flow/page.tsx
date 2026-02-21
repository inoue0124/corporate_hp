'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    title: 'ヒアリング・壁打ち',
    subtitle: '無料',
    description:
      '「こんなの作れる？」からでOK。アイデア段階でも、ざっくりした構想でも大丈夫です。技術的な実現可能性やコスト感をお伝えします。',
    icon: '💬',
  },
  {
    number: '02',
    title: '要件定義・見積もり',
    subtitle: '1〜2週間',
    description:
      'ヒアリング内容をもとに、機能一覧・画面構成・技術選定をまとめます。明確な見積もりと開発スケジュールをご提案。',
    icon: '📋',
  },
  {
    number: '03',
    title: 'デザイン',
    subtitle: '1〜2週間',
    description:
      'Figmaでワイヤーフレーム → UIデザインを作成。実際の画面イメージを見ながらフィードバックいただけます。',
    icon: '🎨',
  },
  {
    number: '04',
    title: '開発（AI×オフショア）',
    subtitle: '1〜3ヶ月',
    description:
      'AIを活用した高速開発 + オフショアチームのリソースで、品質を保ちながらスピーディーに開発。週次で進捗を共有します。',
    icon: '⚡',
  },
  {
    number: '05',
    title: 'テスト・QA',
    subtitle: '1〜2週間',
    description:
      '機能テスト、UIテスト、パフォーマンステストを実施。バグの修正とブラッシュアップを行います。',
    icon: '🔍',
  },
  {
    number: '06',
    title: 'リリース・運用サポート',
    subtitle: '継続',
    description:
      '本番環境へのデプロイ、ストア申請（アプリの場合）をサポート。リリース後の改善・運用もお任せください。',
    icon: '🚀',
  },
];

export default function FlowPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <SectionHeading en="Flow" ja="開発の流れ" />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Icon circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-purple bg-white text-xl">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-border bg-bg-card p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-koho text-sm font-bold text-accent-purple">
                        STEP {step.number}
                      </span>
                      <span className="rounded-full bg-accent-yellow/10 px-3 py-0.5 text-xs font-bold text-accent-yellow">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold">
              まずはStep 01から。
            </h3>
            <p className="mt-4 text-text-secondary">
              ヒアリング・壁打ちは無料です。お気軽にご相談ください。
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                無料で相談する →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
