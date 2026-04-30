'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RainDrop {
  left: string;
  duration: number;
  delay: number;
  char: string;
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'rain' | 'flash' | 'typing' | 'done'>('rain');
  const [mounted, setMounted] = useState(false);
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  const fullText = 'INITIALIZING BATTLE RECORD...';

  useEffect(() => {
    setMounted(true);
    const chars = '!?!*...';
    setRainDrops(
      Array.from({ length: 30 }, (_, i) => ({
        left: `${(i / 30) * 100}%`,
        duration: 0.8 + Math.random() * 0.5,
        delay: Math.random() * 0.3,
        char: chars.charAt(Math.floor(Math.random() * chars.length)),
      }))
    );

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setPhase('flash'), 800));
    timers.push(setTimeout(() => setPhase('typing'), 1200));

    let i = 0;
    timers.push(setTimeout(() => {
      const typeTimer = setInterval(() => {
        if (i <= fullText.length) {
          setText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typeTimer);
          setTimeout(() => {
            setPhase('done');
            setTimeout(() => setLoading(false), 400);
          }, 300);
        }
      }, 50);
      timers.push(typeTimer as unknown as NodeJS.Timeout);
    }, 1200));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setLoading(false)}
        >
          {/* Flash effect */}
          <AnimatePresence>
            {phase === 'flash' && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
                }}
              />
            )}
          </AnimatePresence>

          {/* Wings of Freedom silhouette */}
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === 'flash' || phase === 'typing' || phase === 'done'
                ? { scale: [0, 1.5, 1], opacity: [0, 0.5, 0.2] }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <path
              d="M50 5 L15 25 L25 50 L15 75 L50 50 L85 75 L75 50 L85 25 Z"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              opacity="0.3"
            />
          </motion.svg>

          {/* Typing text */}
          {(phase === 'typing' || phase === 'done') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-black text-lg md:text-xl relative z-10 text-black uppercase tracking-widest"
            >
              {text}
              <span
                className="inline-block w-2 h-5 ml-1 align-middle bg-black animate-blink"
              />
            </motion.div>
          )}

          {/* Rain phase - simple dots */}
          {phase === 'rain' && mounted && (
            <div className="absolute inset-0 overflow-hidden">
              {rainDrops.map((drop, i) => (
                <motion.div
                  key={i}
                  className="absolute font-black text-xs text-black opacity-30"
                  style={{
                    left: drop.left,
                  }}
                  initial={{ y: -20 }}
                  animate={{ y: '100vh' }}
                  transition={{
                    duration: drop.duration,
                    delay: drop.delay,
                    ease: 'linear',
                  }}
                >
                  {drop.char}
                </motion.div>
              ))}
            </div>
          )}

          {/* Skip hint */}
          <motion.p
            className="absolute bottom-8 text-xs font-bold text-gray-300 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            click to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
