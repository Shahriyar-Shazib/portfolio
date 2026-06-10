'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2, Loader2, PhoneCall, Gitlab } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormState({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200';

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="container-inner" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
            Get In Touch
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          Let&apos;s <span className="gradient-text">Work Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-white/50 mb-12 max-w-xl"
        >
          Have a project in mind? I&apos;d love to discuss how we can bring your ideas to life.
        </motion.p>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl glass border border-white/5">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-5">
                Contact Info
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:shazib@example.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Email</div>
                    <div>shazib.shahriyar@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Mobile</div>
                    <div>+8801956424568</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Location</div>
                    <div>Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>


            {/* Availability */}
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-sm text-emerald-300/80">
                Open to new opportunities & freelance work
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            

            <div className="p-6 rounded-2xl glass border border-white/5">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-5">
                Follow Me
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/Shahriyar-Shazib', sub: '@Shahriyar-Shazib' },
                  { icon:Gitlab, label: "GitLab", href:"https://gitlab.com/Shahriyar-Shazib-0", sub: '@Shahriyar-Shazib-0'},
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahriyar-shazib-b8aa55163/', sub: 'Shahriyar Shazib' },
                ].map(({ icon: Icon, label, href, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-violet-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">{label}</div>
                      <div>{sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            
          </motion.div>

          {/* Right: Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-2xl glass border border-emerald-500/20 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/50 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl glass border border-white/5 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
