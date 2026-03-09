"use client";

import React from "react";
import { motion } from 'framer-motion';
import personal from '../app/data/personal.json';

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-275 mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[13px] text-accent mb-2 tracking-wider">// 01. About me</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-tx-muted tracking-tight">
            Curious about me? Here you have it.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[17px] text-tx-muted leading-[1.8]">
              {personal.bio} I focus on building fast, reliable, and maintainable systems - from database schema to UI interaction. I write clean code, obsess over performance, and care about the engineering behind every product decision.
            </p>
            <p className="text-[17px] text-tx-muted leading-[1.8]">
              Currently based in Singapore, I'm open to new opportunities where I can apply my skills in full-stack development and low-level systems engineering.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
               <div className="flex items-center gap-2 font-mono text-[12px] text-tx-dark">
                  <span className="text-accent">▸</span> Singapore, SG
               </div>
               <div className="flex items-center gap-2 font-mono text-[12px] text-tx-dark">
                  <span className="text-accent">▸</span> Open to opportunities
               </div>
            </div>

            <div className="mt-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 font-mono text-[13px] font-medium tracking-[0.05em] rounded-[3px] border border-border-hi text-tx-muted hover:text-tx-primary hover:border-[rgba(0,201,141,0.4)] transition-all">
                Say hello →
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="p-6 bg-bg-card border border-border-hi rounded-md hover:border-accent/30 transition-all group">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent mb-4">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind', 'TypeScript'].map(tag => (
                  <span key={tag} className="px-2 py-1 text-[11px] font-mono bg-[#1a1f1d] border border-border-hi text-tx-muted rounded-[3px] group-hover:border-accent/20 transition-colors">{tag}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-bg-card border border-border-hi rounded-md hover:border-accent/30 transition-all group">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent mb-4">Backend</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'FastAPI', 'C++', 'SQLite'].map(tag => (
                  <span key={tag} className="px-2 py-1 text-[11px] font-mono bg-[#1a1f1d] border border-border-hi text-tx-muted rounded-[3px] group-hover:border-accent/20 transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};