'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import TerminalWindow from '@/components/TerminalWindow';
import { stats, aboutSocialLinks } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-aot-dark-wall' : 'bg-white'
      }`}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke={theme === 'dark' ? 'var(--aot-green)' : '#000'}
              strokeWidth="0.1"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
              {theme === 'dark' ? '// Who Am I?' : 'Who Am I?'}
            </span>
          </motion.div>
          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${
            theme === 'light' ? 'text-black' : ''
          }`}>
            <span className="gradient-text">About</span>{' '}
            <span className="text-aot-cream">Me</span>
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

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TerminalWindow title="cat about.md">
              <div className="space-y-4 text-sm">
                <div>
                  <span className={theme === 'dark' ? 'text-aot-red' : 'font-black text-lg'}>
                    # The Mission
                  </span>
                  <p className={`mt-2 leading-relaxed ${
                    theme === 'dark' ? 'text-aot-smoke' : 'text-gray-600'
                  }`}>
                    Creative and detail-oriented Software Engineer specializing
                    in building accessible and optimized web apps using Python,
                    JavaScript, React, NextJS, React Native + expo, and Tailwind CSS.
                  </p>
                </div>

                <div>
                  <span className={theme === 'dark' ? 'text-aot-red' : 'font-black text-lg'}>
                    # The Experience
                  </span>
                  <p className={`mt-2 leading-relaxed ${
                    theme === 'dark' ? 'text-aot-smoke' : 'text-gray-600'
                  }`}>
                    Experienced in agile teams and passionate about crafting
                    user-centric interfaces. Eager to contribute to fast-paced
                    development teams solving real-world problems.
                  </p>
                </div>

                <div>
                  <span className={theme === 'dark' ? 'text-aot-red' : 'font-black text-lg'}>
                    # Education
                  </span>
                  <p className={`mt-2 leading-relaxed ${
                    theme === 'dark' ? 'text-aot-smoke' : 'text-gray-600'
                  }`}>
                    B.Sc. in Computer Science from BRAC University (2020-2024).
                    1st place in War Room Debate at Banglalink HQ (2023).
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Right - Stats + Social */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Stats as JSON */}
            <TerminalWindow title="cat stats.json">
              <div className="text-sm font-mono">
                <span className={theme === 'dark' ? 'text-aot-smoke' : 'text-gray-400'}>{'{'}</span>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="ml-4 my-2"
                  >
                    <span className="text-aot-green">&quot;{stat.label.toLowerCase().replace(/ /g, '_')}&quot;</span>
                    <span className={theme === 'dark' ? 'text-aot-smoke' : 'text-gray-400'}>: </span>
                    <span className={theme === 'dark' ? 'text-aot-teal' : 'text-aot-red font-bold'}>
                      &quot;{stat.value}&quot;
                    </span>
                    {index < stats.length - 1 && (
                      <span className={theme === 'dark' ? 'text-aot-smoke' : 'text-gray-400'}>,</span>
                    )}
                  </motion.div>
                ))}
                <span className={theme === 'dark' ? 'text-aot-smoke' : 'text-gray-400'}>{'}'}</span>
              </div>
            </TerminalWindow>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className={`p-6 rounded-xl ${
                theme === 'dark'
                  ? 'terminal-window'
                  : 'border-3 border-black bg-white'
              }`}
            >
              <h4 className={`font-bold mb-4 ${
                theme === 'dark' ? 'text-aot-cream font-mono text-sm' : 'text-black text-lg'
              }`}>
                {theme === 'dark' ? '# Connect' : 'Connect With Me'}
              </h4>
              <div className="flex flex-wrap gap-3">
                {aboutSocialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + i * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-aot-green/10 border border-aot-green/30 text-aot-green hover:bg-aot-green/20 hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] font-mono'
                        : 'border-2 border-black text-black hover:bg-black hover:text-white font-bold'
                    }`}
                  >
                    {theme === 'dark' ? `> ${social.name.toLowerCase()}` : social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
