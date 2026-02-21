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
    details: {
      includes: [
        'ヒアリング・要件定義',
        'UI/UXデザイン（最大5画面）',
        'フロントエンド開発',
        'ベーシックなAPI連携',
        'レスポンシブ対応',
        'リリースサポート',
      ],
      useCases: [
        'スタートアップのMVP検証',
        'サービスのランディングページ',
        '社内ツールのプロトタイプ',
        'AIチャットボットの組み込み',
      ],
    },
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
    details: {
      includes: [
        'ヒアリング・要件定義',
        'UI/UXデザイン（画面数制限なし）',
        'フロントエンド + バックエンド開発',
        'ユーザー認証・権限管理',
        '管理画面',
        'AI機能の設計・実装',
        'テスト・QA',
        'リリース + 1ヶ月サポート',
      ],
      useCases: [
        'BtoB SaaSプロダクト',
        'モバイルアプリ（iOS/Android）',
        'AI搭載の業務支援ツール',
        'マーケットプレイス・ECサイト',
      ],
    },
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
    details: {
      includes: [
        '詳細なヒアリング・業務分析',
        'アーキテクチャ設計',
        'フルスタック開発',
        '外部システム連携（API・DB）',
        'セキュリティ設計・監査対応',
        '負荷テスト・パフォーマンス最適化',
        '運用・保守サポート（長期）',
        'チーム体制のスケールアップ',
      ],
      useCases: [
        '基幹システムのモダナイズ',
        '大規模AIプラットフォーム',
        '複数サービス連携のシステム構築',
        '高セキュリティ要件のヘルスケア・金融系',
      ],
    },
    highlighted: false,
  },
];

export default function ServicePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Service" ja="150万ボッキリMVP開発" />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl border p-8 shadow-sm transition-colors ${
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

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-sm font-bold text-text-primary">
                    含まれるもの
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {plan.details.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-accent-yellow">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="text-sm font-bold text-text-primary">
                    想定ユースケース
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {plan.details.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-accent-purple">●</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    href="/contact"
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
          <div className="mt-16 text-center">
            <p className="text-text-secondary">
              どのプランが最適かわからない場合も、お気軽にご相談ください。
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/flow" variant="secondary">
                開発の流れを見る →
              </Button>
              <Button href="/contact">
                無料で相談する →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
