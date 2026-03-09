"use client";

import React, { useState, type FormEvent } from "react";
import { motion } from 'framer-motion';
import personal from '../app/data/personal.json';

const inputCls = "w-full bg-[#151817] border border-[#2a302c] rounded-[3px] px-[14px] py-[12px] font-mono text-[13px] text-[#e2e8e4] placeholder:text-[#4a5550] outline-none focus:border-[#00c98d]/40 transition-all";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-275 mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[13px] text-accent mb-2 tracking-wider">// 03. What's next?</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-tx-primary tracking-tight">
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans text-2xl font-bold text-tx-primary mb-6">
              Let&apos;s build something <span className="text-accent">exceptional.</span>
            </h3>
            <p className="text-[17px] text-tx-muted leading-[1.8] mb-10">
              I&apos;m currently open to new opportunities - part-time roles, interesting freelance projects,
              or anything technically challenging. If you have a problem worth solving, let&apos;s talk.
            </p>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${personal.email}`} className="group flex items-center gap-4 p-4 bg-bg-card border border-border-hi rounded-md hover:border-accent/30 transition-all">
                <span className="w-10 h-10 flex items-center justify-center bg-[#1a1f1d] border border-border-hi rounded-sm text-accent group-hover:bg-accent group-hover:text-[#051209] transition-all">✉</span>
                <span className="font-mono text-[14px] text-tx-muted group-hover:text-tx-primary">{personal.email}</span>
              </a>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 bg-bg-card border border-border-hi rounded-md hover:border-accent/30 transition-all">
                <span className="w-10 h-10 flex items-center justify-center bg-[#1a1f1d] border border-border-hi rounded-sm text-accent group-hover:bg-accent group-hover:text-[#051209] transition-all">in</span>
                <span className="font-mono text-[14px] text-tx-muted group-hover:text-tx-primary">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-tx-dark">Name</label>
                <input name="name" type="text" required className={inputCls} value={form.name} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-tx-dark">Email</label>
                <input name="email" type="email" required className={inputCls} value={form.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-tx-dark">Message</label>
                <textarea name="message" required className={`${inputCls} min-h-38 resize-none`} value={form.message} onChange={handleChange} />
              </div>
              <button
                type="submit"
                disabled={loading || sent}
                className="inline-flex items-center justify-center px-8 py-4 font-mono text-[13px] font-medium tracking-[0.05em] rounded-[3px] bg-accent text-[#051209] border border-accent hover:bg-[#00e8a2] transition-all disabled:opacity-50"
              >
                {sent ? "Message Sent ✓" : loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};