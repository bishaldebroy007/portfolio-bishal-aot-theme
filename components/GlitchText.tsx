'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
}

export default function GlitchText({ text, as: Tag = 'h2', className = '' }: GlitchTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`inline-block font-black ${className}`}
      style={{
        WebkitTextStroke: '1px #000',
        paintOrder: 'stroke fill',
      }}
    >
      {/* Tag is used for semantics but motion.span for animation */}
      <Tag className="inline">{text}</Tag>
    </motion.span>
  );
}
