'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <p className="font-koho text-sm tracking-widest text-accent-purple">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            まずは壁打ちから。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            「こんなの作れる？」「予算感を知りたい」「AIで何ができる？」
            <br />
            カジュアルにお話しましょう。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contact"
              size="lg"
            >
              相談フォームへ →
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-sm text-text-secondary">
            info@carri-age.com
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
