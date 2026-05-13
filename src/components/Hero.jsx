import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitFork, Link2, Code2, ArrowRight, Download } from 'lucide-react';

const roles = ['Full-Stack Developer', 'GenAI Engineer', 'Data Analyst'];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const word = roles[idx];
    let timer;
    if (paused) {
      timer = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
    } else if (!deleting && text.length < word.length) {
      timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === word.length) {
      setPaused(true);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), 35);
    } else {
      setDeleting(false);
      setIdx((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, paused, idx]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="accent-gradient font-semibold">{text}</span>
      <span className="cursor-blink inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 rounded-sm" />
    </span>
  );
}

const statCards = [
  { label: '5+ Projects Built', sub: 'Full-Stack · AI · Data' },
  { label: '3 Domains', sub: 'Engineering · AI · Analytics' },
  { label: '100+ DSA Solved', sub: 'LeetCode' },
  { label: '1 Internship', sub: 'Frontend · GenAI' },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:moulisrivastava5@gmail.com', label: 'Email' },
  { icon: GitFork, href: 'https://github.com/MouliSrivastava05', label: 'GitHub' },
  { icon: Link2, href: 'https://linkedin.com/in/mouli-srivastava-083298333', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/u/mouli_sri/', label: 'LeetCode' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — text */}
        <div>
          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#a1a1aa] mb-8"
            style={{ background: '#111111', border: '1px solid #1f1f1f' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Available for Internships
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-4"
          >
            Mouli<br />Srivastava
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.35}
            className="text-lg text-[#a1a1aa] mb-5 h-7 flex items-center"
          >
            <Typewriter />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
            className="text-[#a1a1aa] text-base leading-relaxed mb-8 max-w-md"
          >
            I build high-performance web apps, agentic AI systems, and data-driven
            dashboards — bridging design, engineering, and intelligence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#a1a1aa] hover:text-white transition-all duration-150 active:scale-95"
              style={{ background: '#111111', border: '1px solid #1f1f1f' }}
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.65}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#52525b] hover:text-white transition-colors duration-150"
                style={{ background: '#111111', border: '1px solid #1f1f1f' }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — orb + stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center h-[420px]"
        >
          {/* Orb */}
          <div className="orb-glow absolute w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 35%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.2) 45%, transparent 70%)',
              filter: 'blur(1px)',
            }}
          />
          <div className="absolute w-72 h-72 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
              border: '1px solid rgba(99,102,241,0.08)',
            }}
          />
          {/* Ring */}
          <div className="absolute w-80 h-80 rounded-full"
            style={{ border: '1px solid rgba(99,102,241,0.06)' }}
          />
          <div className="absolute w-[22rem] h-[22rem] rounded-full"
            style={{ border: '1px dashed rgba(255,255,255,0.03)' }}
          />

          {/* Stat cards */}
          <div className="float-a absolute top-8 left-4">
            <StatCard {...statCards[0]} />
          </div>
          <div className="float-b absolute top-12 right-4">
            <StatCard {...statCards[1]} />
          </div>
          <div className="float-b absolute bottom-16 left-8">
            <StatCard {...statCards[2]} />
          </div>
          <div className="float-a absolute bottom-8 right-6">
            <StatCard {...statCards[3]} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatCard({ label, sub }) {
  return (
    <div
      className="px-4 py-3 rounded-xl text-left"
      style={{ background: '#111111', border: '1px solid #1f1f1f', minWidth: '9rem' }}
    >
      <p className="text-white text-sm font-semibold leading-none mb-1">{label}</p>
      <p className="text-[#52525b] text-xs">{sub}</p>
    </div>
  );
}
