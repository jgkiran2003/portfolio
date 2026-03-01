'use client';

import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projects from './data/projects.json';
import personal from './data/personal.json';
import { ProjectBentoGrid } from '../components/ProjectBentoGrid';
import { TechMarquee } from '../components/TechMarquee';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Animation for project cards
    gsap.from('.project-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{personal.name}</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 text-center py-24 md:py-40">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            {personal.role}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {personal.bio}
          </p>
          <a href="#contact" className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
            Get in Touch
          </a>
        </section>

        {/* Tech Marquee Section */}
        <div className="py-12 md:py-20 overflow-hidden">
          <h3 className="text-center text-zinc-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-8">Selected Tech Stack</h3>
          <TechMarquee />
        </div>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-20 md:py-28">
          <div className="mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h3>
            <p className="text-zinc-400 text-base md:text-lg">Engineering solutions for complexity, scale, and performance.</p>
          </div>
          <div className="project-grid">
            <ProjectBentoGrid projects={projects as Project[]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-28 md:py-40 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-bold mb-6">Let's build something exceptional.</h3>
            <p className="text-lg md:text-xl text-zinc-400 mb-10">
              Open to ambitious collaborations in low-level systems and AI infrastructure.
            </p>
            <div className="flex justify-center space-x-6">
              <a href={`mailto:${personal.email}`} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-1 transition-all" aria-label="Email">
                <Mail size={28} />
              </a>
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-1 transition-all" aria-label="GitHub">
                <Github size={28} />
              </a>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-blue-500/30 hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="container mx-auto px-4 py-12 text-center border-t border-white/5">
        <p className="text-zinc-500 text-sm">&copy; 2026 {personal.name} • Built with Next.js 16 & GSAP</p>
      </footer>
    </div>
  );
}
