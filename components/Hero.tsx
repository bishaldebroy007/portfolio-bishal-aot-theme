'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import GlitchText from '@/components/GlitchText';

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
  char: string;
}

const codeChars = ['{', '}', '(', ')', '<', '>', '/', '=', ';', '=>', '()', '[]', '&&', '||', '!=', '++'];

export default function Hero() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [text, setText] = useState('');
  const fullText = 'Junior Software Engineer';
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
      }))
    );
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-white screentone'
      }`}
    >
      {/* Dark: Animated background grid */}
      {theme === 'dark' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 wall-texture" />
          {/* Steam particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`steam-${i}`}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-t from-aot-green/5 to-transparent"
              style={{ left: `${10 + i * 15}%`, bottom: '-10%' }}
              animate={{
                y: [-100, -800, -100],
                opacity: [0, 0.2, 0],
                scale: [0.5, 1.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      )}

      {/* Light: Speed lines background */}
      {theme === 'light' && (
        <div className="absolute inset-0 speed-lines" />
      )}

      {/* Floating code characters (dark) / manga marks (light) */}
      {mounted &&
        particles.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute font-mono text-xs pointer-events-none ${
              theme === 'dark' ? 'text-aot-green/30' : 'text-black/10 font-black text-sm'
            }`}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: [0, -40, 0],
              x: [0, (p.left % 20) - 10, 0],
              opacity: [0.1, 0.5, 0.1],
              rotate: theme === 'light' ? [0, 10, 0] : undefined,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          >
            {theme === 'dark' ? p.char : ['!', '!!', '?!', '...', '*'][i % 5]}
          </motion.div>
        ))}

      {/* Main Content */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Wings of Freedom Emblem */}
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="mx-auto mb-8 animate-float"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: 'spring', delay: 0.3 }}
        >
          <defs>
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? '#00ff41' : '#000'} />
              <stop offset="100%" stopColor={theme === 'dark' ? '#2dd4bf' : '#333'} />
            </linearGradient>
          </defs>
          <path
            d="M50 5 L15 25 L25 50 L15 75 L50 50 L85 75 L75 50 L85 25 Z"
            fill="none"
            stroke="url(#wingGrad)"
            strokeWidth={theme === 'dark' ? '2' : '3'}
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            fill={theme === 'dark' ? '#00ff41' : '#000'}
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="5" fill={theme === 'dark' ? '#000' : '#fff'} />
        </motion.svg>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <GlitchText
            text="BISHAL"
            as="h1"
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight ${
              theme === 'dark' ? 'text-aot-green text-glow' : 'text-black'
            }`}
          />
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mt-2 ${
            theme === 'dark' ? 'text-aot-cream' : 'text-black'
          }`}>
            DEB ROY
          </h1>
        </motion.div>

        {/* Animated line */}
        <motion.div
          className={`w-32 h-1 mx-auto my-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-transparent via-aot-green to-transparent shadow-[0_0_10px_rgba(0,255,65,0.5)]'
              : 'bg-black'
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className={`text-lg md:text-xl font-mono mb-8 h-8 ${
            theme === 'dark' ? 'text-aot-green' : 'text-black'
          }`}
        >
          {theme === 'dark' && (
            <span className="text-aot-smoke">{`> role: "`}</span>
          )}
          {theme === 'light' && (
            <span className="font-bold">&ldquo;</span>
          )}
          {text}
          {theme === 'dark' && <span className="text-aot-smoke">{`"`}</span>}
          {theme === 'light' && <span className="font-bold">&rdquo;</span>}
          <span
            className={`inline-block w-0.5 h-5 ml-1 align-middle animate-blink ${
              theme === 'dark' ? 'bg-aot-green' : 'bg-black'
            }`}
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className={`mb-12 max-w-2xl mx-auto ${
            theme === 'light' ? 'speech-bubble' : ''
          }`}
        >
          <p className={`text-base md:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-aot-smoke' : 'text-gray-600'
          }`}>
            Creative and detail-oriented Software Engineer specializing in building
            <span className="text-aot-green font-semibold"> accessible</span> and{' '}
            <span className="text-aot-green font-semibold">optimized</span> web
            apps. Fighting for user-centric experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className={`group relative px-8 py-4 font-bold rounded-lg overflow-hidden ${
              theme === 'dark'
                ? 'bg-aot-green/10 border border-aot-green text-aot-green hover:bg-aot-green hover:text-black font-mono'
                : 'bg-black text-white border-3 border-black hover:bg-white hover:text-black'
            } transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {theme === 'dark' && <span className="text-aot-smoke">[ENTER]</span>}
              View My Work
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className={`px-8 py-4 font-bold rounded-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'border border-aot-green/50 text-aot-green hover:border-aot-green hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] font-mono'
                : 'border-3 border-black text-black hover:bg-black hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' && <span className="text-aot-smoke">[TAB] </span>}
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
              theme === 'dark' ? 'border-aot-green/50' : 'border-black/30'
            }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1 h-3 rounded-full ${
                theme === 'dark' ? 'bg-aot-green' : 'bg-black'
              }`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
