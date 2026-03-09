"use client";

import React from "react";
import { motion } from 'framer-motion';
import projects from '../app/data/projects.json';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-275 mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[13px] text-accent mb-2 tracking-wider">// 02. Selected Work</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-tx-primary tracking-tight">
            Some of the noteworthy projects I've built.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-bg-card border border-border-hi rounded-md hover:border-accent/30 hover:-translate-y-1 transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-[32px] font-mono text-accent opacity-20 group-hover:opacity-100 transition-opacity">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
                <div className="flex gap-4">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-tx-muted hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-tx-primary mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              
              <p className="text-[15px] text-tx-muted leading-[1.6] mb-8 grow">
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-border-hi flex flex-wrap gap-3">
                {project.language.split(',').map(lang => (
                  <span key={lang.trim()} className="font-mono text-[11px] text-tx-dark group-hover:text-tx-muted transition-colors">
                    {lang.trim()}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};