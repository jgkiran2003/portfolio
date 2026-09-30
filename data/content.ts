export type LinkKind = "github" | "linkedin" | "email" | "resume";

export interface SocialLink {
  kind: LinkKind;
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: readonly string[];
}

export interface Project {
  name: string;
  href: string;
  bullets: readonly string[];
  stack: readonly string[];
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface Content {
  name: string;
  title: string;
  location: string;
  education: string;
  status: string;
  links: readonly SocialLink[];
  experience: readonly Experience[];
  projects: readonly Project[];
  skills: readonly SkillGroup[];
}

export const content: Content = {
  name: "Jaisankar Guru Kiran",
  title:
    "Software Engineer | AI Orchestration, Local-First Systems & High-Performance Backends",
  location: "Singapore",
  education:
    "Computer Science at National University of Singapore (NUS), specializing in Artificial Intelligence",
  status: "Open to opportunities / internships",
  links: [
    { kind: "github", label: "GitHub", href: "https://github.com/jgkiran2003" },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/j-guru-kiran/",
    },
    { kind: "email", label: "Email", href: "mailto:jgkiran2003@gmail.com" },
    { kind: "resume", label: "Resume", href: "/resume.pdf" },
  ],
  experience: [
    {
      company: "Razer",
      role: "Software Engineering Intern",
      period: "May 2026 – Present",
      bullets: [
        "Managed production release of MemPalace, resolving critical architectural and concurrency tickets.",
        "Engineered the MemEval evaluation pipeline via Bitbucket CI/CD and AWS S3 storage.",
        "Implemented telemetry for latency, token usage, and LLM cost monitoring.",
      ],
    },
    {
      company: "MyStorage",
      role: "Software Engineering Intern",
      period: "May 2024 – Jul 2024",
      bullets: [
        "Architected AI Sales Assistant App reducing client turnaround time by 30%.",
        "Engineered a barcode-integrated Warehouse App saving 0.5 minutes per movement cycle.",
      ],
    },
  ],
  projects: [
    {
      name: "MindPalace",
      href: "https://github.com/ayirus05/MindPalace",
      bullets: [
        "Local-first RAG pipeline using LanceDB and Ollama.",
        "Custom AST chunking algorithm with an incremental state-managed indexer to eliminate re-indexing overhead.",
      ],
      stack: ["Python", "LanceDB", "Ollama", "Vector Search"],
    },
    {
      name: "Physics Engine",
      href: "https://github.com/jgkiran2003/PhysicsEngine",
      bullets: [
        "3D rigid-body physics engine built from scratch in C++.",
        "Polymorphic collision detection using double-dispatch with stable impulse-based resolution and manual memory management.",
      ],
      stack: ["C++", "SIMD", "Linear Algebra"],
    },
    {
      name: "FinNews",
      href: "https://github.com/jgkiran2003/FinNews",
      bullets: [
        "Financial news ingestion and impact prediction system using the Adapter design pattern.",
        "Fine-tuned PyTorch Transformer model for domain-specific sentiment analysis.",
      ],
      stack: ["Python", "PyTorch", "Hugging Face", "SQLite"],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Python", "C++", "TypeScript", "Node.js"],
    },
    {
      label: "Frameworks & Infra",
      items: [
        "Next.js",
        "React",
        "FastAPI",
        "LangGraph",
        "LanceDB",
        "Docker",
        "AWS S3",
        "CI/CD",
      ],
    },
  ],
} as const;