'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { skills, categories } from '@/lib/data';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getProgressBar = (level: number) => {
    if (theme === 'dark') {
      const filled = Math.round(level / 5);
      const empty = 20 - filled;
      return `[${'='.repeat(filled)}${'>'}${' '.repeat(Math.max(0, empty - 1))}] ${level}%`;
    }
    return `${level}%`;
  };

  return (
    <section
      id="skills"
      className={`relative py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-aot-steel' : 'bg-gray-50 screentone'
      }`}
      ref={ref}
    >
      {/* Background */}
      {theme === 'dark' && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            <motion.path
              d="M 200 50 L 150 100 L 120 150 L 130 200 L 100 250 L 120 300 L 150 280 L 200 320 L 250 280 L 280 300 L 300 250 L 270 200 L 280 150 L 250 100 Z"
              fill="var(--aot-green)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={`font-bold tracking-widest uppercase text-sm ${
              theme === 'dark' ? 'text-aot-green font-mono' : 'text-black'
            }`}>
              {theme === 'dark' ? '$ htop --skills' : 'Arsenal'}
            </span>
          </motion.div>
          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${
            theme === 'light' ? 'text-black' : ''
          }`}>
            <span className="gradient-text">Skills</span>{' '}
            <span className="text-aot-cream">& Weapons</span>
          </h2>
          <motion.div
            className={`w-24 h-1 mx-auto ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-transparent via-aot-green to-transparent'
                : 'bg-black'
            }`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? theme === 'dark'
                    ? 'bg-aot-green text-black font-mono shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                    : 'bg-black text-white font-bold'
                  : theme === 'dark'
                    ? 'bg-aot-green/10 border border-aot-green/30 text-aot-green hover:bg-aot-green/20 font-mono'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white font-bold'
              }`}
            >
              {theme === 'dark' ? `--${cat.toLowerCase()}` : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.06 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`rounded-xl p-5 group transition-all duration-300 ${
                theme === 'dark'
                  ? 'terminal-window'
                  : 'bg-white border-2 border-black hover:shadow-[4px_4px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
              }`}
              layout
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className={`font-bold group-hover:text-aot-green transition-colors ${
                  theme === 'dark' ? 'text-aot-cream font-mono text-sm' : 'text-black text-base'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-xs font-medium ${
                  theme === 'dark'
                    ? 'px-2 py-0.5 rounded bg-aot-green/10 text-aot-green border border-aot-green/30'
                    : 'font-bold text-black'
                }`}>
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              {theme === 'dark' ? (
                <div className="font-mono text-xs text-aot-green/80">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.06 }}
                  >
                    {getProgressBar(skill.level)}
                  </motion.span>
                </div>
              ) : (
                <div className="w-full h-4 bg-gray-100 border-2 border-black rounded-sm overflow-hidden relative">
                  <motion.div
                    className="h-full bg-black relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.06, ease: 'easeOut' }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-black mix-blend-difference text-white">
                    {skill.level}%
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full ${
            theme === 'dark'
              ? 'terminal-window'
              : 'border-3 border-black bg-white'
          }`}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-aot-green"
            >
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78" />
              </svg>
            </motion.div>
            <span className={
              theme === 'dark' ? 'text-aot-cream font-mono text-sm' : 'text-black font-bold'
            }>
              Continuously Learning & Leveling Up
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
