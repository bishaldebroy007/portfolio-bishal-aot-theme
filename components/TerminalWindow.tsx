'use client';

import { type ReactNode } from 'react';
import { useTheme } from '@/components/ThemeProvider';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = 'terminal', children, className = '' }: TerminalWindowProps) {
  const { theme } = useTheme();

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <span className="terminal-title">
          {theme === 'dark' ? `bishal@dev:~$ ${title}` : title}
        </span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
