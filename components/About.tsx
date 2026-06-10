'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code Advocate',
    description: 'Committed to SOLID principles, DRY code, and maintainable architecture.',
  },
  {
    icon: Layers,
    title: 'Full Stack Depth',
    description: 'From database schema design to pixel-perfect UI — end-to-end ownership.',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Obsessed with query optimization, caching, and fast-loading experiences.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Experienced in collaborative workflows, code reviews, and Agile sprints.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative">
      <div className="container-inner">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            About Me
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Building{' '}
              <span className="gradient-text">robust systems</span>{' '}
              that scale
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/60 leading-relaxed"
            >
              <p>
                I&apos;m <span className="text-white font-medium">Shahriyar Shazib</span>, a Software
                Engineer with over <span className="text-violet-400 font-medium">4 years</span> of
                experience crafting production-grade web applications. My core expertise lies in{' '}
                <span className="text-white/80">Laravel</span> and{' '}
                <span className="text-white/80">React</span>, where I bridge the gap between elegant
                backends and intuitive user interfaces.
              </p>
              <p>
                I&apos;ve worked across three companies — from startups to established tech firms —
                delivering everything from POS systems and financial platforms to recruitment tools
                and aviation management portals. I take pride in writing code that is not just
                functional, but maintainable and scalable.
              </p>
              <p>
                Currently at{' '}
                <span className="text-white font-medium">Analyzen Bangladesh Ltd</span>, where I
                architect RESTful APIs, mentor junior developers, and contribute to the full product
                lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-2xl glass border border-white/5 card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
