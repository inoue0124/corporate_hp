export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="font-koho text-lg font-bold text-white">
          Carriage Inc.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} キャリッジ株式会社
        </p>
      </div>
    </footer>
  );
}
