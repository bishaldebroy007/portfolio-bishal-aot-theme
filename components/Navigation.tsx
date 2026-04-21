'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { navLinks } from '@/lib/data';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-black/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,255,65,0.1)]'
              : 'bg-white/95 backdrop-blur-xl shadow-lg border-b-3 border-black'
            : 'bg-transparent'
        }`}
      >
        {/* Scanline overlay on scrolled dark mode */}
        {theme === 'dark' && scrolled && (
          <div className="absolute inset-0 scanline pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? (
              <span className="font-mono text-aot-green text-sm">
                <span className="text-aot-smoke">bishal@portfolio</span>
                <span className="text-aot-green">:</span>
                <span className="text-aot-teal">~</span>
                <span className="text-aot-green">$</span>
                <span className="animate-blink ml-1">▊</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 100 100"
                  className="transition-all duration-300"
                >
                  <path
                    d="M50 10 L20 30 L30 50 L20 70 L50 50 L80 70 L70 50 L80 30 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="4"
                  />
                  <circle cx="50" cy="50" r="8" fill="#000" />
                </svg>
                <span className="font-black text-lg tracking-tight text-black">
                  BISHAL<span className="text-aot-red">.</span>DEV
                </span>
              </span>
            )}
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative px-3 py-2 rounded text-sm transition-all duration-300 ${
                    theme === 'dark'
                      ? `font-mono ${
                          isActive
                            ? 'text-aot-green text-glow'
                            : 'text-aot-smoke hover:text-aot-green'
                        }`
                      : `font-bold uppercase tracking-wider ${
                          isActive
                            ? 'text-black'
                            : 'text-gray-500 hover:text-black'
                        }`
                  }`}
                >
                  {theme === 'dark' ? link.command : link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        theme === 'dark'
                          ? 'bg-aot-green shadow-[0_0_10px_rgba(0,255,65,0.8)]'
                          : 'bg-black'
                      }`}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}

            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className={`w-6 h-0.5 transition-all duration-300 ${
                  theme === 'dark' ? 'bg-aot-green' : 'bg-black'
                }`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 transition-all duration-300 ${
                  theme === 'dark' ? 'bg-aot-green' : 'bg-black'
                }`}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className={`w-6 h-0.5 transition-all duration-300 ${
                  theme === 'dark' ? 'bg-aot-green' : 'bg-black'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden ${
              theme === 'dark'
                ? 'bg-black/95 backdrop-blur-xl'
                : 'bg-white/95 backdrop-blur-xl'
            }`}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.9 }}
                className={`text-xl tracking-widest uppercase ${
                  theme === 'dark'
                    ? `font-mono ${
                        activeSection === link.href.substring(1)
                          ? 'text-aot-green text-glow'
                          : 'text-aot-cream'
                      }`
                    : `font-black ${
                        activeSection === link.href.substring(1)
                          ? 'text-black'
                          : 'text-gray-400'
                      }`
                }`}
              >
                {theme === 'dark' ? link.command : link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
