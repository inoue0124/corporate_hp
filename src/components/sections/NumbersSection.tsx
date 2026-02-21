'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

function Counter({ end, suffix, label, duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-accent-yellow md:text-5xl">
        {count}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

const numbers = [
  { end: 10, suffix: '+', label: 'プロジェクト完了' },
  { end: 95, suffix: '%', label: 'クライアント満足度' },
  { end: 3, suffix: '年', label: '事業運営' },
  { end: 50, suffix: '%', label: 'AI活用によるコスト削減' },
];

export function NumbersSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeading en="Numbers" ja="数字で見る、キャリッジ" />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {numbers.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.15}>
              <Counter {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
