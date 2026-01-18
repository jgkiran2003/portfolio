
import { Github, Linkedin, Mail } from 'lucide-react';
import { getRepositories } from './services/github';
import personal from './data/personal.json';
import ProjectList from './components/ProjectList';


export default async function Home() {
  const projects = await getRepositories();

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{personal.name}</h1>
          <nav className="flex items-center space-x-4">
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section id="hero" className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4">{personal.role}</h2>
          <p className="text-xl text-gray-400 mb-8">{personal.bio}</p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Get in Touch
          </a>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>
          <ProjectList projects={projects} />
        </section>

        <section id="contact" className="py-20 text-center">
          <h3 className="text-4xl font-bold mb-8">Contact</h3>
          <p className="text-xl text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-white" aria-label="Email">
              <Mail size={32} />
            </a>
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <Github size={32} />
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={32} />
            </a>
          </div>
        </section>
      </main>
      
      <footer className="text-center py-8">
        <p className="text-gray-500">&copy; 2026 {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}