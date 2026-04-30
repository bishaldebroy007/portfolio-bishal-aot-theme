'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalWindow from '@/components/TerminalWindow';
import { experiences, education } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const typeBadge = (type: string) => {
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
      className="relative py-32 overflow-hidden bg-white"
      ref={ref}
    >
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
            <span className="font-bold tracking-widest uppercase text-sm text-black">
              Battle Record
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
            <span className="gradient-text">Experience</span>{' '}
            <span className="text-aot-cream">& Education</span>
          </h2>
          <motion.div
            className="w-24 h-1 mx-auto bg-black"
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-black"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {education.degree}
                    </h3>
                    <p className="text-aot-green font-medium">{education.institution}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-black">
                  {education.period}
                </div>
                <div className="text-sm text-aot-smoke">{education.location}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-black">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1 rounded-full text-xs border-2 border-black text-black font-bold"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="p-4 rounded-r-lg bg-gray-50 border-l-4 border-black"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <p className="text-aot-smoke text-sm">
                <span className="font-semibold text-black">
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
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-black"
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
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10 bg-black border-4 border-white"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow: '0 0 0 3px #000',
                  }}
                />

                {/* Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-12 md:pl-0`}>
                  <motion.div
                    className="rounded-xl p-6 group transition-all duration-300 bg-white border-2 border-black hover:shadow-[4px_4px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-aot-green transition-colors text-black">
                          {exp.title}
                        </h3>
                        <p className="text-aot-green font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-black font-bold whitespace-nowrap">{exp.period}</div>
                        <div className="text-aot-smoke">{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-black font-bold">
                            {'\u25B9'}
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
