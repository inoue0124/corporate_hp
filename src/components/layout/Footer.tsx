export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="font-koho text-lg font-bold text-text-primary">
          Carriage Inc.
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} キャリッジ株式会社
        </p>
      </div>
    </footer>
  );
}
