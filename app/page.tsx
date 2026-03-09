'use client';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className='px-8'>
        < Hero />
        < About />
        < Projects />
        < Contact />
      </main>
    </div>
  );
}
