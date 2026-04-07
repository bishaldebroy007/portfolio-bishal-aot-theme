"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years of Experience", value: "1.5+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies", value: "12+" },
  { label: "Organizations", value: "3" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 bg-aot-dark-wall overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="var(--aot-green)"
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
            <span className="text-aot-green font-bold tracking-widest uppercase text-sm">
              Who Am I?
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">About</span>{" "}
            <span className="text-aot-cream">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-aot-green to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-aot-green/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-6 h-6 text-aot-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-aot-cream mb-2">
                    The Mission
                  </h3>
                  <p className="text-aot-smoke leading-relaxed">
                    Creative and detail-oriented Software Engineer specializing
                    in building accessible and optimized web apps using Python,
                    JavaScript, React, NextJS, React Native + expo, and Tailwind
                    CSS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-aot-green/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-6 h-6 text-aot-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-aot-cream mb-2">
                    The Experience
                  </h3>
                  <p className="text-aot-smoke leading-relaxed">
                    Experienced in agile teams and passionate about crafting
                    user-centric interfaces. Eager to contribute to fast-paced
                    development teams solving real-world problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-aot-green/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-6 h-6 text-aot-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-aot-cream mb-2">
                    Education
                  </h3>
                  <p className="text-aot-smoke leading-relaxed">
                    B.Sc. in Computer Science from BRAC University (2020-2024).
                    1st place in War Room Debate at Banglalink HQ (2023).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-black gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-aot-smoke font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="col-span-2 glass-card rounded-2xl p-6"
            >
              <h4 className="text-aot-cream font-bold mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/",
                    icon: "M21 8v13H3V8h18zM1 3h22v5H1V3zm7 14a2 2 0 110-4 2 2 0 010 4zm-3-9V6h4v2H5zm10 0c-1.657 0-3 1.343-3 3v6h4v-6c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v6h4v-6c0-1.657-1.343-3-3-3z",
                  },
                  {
                    name: "GitHub",
                    url: "https://github.com/bishaldebroy007",
                    icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z",
                  },
                  {
                    name: "Medium",
                    url: "https://medium.com/@bishal-deb-roy",
                    icon: "M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 7.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-4.5 3.25c0-.69-.56-1.25-1.25-1.25S5 10.56 5 11.25v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5z",
                  },
                  {
                    name: "Email",
                    url: "mailto:bishaldebroy2000@gmail.com",
                    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg bg-aot-green/10 border border-aot-green/30 flex items-center justify-center text-aot-green hover:bg-aot-green/20 transition-colors"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
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
