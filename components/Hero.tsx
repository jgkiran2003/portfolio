"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import personal from '../app/data/personal.json';

const ROLES = [
  "Software Engineer.",
  "Full-Stack Developer.",
  "Open Source Contributor.",
  "Problem Solver.",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState('');

  // Typewrite effect
  useEffect(() => {
    const fullRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentRole(fullRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentRole(fullRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="h-screen flex">
      <div className="max-w-275 flex items-center justify-center mx-auto lg:justify-between gap-16">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="font-mono text-xs text-tx-dark gap-2">
            <span className="text-accent">~/portfolio $</span> whoami
          </p>

          <h1 className="font-sans text-5xl lg:text-6xl font-bold tracking-tight leading-none text-tx-primary">
            {personal.name}
          </h1>

          <p className="font-mono text-[17px] font-normal text-tx-muted flex items-center gap-1.5">
            <span>{currentRole}</span>
            <span className="inline-block w-2.5 h-4.5 bg-accent animate-pulse align-middle" />
          </p>

          <p className="text-[15px] text-tx-muted leading-[1.8] max-w-150">
            Full-stack engineer with a focus on building fast, reliable, and
            maintainable systems - from database schema to UI interaction. I write clean code, 
            obsess over performance, and care about the engineering behind every product decision.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-tx-dark">
            <span className="flex items-center gap-2">
              <span className="w-1.75 h-1.75 rounded-full bg-accent hover:shadow-[0_0_8px_#00c98d]" />
              <span>Singapore, SG</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.75 h-1.75 rounded-full bg-accent hover:shadow-[0_0_8px_#00c98d]" />
              <span>Open to opportunities</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 gap-2 font-mono text-[13px] font-medium tracking-[0.05em] rounded-[3px] bg-accent text-[#051209] border border-accent hover:bg-[#00e8a2] hover:shadow-[0_0_24px_rgba(0,201,141,0.3)] transition-all">
              View my work ↓
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 gap-2 font-mono text-[13px] font-medium tracking-[0.05em] rounded-[3px] bg-transparent text-tx-muted border border-border-hi hover:text-tx-primary hover:border-[rgba(0,201,141,0.4)] transition-all">
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="relative hidden lg:block w-[320px] shrink-0"
        >
          <div className="aspect-3/4 rounded-[10px] overflow-hidden border border-border-hi bg-bg-card relative">
            <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-[#111813] to-[#0d120e] gap-3">
              <span className="font-mono text-[40px] font-semibold text-accent opacity-25">
                {personal.initials}
              </span>
            </div>
            <div className="absolute top-0 left-0 w-4.5 h-4.5 border-t-2 border-l-2 border-accent z-10" />
            <div className="absolute bottom-0 right-0 w-4.5 h-4.5 border-b-2 border-r-2 border-accent z-10" />
          </div>

          <div className="absolute -bottom-3.5 -left-3.5 font-mono text-[10px] px-3.5 py-2 bg-bg-card border border-border-hi rounded-md text-tx-muted flex items-center gap-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_#00c98d]" />
            <span>Available for new projects</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};