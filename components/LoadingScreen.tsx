'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'rain' | 'flash' | 'typing' | 'done'>('rain');
  const { theme } = useTheme();

  const fullText = '> initializing portfolio...';

  useEffect(() => {
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
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          style={{
            background: theme === 'dark' ? '#000' : '#fff',
          }}
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
                  background: theme === 'dark'
                    ? 'radial-gradient(circle, rgba(0,255,65,0.8) 0%, rgba(0,255,65,0) 70%)'
                    : 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
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
              stroke={theme === 'dark' ? '#00ff41' : '#000'}
              strokeWidth="2"
              opacity="0.3"
            />
          </motion.svg>

          {/* Typing text */}
          {(phase === 'typing' || phase === 'done') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-lg md:text-xl relative z-10"
              style={{ color: theme === 'dark' ? '#00ff41' : '#000' }}
            >
              {text}
              <span
                className="inline-block w-2 h-5 ml-1 align-middle"
                style={{
                  background: theme === 'dark' ? '#00ff41' : '#000',
                  animation: 'blink-cursor 1s step-end infinite',
                }}
              />
            </motion.div>
          )}

          {/* Rain phase - simple dots */}
          {phase === 'rain' && (
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute font-mono text-xs"
                  style={{
                    left: `${(i / 30) * 100}%`,
                    color: theme === 'dark' ? '#00ff41' : '#000',
                    opacity: 0.3,
                  }}
                  initial={{ y: -20 }}
                  animate={{ y: '100vh' }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.5,
                    delay: Math.random() * 0.3,
                    ease: 'linear',
                  }}
                >
                  {'{}();<>=/'.charAt(Math.floor(Math.random() * 9))}
                </motion.div>
              ))}
            </div>
          )}

          {/* Skip hint */}
          <motion.p
            className="absolute bottom-8 text-xs font-mono"
            style={{ color: theme === 'dark' ? '#333' : '#ccc' }}
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
