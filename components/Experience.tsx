"use client";

import React from "react";
import { motion } from "framer-motion";
import experience from "../app/data/experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-275 mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[13px] text-accent mb-2 tracking-wider">// 02. Experience</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-tx-primary tracking-tight">
            Where I've worked.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-10 border-l-2 border-border-hi"
            >
              <div className="absolute -left-[2px] top-1 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_10px_#00c98d]" />

              <div className="mb-2">
                <h3 className="text-xl font-bold text-tx-primary">{exp.company}</h3>
                <p className="font-mono text-[14px] text-accent">{exp.title} &nbsp;·&nbsp; {exp.period}</p>
              </div>

              <ul className="space-y-3">
                {exp.entries.map((entry, j) => (
                  <li key={j} className="text-[15px] text-tx-muted leading-[1.7] list-none pl-6 relative">
                    <span className="absolute left-0 top-[3px] w-1 h-1 rounded-full bg-accent opacity-60" />
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
