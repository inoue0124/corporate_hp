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
      'AIが物語の「続き」を生成する、インタラクティブ読書体験アプリ。読者の選択で物語が分岐する新しい読書のカタチ。',
    tags: ['Next.js', 'OpenAI', 'Supabase'],
    type: 'own',
  },
  {
    title: 'ツンドク',
    description:
      'AIが積読を解消する読書管理アプリ。本の要約・読書プラン生成で、積読ゼロを目指す。',
    tags: ['React Native', 'Claude API', 'Firebase'],
    type: 'own',
  },
  {
    title: 'AURORA',
    description:
      'クリエイター向けポートフォリオ自動生成SaaS。SNSやGitHubの情報からAIがポートフォリオを自動作成。',
    tags: ['Next.js', 'TypeScript', 'OpenAI'],
    type: 'client',
  },
  {
    title: 'Practas',
    description:
      '実践型プログラミング学習プラットフォーム。AIメンターがリアルタイムでコードレビュー・アドバイス。',
    tags: ['React', 'Python', 'AWS'],
    type: 'client',
  },
  {
    title: 'Strasj',
    description:
      'AI搭載の戦略立案ツール。市場分析・競合調査をAIが自動化し、意思決定をサポート。',
    tags: ['Next.js', 'LangChain', 'GCP'],
    type: 'client',
  },
];
