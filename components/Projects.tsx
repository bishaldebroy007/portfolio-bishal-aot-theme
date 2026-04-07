'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

const projects = [
  {
    title: 'Penta Solutions',
    description:
      'Collaborating with frontend and backend teams to build a fully functional company website using modern web technologies.',
    tech: ['React JS', 'NEXT JS', 'Tailwind CSS', 'Shadcn UI', 'Payload CMS'],
    period: '06/2025 – Present',
    status: 'In Progress',
    icon: '🏢',
    color: 'from-aot-green to-aot-green-dim',
  },
  {
    title: 'Gemini-like AI Chatbot',
    description:
      'Built a Gemini-like chatbot using the Gemini API. An AI-powered conversational interface with modern UI.',
    tech: ['React JS', 'Tailwind CSS', 'Gemini API'],
    period: '03/2025 – Present',
    status: 'In Development',
    icon: '🤖',
    color: 'from-aot-cream to-aot-green',
    live: '#',
  },
  {
    title: 'SmartSpend',
    description:
      'A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.',
    tech: ['React JS', 'Tailwind CSS', 'Daisy UI'],
    period: '03/2025 – 05/2025',
    status: 'Completed',
    icon: '💰',
    color: 'from-aot-green-dim to-aot-cream',
    live: '#',
  },
];

const certificates = [
  {
    title: 'Basics of Web Development',
    description: 'HTML, CSS, Bootstrap & JavaScript',
    issuer: "Mentors' Learning",
    date: 'March 2025',
  },
  {
    title: 'Intermediate Git',
    description: 'Git & GitHub',
    issuer: 'DataCamp',
    date: 'March 2025',
  },
  {
    title: 'Introduction to Python',
    description: 'Python Programming Language & NumPy',
    issuer: 'DataCamp',
    date: 'March 2025',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section id="projects" className="relative py-32 bg-aot-steel overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {mounted &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-aot-green/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay,
              }}
            />
          ))}
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
              Missions Completed
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Projects</span>{' '}
            <span className="text-aot-cream">& Certificates</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-aot-green to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-aot-green/20 text-aot-green border border-aot-green/40'
                        : project.status === 'In Progress'
                        ? 'bg-aot-cream/20 text-aot-cream border border-aot-cream/40'
                        : 'bg-aot-red/20 text-aot-red border border-aot-red/40'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-aot-cream mb-3 group-hover:text-aot-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-aot-smoke mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
                      className="px-2 py-1 bg-aot-dark-wall/50 rounded text-xs text-aot-green border border-aot-green/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Period */}
                <div className="text-xs text-aot-smoke mb-4">{project.period}</div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-aot-green/10 border border-aot-green/30 rounded-lg text-aot-green text-sm font-medium hover:bg-aot-green/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo →
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-black text-center mb-12">
            <span className="gradient-text">Certificates</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 text-center group"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-aot-green/20 to-aot-cream/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-aot-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </motion.div>

                <h4 className="text-lg font-bold text-aot-cream mb-2 group-hover:text-aot-green transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-aot-smoke mb-2">{cert.description}</p>
                <div className="text-xs text-aot-cape">
                  {cert.issuer} • {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 glass-card rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-aot-red/20 to-transparent rounded-bl-full" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-aot-red/20 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-6 h-6 text-aot-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-aot-cream">Publication</h3>
                <p className="text-sm text-aot-smoke">COMPASS '24: ACM SIGCAS/SIGCHI Conference</p>
              </div>
            </div>

            <p className="text-aot-smoke leading-relaxed mb-4">
              <span className="text-aot-green font-semibold">"Bridging the Gap: Exploring the Factors Influencing Women's Adoption of Mobile Financial Services (MFS) in Rural Areas of Bangladesh"</span>
            </p>
            <p className="text-sm text-aot-cape mb-4">
              Authors: Bishal Deb Roy, Sumaia Arefin Ritu, Anika Priodorshinee Mrittika, and Jannatun Noor
            </p>

            <motion.a
              href="https://dl.acm.org/doi/10.1145/3663670.3663678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-aot-red/10 border border-aot-red/30 rounded-lg text-aot-red text-sm font-medium hover:bg-aot-red/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Paper
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
