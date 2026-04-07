"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [text, setText] = useState("");
  const fullText = "Junior Software Engineer";
  const [mounted, setMounted] = useState(false);
  const [embers, setEmbers] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    setEmbers(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      })),
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aot-dark-wall wall-texture"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Steam Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            className="absolute w-32 h-32 rounded-full bg-linear-to-t from-aot-green/5 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "-10%",
              animationDelay: `${i * 0.5}s`,
            }}
            animate={{
              y: [-100, -1000, -100],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Wall Cracks */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M 100 200 L 150 250 L 140 300 L 180 350 L 170 400"
            fill="none"
            stroke="var(--aot-green)"
            strokeWidth="1"
            className="animate-wall-crack"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M 80% 100 L 75% 200 L 78% 300 L 73% 400"
            fill="none"
            stroke="var(--aot-red)"
            strokeWidth="1"
            className="animate-wall-crack"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </svg>

        {/* Floating Embers */}
        {mounted &&
          embers.map((ember, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute w-1 h-1 bg-aot-green rounded-full"
              style={{
                left: `${ember.left}%`,
                top: `${ember.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, (ember.left % 20) - 10, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: ember.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: ember.delay,
              }}
            />
          ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Wings of Freedom Emblem */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="mx-auto mb-8 animate-float"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
        >
          <defs>
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--aot-green)" />
              <stop offset="100%" stopColor="var(--aot-cream)" />
            </linearGradient>
          </defs>
          <path
            d="M50 5 L15 25 L25 50 L15 75 L50 50 L85 75 L75 50 L85 25 Z"
            fill="none"
            stroke="url(#wingGrad)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="var(--aot-green)"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="5" fill="var(--aot-dark-wall)" />
        </motion.svg>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="gradient-text">BISHAL</span>
          <br />
          <span className="text-aot-cream">DEB ROY</span>
        </motion.h1>

        {/* Animated Slash Line */}
        <motion.div
          className="w-32 h-1 bg-linear-to-rr from-transparent via-aot-green to-transparent mx-auto my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xl md:text-2xl text-aot-smoke font-medium tracking-wide mb-8 h-8"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-aot-green ml-1 align-middle"
          />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-base md:text-lg text-aot-cape max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Creative and detail-oriented Software Engineer specializing in
          building
          <span className="text-aot-green font-semibold">
            {" "}
            accessible
          </span> and{" "}
          <span className="text-aot-green font-semibold">optimized</span> web
          apps. Fighting for user-centric experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-aot-green text-aot-dark-wall font-bold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-aot-green-dim to-aot-green"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-aot-green/50 text-aot-green font-bold rounded-lg hover:border-aot-green hover:bg-aot-green/10 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(45, 212, 191, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
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
            className="w-6 h-10 border-2 border-aot-green/50 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-aot-green rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Parallax Wall Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-aot-steel to-transparent opacity-50"
      />
    </section>
  );
}
