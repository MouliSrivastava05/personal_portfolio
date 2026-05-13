import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitFork, Link2, Code2, ArrowUpRight } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'Email (NST)',
    value: 'mouli.srivastava2024@nst.rishihood.edu.in',
    href: 'mailto:mouli.srivastava2024@nst.rishihood.edu.in',
  },
  {
    icon: Mail,
    label: 'Email (Personal)',
    value: 'moulisrivastava5@gmail.com',
    href: 'mailto:moulisrivastava5@gmail.com',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'mouli-srivastava-083298333',
    href: 'https://linkedin.com/in/mouli-srivastava-083298333',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    value: 'MouliSrivastava05',
    href: 'https://github.com/MouliSrivastava05',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'mouli_sri',
    href: 'https://leetcode.com/u/mouli_sri/',
  },
];

export default function Connect() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="connect" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Connect
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          Let's build something together.
        </motion.h2>

        <motion.p
          className="text-[#a1a1aa] text-base mb-12 max-w-lg"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          Open to internships, collaborations, and interesting projects.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: 0.18 + i * 0.07 }}
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
              style={{ background: '#111111', border: '1px solid #1f1f1f' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f1f1f'; }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-indigo-400"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}
              >
                <Icon size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[#52525b] text-xs font-medium mb-0.5">{label}</p>
                <p className="text-[#a1a1aa] text-sm truncate group-hover:text-white transition-colors">{value}</p>
              </div>
              <ArrowUpRight size={14} className="shrink-0 text-[#52525b] group-hover:text-indigo-400 transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-[#52525b] text-xs mt-16 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Designed & built by{' '}
          <span className="accent-gradient font-semibold">Mouli Srivastava</span>
          {' '}· 2026
        </motion.p>
      </div>
    </section>
  );
}
