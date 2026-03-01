import { Github, Code2, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Ensure we have languages even if the string is messy
  const languages = project.language ? project.language.split(',').map(l => l.trim()) : [];

  return (
    <div className="project-card group relative flex flex-col h-full bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <Code2 size={24} className="text-blue-400" />
          </div>
          <div className="flex gap-3">
            <a 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/15 transition-all hover:scale-110 active:scale-95"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={20} className="text-zinc-400 group-hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="flex-grow">
          <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
            {project.name}
          </h4>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {project.description || 'Systems architecture and performance-critical development.'}
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
          {languages.map((lang, i) => (
            <span 
              key={`${project.name}-${lang}-${i}`} 
              className="px-3 py-1 bg-zinc-800/50 border border-white/5 rounded-lg text-[10px] md:text-xs font-semibold text-zinc-300 backdrop-blur-md group-hover:border-blue-500/30 transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export const ProjectBentoGrid = ({ projects }: { projects: Project[] }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {projects.map((project, index) => (
        <ProjectCard 
          key={`${project.name}-${index}`} 
          project={project} 
        />
      ))}
    </div>
  );
};
