'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { WaveScene } from '@/components/three/WaveScene';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-bg-secondary overflow-hidden">
      <WaveScene />
      <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white/60 px-8 py-12 text-center backdrop-blur-md md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-koho mb-4 text-sm tracking-widest text-accent-purple md:text-base"
        >
          Carriage Inc.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          AI×開発で、
          <br className="md:hidden" />
          圧倒的に速く。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-text-secondary md:text-lg"
        >
          AI×オフショア開発で、高品質なプロダクトを
          <br className="hidden md:block" />
          圧倒的なスピードとコストで実現します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="#contact" size="lg">
            まずは壁打ちから →
          </Button>
          <Button href="#service" variant="secondary" size="lg">
            サービスを見る
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-5 rounded-full border-2 border-text-secondary/50"
        >
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
