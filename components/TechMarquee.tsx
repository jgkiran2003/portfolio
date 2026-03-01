'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const techStack = [
  { 
    name: 'C++', 
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#00599C]">
        <path d="M22.046 14.869c-1.125 3.738-4.57 6.452-8.625 6.452-5.06 0-9.162-4.102-9.162-9.162 0-5.06 4.102-9.162 9.162-9.162 4.055 0 7.5 2.714 8.625 6.452h-2.148c-1.012-2.617-3.551-4.469-6.477-4.469-3.855 0-6.98 3.125-6.98 6.98s3.125 6.98 6.98 6.98c2.926 0 5.465-1.852 6.477-4.469h2.148zm-1.875-2.869h1.162v-1.162h.93v1.162h1.162v.93h-1.162v1.162h-.93v-1.162h-1.162v-.93zm-3.721 0h1.162v-1.162h.93v1.162h1.162v.93H18.54v1.162h-.93v-1.162h-1.162v-.93z"/>
      </svg>
    )
  },
  { 
    name: 'Python', 
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3776AB]">
        <path d="M11.996 0c-2.31 0-3.327.375-4.57.375s-2.73.916-2.73 3.327V5.55h7.327v.93H3.21C.916 6.48 0 7.397 0 9.692v4.57c0 2.31.916 3.227 3.21 3.227h2.296v-3.21c0-2.31.916-3.227 3.21-3.227h7.327V9.245h-7.327V8.315H15.67c2.296 0 3.21-.916 3.21-3.227V2.73c0-2.31-.914-2.73-3.21-2.73h-3.674zm-2.73 1.834a.916.916 0 1 1 0 1.832.916.916 0 0 1 0-1.832zm7.327 4.57v3.21c0 2.31-.914 3.227-3.21 3.227h-7.327v1.832h7.327v.93H3.21c-2.296 0-3.21.916-3.21 3.227v2.296c0 2.31.914 2.73 3.21 2.73h3.674c2.31 0 3.327-.375 4.57-.375s2.73-.916 2.73-3.327v-1.832h-7.327v-.93h8.794c2.296 0 3.21-.916 3.21-3.227v-4.57c0-2.31-.914-3.227-3.21-3.227h-2.296zm-2.296 15.11a.916.916 0 1 1 0 1.832.916.916 0 0 1 0-1.832z"/>
      </svg>
    )
  },
  { 
    name: 'Next.js', 
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
        <path d="M18.663 22.193c-.027-.008-.052-.016-.078-.023C15.938 21.284 12.062 17.5 12.062 17.5l-6.223-6.23v10.923H4V2.001h1.839l13.916 13.921V2.001H21.59v20.192h-1.839l-1.088-1.088v1.088h-.001z"/>
      </svg>
    )
  },
  { 
    name: 'FastAPI', 
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#05998B]">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.67 17.41c-.244 0-.44-.196-.44-.44V7.03c0-.244.196-.44.44-.44h.982c.244 0 .44.196.44.44v9.94c0 .244-.196.44-.44.44h-.982zm7.67-4.116c.162.164.162.43 0 .594l-3.39 3.4c-.164.164-.43.164-.594 0-.164-.162-.164-.43 0-.594l3.094-3.102-3.094-3.1c-.164-.162-.164-.43 0-.594.164-.164.43-.164.594 0l3.39 3.396z"/>
      </svg>
    )
  },
];

export const TechMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-zinc-950/20 border-y border-white/5 group">
      {/* Visual background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex space-x-12 w-max px-6"
        animate={{
          x: isHovered ? undefined : [0, -400], // Adjust distance based on real world feel
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedTech.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`}
            className="flex items-center space-x-4 px-10 py-5 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl group/item hover:border-blue-500/50 hover:bg-zinc-800/60 transition-all duration-500 shadow-lg shadow-black/20 hover:scale-105"
          >
            <div className="flex-shrink-0 grayscale group-hover/item:grayscale-0 transition-all duration-500 transform group-hover/item:rotate-12">
              {tech.svg}
            </div>
            <span className="text-xl font-bold text-zinc-400 group-hover/item:text-white transition-colors duration-500">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
