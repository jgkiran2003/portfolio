import { Github, Code2 } from 'lucide-react';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const languages = project.language ? project.language.split(',').map(l => l.trim()) : [];

  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/50 hover:shadow-[0_0_40px_-10px]">
      <div className="z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-2.5 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <Code2 size={24} className="text-blue-400" />
          </div>
          <div className="flex">
            <a 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/15 transition-all hover:scale-110 active:scale-95"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={25} className="text-zinc-400" />
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
        
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
          {languages.map((lang, i) => (
            <span 
              key={`${project.name}-${lang}-${i}`} 
              className="p-2 bg-zinc-800/50 border border-white/5 rounded-lg text-[10px] md:text-xs font-semibold text-zinc-300 backdrop-blur-md group-hover:border-blue-500/30 transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
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
