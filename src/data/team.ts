export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string[];
}

export const team: TeamMember[] = [
  {
    name: '井上 雄介',
    role: '代表取締役 / CEO',
    image: '/images/team/inoue.png',
    bio: [
      '東京大学工学部卒。',
      '言語学習の研究を経て、メガベンチャーでWebエンジニアとして従事。',
      '2022年にキャリッジ株式会社を設立。',
      'AIを活用したプロダクト開発に情熱を注ぐ。',
    ],
  },
  {
    name: '水野 宏明',
    role: '取締役 / Director',
    image: '/images/team/mizuno.jpg',
    bio: [
      '東京大学理学部（情報科学科）卒。',
      'SIerでコンサルタントを経験後、メガベンチャーでプロダクト開発に従事。',
      'キャリッジではPM・テックリードとして開発を牽引。',
    ],
  },
];
