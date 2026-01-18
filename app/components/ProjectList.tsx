'use client';

import { useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  updated_at: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card bg-gray-800 rounded-lg overflow-hidden">
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
      <p className="text-gray-400 mb-4">{project.description || 'No description available.'}</p>
      <div className="flex justify-between items-center">
        <a href={project.html_url} className="text-blue-400 hover:text-blue-500">View Project</a>
        <div className="text-sm text-gray-500">
          <p>{project.language}</p>
          <p>Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function ProjectList({ projects }: { projects: Project[] }) {
  const container = useRef(null);
  const [sortKey, setSortKey] = useState('updated_at');
  const [filterLang, setFilterLang] = useState('All');

  const languages = useMemo(() => {
    const langs = new Set(projects.map((p) => p.language).filter(Boolean));
    return ['All', ...Array.from(langs)];
  }, [projects]);

  const sortedAndFilteredProjects = useMemo(() => {
    return projects
      .filter((p) => filterLang === 'All' || p.language === filterLang)
      .sort((a, b) => {
        if (sortKey === 'name') {
          return a.name.localeCompare(b.name);
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  }, [projects, sortKey, filterLang]);

  useGSAP(() => {
    gsap.from('.project-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: container, dependencies: [sortedAndFilteredProjects] });

  return (
    <div>
      <div className="flex justify-center items-center my-8 gap-4">
        <div>
          <label htmlFor="sort-by" className="mr-2">Sort by:</label>
          <select
            id="sort-by"
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="updated_at">Last Updated</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div>
          <span className="mr-2">Filter by Language:</span>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilterLang(lang)}
              className={`p-2 rounded ${filterLang === lang ? 'bg-blue-600' : 'bg-gray-800'}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
      <div ref={container} className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAndFilteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
