import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import projects from './projects.json';

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  lastUpdated: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
      <p className="text-gray-400 mb-4">{project.description || 'No description available.'}</p>
      <div className="flex justify-between items-center">
        <a href={project.html_url} className="text-blue-400 hover:text-blue-500">View Project</a>
        <div className="text-sm text-gray-500">
          <p>{project.language}</p>
          <p>Updated: {project.lastUpdated}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">J.G.Kiran</h1>
          <nav className="flex items-center space-x-4">
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section id="hero" className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4">Software Engineer</h2>
          <p className="text-xl text-gray-400 mb-8">Building beautiful and functional web experiences.</p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Get in Touch
          </a>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projects as Project[]).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h3 className="text-4xl font-bold mb-8">Contact</h3>
          <p className="text-xl text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:jgkiran@example.com" className="text-gray-400 hover:text-white" aria-label="Email">
              <Mail size={32} />
            </a>
            <a href="https://github.com/jgkiran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/jgkiran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={32} />
            </a>
            <a href="https://twitter.com/jgkiran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <Twitter size={32} />
            </a>
          </div>
        </section>
      </main>
      
      <footer className="text-center py-8">
        <p className="text-gray-500">&copy; 2026 J.G. Kiran. All rights reserved.</p>
      </footer>
    </div>
  );
}