'use client';

import { Code2, Github, Gitlab, Linkedin, Mail, Heart } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="container-inner">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white/90">
                shazib<span className="text-violet-400">.dev</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Full Stack Developer specializing in Laravel & React. Building production-grade systems since 2021.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Shahriyar-Shazib' },
                { icon: Gitlab, label: 'GitLab', href: 'https://gitlab.com/Shahriyar-Shazib-0' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahriyar-shazib-b8aa55163/' },
                { icon: Mail, label: 'Email', href: 'mailto:shazib.shahriyar@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/80 transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} Shahriyar Shazib. All rights reserved.
          </p>
          <p className="text-xs text-white/25 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
