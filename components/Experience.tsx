'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import TerminalWindow from '@/components/TerminalWindow';
import { experiences, education } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [commitHashes, setCommitHashes] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    setCommitHashes(experiences.map(() => Math.random().toString(36).substring(2, 9)));
  }, []);

  const typeBadge = (type: string) => {
    if (theme === 'dark') {
      const label = type.toUpperCase();
      const color = type === 'work' ? 'text-aot-green' : type === 'education' ? 'text-aot-teal' : 'text-aot-red';
      return (
        <span className={`font-mono text-xs ${color}`}>[{label}]</span>
      );
    }
    const styles = type === 'work'
      ? 'bg-white border-2 border-black text-black'
      : type === 'education'
        ? 'bg-white border-2 border-aot-green text-aot-green'
        : 'bg-white border-2 border-aot-red text-aot-red';
    return (
      <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${styles}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  return (
    <section
      id="experience"
      className={`relative py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-aot-dark-wall' : 'bg-white'
      }`}
      ref={ref}
    >
      {theme === 'dark' && <div className="absolute inset-0 wall-texture opacity-30" />}

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
              {theme === 'dark' ? '$ git log --oneline' : 'Battle Record'}
            </span>
          </motion.div>
          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${
            theme === 'light' ? 'text-black' : ''
          }`}>
            <span className="gradient-text">Experience</span>{' '}
            <span className="text-aot-cream">& Education</span>
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

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <TerminalWindow title="cat education.json">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'dark' ? 'bg-aot-green/20' : 'border-2 border-black'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-aot-green' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-aot-cream' : 'text-black'}`}>
                      {education.degree}
                    </h3>
                    <p className="text-aot-green font-medium">{education.institution}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${theme === 'dark' ? 'text-aot-green font-mono' : 'text-black'}`}>
                  {education.period}
                </div>
                <div className="text-sm text-aot-smoke">{education.location}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                theme === 'dark' ? 'text-aot-cream font-mono' : 'text-black'
              }`}>
                {theme === 'dark' ? '// Relevant Coursework' : 'Relevant Coursework'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className={`px-3 py-1 rounded-full text-xs ${
                      theme === 'dark'
                        ? 'bg-aot-green/10 border border-aot-green/30 text-aot-green font-mono'
                        : 'border-2 border-black text-black font-bold'
                    }`}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className={`p-4 rounded-r-lg ${
                theme === 'dark'
                  ? 'bg-aot-green/5 border-l-4 border-aot-green'
                  : 'bg-gray-50 border-l-4 border-black'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <p className="text-aot-smoke text-sm">
                <span className={`font-semibold ${theme === 'dark' ? 'text-aot-green' : 'text-black'}`}>
                  Recognition:{' '}
                </span>
                {education.recognition}
              </p>
            </motion.div>
          </TerminalWindow>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-aot-green via-aot-green-dim to-transparent'
                : 'bg-black'
            }`}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                    theme === 'dark'
                      ? 'bg-aot-green border-4 border-aot-dark-wall'
                      : 'bg-black border-4 border-white'
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow: theme === 'dark'
                      ? '0 0 20px rgba(0, 255, 65, 0.8)'
                      : '0 0 0 3px #000',
                  }}
                />

                {/* Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-12 md:pl-0`}>
                  <motion.div
                    className={`rounded-xl p-6 group transition-all duration-300 ${
                      theme === 'dark'
                        ? 'terminal-window'
                        : 'bg-white border-2 border-black hover:shadow-[4px_4px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {theme === 'dark' && (
                      <div className="font-mono text-xs text-aot-smoke mb-3">
                        <span className="text-aot-green">commit</span> {mounted ? commitHashes[index] : '.......'}
                        <span className="text-aot-smoke ml-2">({exp.period})</span>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 group-hover:text-aot-green transition-colors ${
                          theme === 'dark' ? 'text-aot-cream' : 'text-black'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className="text-aot-green font-medium text-sm">{exp.company}</p>
                      </div>
                      {theme === 'light' && (
                        <div className="text-right text-sm">
                          <div className="text-black font-bold whitespace-nowrap">{exp.period}</div>
                          <div className="text-aot-smoke">{exp.location}</div>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${
                          theme === 'dark' ? 'text-aot-smoke' : 'text-gray-600'
                        }`}>
                          <span className={theme === 'dark' ? 'text-aot-green font-mono' : 'text-black font-bold'}>
                            {theme === 'dark' ? '>' : '\u25B9'}
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {typeBadge(exp.type)}
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
