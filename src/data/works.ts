export interface Work {
  title: string;
  description: string;
  tags: string[];
  type: 'own' | 'client';
  url?: string;
}

export const works: Work[] = [
  {
    title: 'ヨミツギ',
    description:
      '本のマーケットプレイスアプリ。ユーザー間で本を売買できるプラットフォーム。Stripe決済連携で安全な取引を実現。',
    tags: ['Next.js', 'Expo', 'Supabase', 'Stripe'],
    type: 'own',
  },
  {
    title: 'ツンドク',
    description:
      '読書管理・積読解消アプリ。読書記録の管理、積読リストの可視化で読書習慣をサポート。',
    tags: ['Expo', 'Supabase', 'React Native'],
    type: 'own',
  },
  {
    title: 'Practas',
    description:
      '実践型トレーニングアプリ。トレーニングメニューの管理・記録をアプリで完結。React管理画面でコンテンツ管理。',
    tags: ['Flutter', 'Firebase', 'React'],
    type: 'client',
  },
  {
    title: '語学学習プラットフォーム',
    description:
      'AI音声認識を活用した語学学習プラットフォーム。Google Cloud Speech APIで発音チェック、LINE連携で学習リマインド。',
    tags: ['Next.js', 'Supabase', 'Google Cloud', 'LINE API'],
    type: 'client',
  },
  {
    title: 'リハビリAIシステム',
    description:
      'AI搭載のリハビリ支援システム。患者データの分析・リハビリプランの自動提案で医療現場をサポート。',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Azure', 'Dify'],
    type: 'client',
  },
  {
    title: 'Voice2SOAP',
    description:
      '音声からSOAPカルテを自動生成する医療記録支援システム。MFA認証でセキュアな環境を提供。',
    tags: ['React', 'Firebase', 'MFA認証'],
    type: 'client',
  },
];
