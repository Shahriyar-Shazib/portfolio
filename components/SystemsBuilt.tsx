'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Plane,
  Zap,
  Store,
} from 'lucide-react';
import { systemsBuilt } from '@/lib/data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  TrendingUp,
  Users,
  Plane,
  Zap,
  Store,
};

export default function SystemsBuilt() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="container-inner" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Domain Expertise
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          Systems <span className="gradient-text">I&apos;ve Built</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-white/50 mb-12 max-w-xl"
        >
          From retail to aviation — I build systems that solve real business problems.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {systemsBuilt.map((system, i) => {
            const Icon = ICON_MAP[system.icon] || Zap;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative p-6 rounded-2xl glass border border-white/5 card-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:from-violet-500/30 transition-all duration-300 shadow-lg shadow-violet-500/5">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
