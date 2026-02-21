import type { Metadata } from 'next';
import { KoHo, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const koho = KoHo({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-family-koho',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-family-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'キャリッジ株式会社 | AI×オフショアで、速く安く。',
  description:
    'AI×オフショア開発で、高品質なMVP開発を150万円から。キャリッジ株式会社はAIを使い倒すスタートアップです。',
  openGraph: {
    title: 'キャリッジ株式会社 | AI×オフショアで、速く安く。',
    description:
      'AI×オフショア開発で、高品質なMVP開発を150万円から。キャリッジ株式会社はAIを使い倒すスタートアップです。',
    url: 'https://www.carri-age.com',
    siteName: 'キャリッジ株式会社',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${koho.variable} ${notoSansJP.variable}`}>
      <body className="font-noto antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
