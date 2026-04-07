'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'React JS', level: 90, category: 'Frontend' },
  { name: 'NEXT JS', level: 88, category: 'Frontend' },
  { name: 'React Native', level: 80, category: 'Mobile' },
  { name: 'React Native Expo', level: 78, category: 'Mobile' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'SASS', level: 85, category: 'Styling' },
  { name: 'Python', level: 82, category: 'Backend' },
  { name: 'GraphQL', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Styling', 'Database', 'Tools'];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 bg-aot-steel overflow-hidden" ref={ref}>
      {/* Background Titan Silhouette */}
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
            <span className="text-aot-green font-bold tracking-widest uppercase text-sm">
              Arsenal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Skills</span>{' '}
            <span className="text-aot-cream">& Weapons</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-aot-green to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-aot-smoke mt-6 max-w-2xl mx-auto">
            Mastering the tools of modern development to fight for exceptional user experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-aot-cream group-hover:text-aot-green transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-aot-green">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-3 bg-aot-dark-wall rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-aot-green-dim to-aot-green rounded-full relative"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.08, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
              
              <div className="mt-3 text-xs text-aot-smoke uppercase tracking-wider">
                {skill.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ODM Gear Animation */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="inline-flex items-center gap-8 glass-card rounded-full px-8 py-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-aot-green"
            >
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78" />
              </svg>
            </motion.div>
            <span className="text-aot-cream font-medium">
              Continuously Learning & Leveling Up
            </span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-aot-green"
            >
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
