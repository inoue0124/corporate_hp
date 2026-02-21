export interface CompanyInfo {
  label: string;
  value: string;
}

export const companyInfo: CompanyInfo[] = [
  { label: '会社名', value: 'キャリッジ株式会社' },
  { label: '設立', value: '2022年7月' },
  { label: '資本金', value: '1,000,000円' },
  { label: '代表者', value: '代表取締役 井上雄介' },
  { label: '役員', value: '取締役 水野宏明' },
  {
    label: '所在地',
    value: '東京都渋谷区渋谷2-19-15 宮益坂ビルディング609',
  },
  {
    label: '事業内容',
    value: 'AIを活用したシステム・アプリケーション開発',
  },
];
