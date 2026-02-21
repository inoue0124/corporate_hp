import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-koho bg-gradient-to-r from-accent-purple to-accent-yellow bg-clip-text text-8xl font-bold text-transparent">
        404
      </h1>
      <p className="mt-4 text-xl text-text-secondary">
        ページが見つかりません
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-accent-purple px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-purple/80"
      >
        トップに戻る →
      </Link>
    </div>
  );
}
