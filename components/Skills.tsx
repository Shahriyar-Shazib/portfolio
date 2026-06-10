'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { Skill } from '@/types';

type Category = 'all' | Skill['category'];

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Database', value: 'database' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Tools', value: 'tools' },
];

const CATEGORY_COLORS: Record<string, string> = {
  backend: 'from-violet-500 to-purple-600',
  frontend: 'from-blue-500 to-indigo-600',
  database: 'from-emerald-500 to-teal-600',
  devops: 'from-orange-500 to-amber-600',
  tools: 'from-pink-500 to-rose-600',
};

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={cn('h-full rounded-full bg-gradient-to-r', CATEGORY_COLORS[skill.category])}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="container-inner" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Technical Skills
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          My <span className="gradient-text">Tech Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-white/50 mb-10 max-w-xl"
        >
          Technologies I use day-to-day to build robust, scalable applications.
        </motion.p>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200',
                activeCategory === value
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40'
                  : 'glass border border-white/5 text-white/50 hover:text-white/80 hover:border-white/10'
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/5"
        >
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-6 text-center">
            Also worked with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Blade Templates', 'Eloquent ORM', 'Livewire', 'Alpine.js',
              'Bootstrap', 'Redis', 'Nginx', 'Docker', 'Postman', 'Jira',
            ].map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
