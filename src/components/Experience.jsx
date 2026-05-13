import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';

const bullets = [
  'Built adaptive UIs with React & Tailwind CSS for desktop, tablet, and mobile viewports.',
  'Integrated API-driven components — filters, dashboards, and dynamic lists — with backend teams.',
  'Assisted in connecting LLM-based GenAI features for content suggestions and smart search.',
  'Refactored components with Redux state management, reducing unnecessary re-renders.',
  'Used Python, Pandas & Matplotlib for data handling to improve internal dashboard insights.',
];

const techStack = [
  'React', 'Tailwind CSS', 'Redux', 'Node.js', 'Python', 'Pandas', 'Matplotlib', 'LLM / GenAI',
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.p>

        <motion.div
          className="rounded-xl p-8"
          style={{ background: '#111111', border: '1px solid #1f1f1f' }}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Card header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-white font-bold text-xl">CollegePur</span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.18)', color: '#818cf8' }}
                >
                  Internship
                </span>
              </div>
              <p className="text-white font-semibold text-base">Frontend Web Developer Intern</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 text-right">
              <span className="text-[#a1a1aa] text-sm font-medium">June 2025 – Aug 2025</span>
              <span
                className="inline-flex items-center gap-1 text-xs text-[#52525b] px-2.5 py-1 rounded-md"
                style={{ background: '#0a0a0a', border: '1px solid #1f1f1f' }}
              >
                <MapPin size={11} /> Remote
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1f1f1f] mb-6" />

          {/* Bullets */}
          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-[#a1a1aa] text-sm leading-relaxed"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              >
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-indigo-400" />
                {b}
              </motion.li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2.5 py-1 rounded-md text-[#52525b] hover:text-[#a1a1aa] transition-colors"
                style={{ background: '#0a0a0a', border: '1px solid #1f1f1f' }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
