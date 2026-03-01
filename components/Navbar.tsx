'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import personal from '../app/data/personal.json';

export const Navbar = () => {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(24, 24, 27, 0)', 'rgba(24, 24, 27, 0.5)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  const paddingY = useTransform(
    scrollY,
    [0, 100],
    ['24px', '8px']
  );

  const maxWidth = useTransform(
    scrollY,
    [0, 100],
    ['100%', '90%']
  );

  const borderWidth = useTransform(
    scrollY,
    [0, 100],
    ['0px', '1px']
  );

  // Name animation
  const nameOpacity = useTransform(
    scrollY,
    [0, 50],
    [1, 0]
  );
  const nameWidth = useTransform(
    scrollY,
    [0, 50],
    ['auto', '0px']
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          width: maxWidth,
          borderBottomWidth: borderWidth,
        }}
        className="mt-4 px-8 rounded-full border-white/10 flex items-center justify-between pointer-events-auto"
      >
        <div className="flex items-center gap-0">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold tracking-tight text-white"
          >
            {personal.name}
          </motion.span>
        </div>

        <nav className="flex items-center space-x-8">
          <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </a>
        </nav>
      </motion.header>
    </div>
  );
};
