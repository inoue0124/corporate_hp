import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
        variant === 'primary' &&
          'bg-accent-purple hover:bg-accent-purple/80 text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40',
        variant === 'secondary' &&
          'border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
