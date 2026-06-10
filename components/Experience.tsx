'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-inner" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Work Experience
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Career <span className="gradient-text">Timeline</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-2 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className={cn(
                  'absolute left-0 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center hidden md:flex',
                  exp.current
                    ? 'bg-violet-500/20 border-violet-500 shadow-lg shadow-violet-500/20'
                    : 'bg-background border-white/20'
                )}>
                  <div className={cn(
                    'w-2.5 h-2.5 rounded-full',
                    exp.current ? 'bg-violet-400 animate-pulse' : 'bg-white/30'
                  )} />
                </div>

                {/* Card */}
                <div className={cn(
                  'relative p-6 rounded-2xl glass border card-hover group overflow-hidden',
                  exp.current ? 'border-violet-500/20' : 'border-white/5'
                )}>
                  {/* Current glow */}
                  {exp.current && (
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/50">
                          <MapPin className="w-3.5 h-3.5 text-violet-400" />
                          <span className="font-medium text-violet-300">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((desc) => (
                        <li key={desc} className="flex items-start gap-2.5 text-sm text-white/60">
                          <CheckCircle2 className="w-4 h-4 text-violet-400/60 mt-0.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
