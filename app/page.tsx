'use client';

import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import projects from './data/projects.json';
import personal from './data/personal.json';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import { ProjectBentoGrid } from '../components/ProjectBentoGrid';
import { Navbar } from '../components/Navbar';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

export default function Home() {
  const container = useRef(null);

  return (
    <div ref={container} className="bg-gray-900 text-white min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="container h-screen mx-auto px-8 flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <h2 className="text-7xl sm:text-8xl pb-4 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              <Typewriter texts={["Software Engineer", "Systems Architect", "AI Developer"]} />
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 p-4 max-w-2xl mx-auto leading-relaxed">
              {personal.bio}
            </p>
            <div className="flex flex-col pt-4 sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="bg-white text-black font-bold py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
                View My Work
              </a>
              <a href="#contact" className="bg-zinc-900 text-white border border-white/10 font-bold py-4 px-10 rounded-full hover:bg-zinc-800 transition-all">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4">
          <div className="mb-14">
            <h3 className="text-4xl md:text-6xl font-bold mb-4">Selected Work</h3>
            <p className="text-zinc-400 text-lg md:text-xl">Architecting high-performance systems and AI-driven solutions.</p>
          </div>
          <div className="project-grid">
            <ProjectBentoGrid projects={projects as Project[]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-32 md:py-48 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-5xl md:text-8xl font-bold mb-10">Let's build something exceptional.</h3>
            <p className="text-xl md:text-2xl text-zinc-400 mb-14">
              Open to ambitious collaborations in low-level systems and AI infrastructure.
            </p>
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a href={`mailto:${personal.email}`} className="p-5 md:p-6 bg-zinc-900 border border-white/5 rounded-3xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-2 transition-all shadow-2xl" aria-label="Email">
                <Mail size={32} />
              </a>
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-5 md:p-6 bg-zinc-900 border border-white/5 rounded-3xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-2 transition-all shadow-2xl" aria-label="GitHub">
                <Github size={32} />
              </a>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 md:p-6 bg-zinc-900 border border-white/5 rounded-3xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-2 transition-all shadow-2xl" aria-label="LinkedIn">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="container mx-auto px-4 py-16 text-center border-t border-white/5">
        <p className="text-zinc-500 font-medium tracking-wide">&copy; 2026 {personal.name} • Built with Next.js 16 & Framer Motion</p>
      </footer>
    </div>
  );
}
