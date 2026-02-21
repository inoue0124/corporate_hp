import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  en: string;
  ja: string;
  className?: string;
}

export function SectionHeading({ en, ja, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 text-center md:mb-16', className)}>
      <h2 className="font-koho bg-gradient-to-r from-accent-purple to-accent-yellow bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {en}
      </h2>
      <p className="mt-2 text-sm text-text-secondary md:text-base">{ja}</p>
    </div>
  );
}
