// src/components/SpotlightCard.tsx

import React, { useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

// 1. Define the component's props interface
interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, 'onMouseMove'> {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard = ({ 
  children, 
  className = '', 
  ...props 
}: SpotlightCardProps) => {
  
  // 2. Add type for the state
  const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  
  // 3. Add type for the ref
  const cardRef = useRef<HTMLDivElement>(null);

  // 4. Add type for the mouse event
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl border border-[#A2DC36]/30 bg-[#0c0c0c] text-[#F7DBA7] overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }as React.CSSProperties}
      {...props} 
    >
      {/* The Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(162, 220, 54, 0.2), transparent 80%)`
        }}
      />
      
      {/* Your actual content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6">
        {children}
      </div>
    </motion.div>
  );
};