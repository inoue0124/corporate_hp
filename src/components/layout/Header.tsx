'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#service', label: 'Service' },
  { href: '#works', label: 'Works' },
  { href: '/flow', label: 'Flow', isPage: true },
  { href: '#team', label: 'Team' },
  { href: '#company', label: 'Company' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    setIsTopPage(window.location.pathname === '/');
  }, []);

  const getHref = (link: (typeof navLinks)[number]) => {
    if (link.isPage) return link.href;
    if (isTopPage) return link.href;
    return `/${link.href}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-koho text-xl font-bold text-text-primary">
          Carriage
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link)}
              className="font-koho text-sm text-text-secondary transition-colors hover:text-accent-purple"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="メニューを開く"
        >
          <span
            className={cn(
              'h-0.5 w-6 bg-text-primary transition-all duration-300',
              isOpen && 'translate-y-2 rotate-45',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-text-primary transition-all duration-300',
              isOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-text-primary transition-all duration-300',
              isOpen && '-translate-y-2 -rotate-45',
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-bg-primary md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link)}
                  onClick={() => setIsOpen(false)}
                  className="font-koho text-lg text-text-secondary transition-colors hover:text-accent-purple"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
