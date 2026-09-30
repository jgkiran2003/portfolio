import type { ComponentType } from "react";
import { FileText, Mail, MapPin } from "lucide-react";
import { content } from "@/data/content";
import type { LinkKind } from "@/data/content";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const linkClass =
  "underline underline-offset-4 decoration-neutral-700 transition-colors hover:decoration-neutral-300";

const icons: Record<LinkKind, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  resume: FileText,
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-white/10 py-10"
    >
      <h2 id={id} className="mb-6 text-sm font-medium text-neutral-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded border border-neutral-800 px-1.5 py-0.5 font-mono text-xs text-neutral-400">
      {children}
    </li>
  );
}

export default function Page() {
  const { name, title, location, education, status, links, experience, projects, skills } =
    content;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-400 antialiased selection:bg-neutral-700 selection:text-neutral-100">
      <div className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
        <header className="pb-10">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">
            {name}
          </h1>
          <p className="mt-2 text-neutral-300">{title}</p>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              {location}. {education}.
            </span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden
            />
            {status}
          </p>
        </header>

        <Section id="experience" title="Experience">
          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-neutral-100">
                    {job.company}
                    <span className="text-neutral-400"> · {job.role}</span>
                  </h3>
                  <p className="font-mono text-xs tabular-nums text-neutral-500">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed marker:text-neutral-700">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Selected projects">
          <ul className="space-y-8">
            {projects.map((p) => (
              <li key={p.name}>
                <h3 className="text-neutral-100">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {p.name}
                  </a>
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed marker:text-neutral-700">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul
                  aria-label={`${p.name} stack`}
                  className="mt-3 flex flex-wrap gap-1.5"
                >
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stack" title="Skills and stack">
          <dl className="space-y-4">
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 sm:grid-cols-[10rem_1fr]"
              >
                <dt className="text-sm text-neutral-500">{group.label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {links.map((l) => {
              const Icon = icons[l.kind];
              const external = l.href.startsWith("http");
              return (
                <li key={l.kind}>
                  <a
                    href={l.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span className={linkClass}>{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
      </div>
    </main>
  );
}