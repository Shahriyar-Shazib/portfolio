'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitCommit, Star, BookOpen, Users } from 'lucide-react';
import Image from 'next/image';

const GITHUB_USERNAME = 'Shahriyar-Shazib'; // Replace with actual GitHub username

const githubStats = [
  { label: 'Public Repos', value: '20+', icon: BookOpen },
  { label: 'Contributions (yr)', value: '500+', icon: GitCommit },
  { label: 'Stars Earned', value: '50+', icon: Star },
  { label: 'Followers', value: '30+', icon: Users },
];

export default function GitHubActivity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative">
      <div className="container-inner" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Open Source
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          GitHub <span className="gradient-text">Activity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-white/50 mb-10 max-w-xl"
        >
          Consistent contributor, always pushing code.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {githubStats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl glass border border-white/5 card-hover group"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 transition-colors">
                <Icon className="w-4 h-4 text-violet-400" />
              </div>
              <div className="text-2xl font-black gradient-text mb-1">{value}</div>
              <div className="text-xs text-white/50">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="relative p-6 rounded-2xl glass border border-white/5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white/70">Contribution Graph</h3>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
              >
                View Profile →
              </a>
            </div>
            {/* GitHub contribution chart via ghchart */}
            <div className="rounded-xl overflow-hidden bg-[#0d1117] p-4">
              <img
                src={`https://ghchart.rshah.org/7c3aed/${GITHUB_USERNAME}`}
                alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
                className="w-full h-auto opacity-90"
                style={{ filter: 'hue-rotate(20deg)' }}
              />
            </div>
            <p className="text-xs text-white/30 mt-3 text-center">
              GitHub contributions in the last year
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
