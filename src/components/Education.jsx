import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const items = [
  {
    Icon: GraduationCap,
    title: 'B.Tech — Artificial Intelligence',
    institution: 'Newton School of Technology, Rishihood University',
    period: '2024 – 2028',
    grade: '7.2 / 10.0',
  },
  {
    Icon: BookOpen,
    title: 'Intermediate — Class XII',
    institution: 'Lal Bahadur Shastri School, Kota',
    period: '2023 – 2024',
    grade: '78.2%',
  },
  {
    Icon: BookOpen,
    title: 'Matriculation — Class X',
    institution: 'Lucknow Public School',
    period: '2021 – 2022',
    grade: '89.9%',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Education
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.05))' }}
          />

          <div className="flex flex-col gap-10">
            {items.map(({ Icon, title, institution, period, grade }, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                {/* Dot */}
                <div className="relative shrink-0 flex flex-col items-center" style={{ width: 40 }}>
                  <div
                    className="dot-glow w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: '#111111',
                      border: '1px solid #1f1f1f',
                      color: '#6366f1',
                    }}
                  >
                    <Icon size={17} />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3 className="text-white font-semibold text-base mb-1 leading-snug">{title}</h3>
                  <p className="text-[#52525b] text-sm mb-2">{institution}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-md text-[#a1a1aa]"
                      style={{ background: '#111111', border: '1px solid #1f1f1f' }}
                    >
                      {period}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-md"
                      style={{
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.16)',
                        color: '#818cf8',
                      }}
                    >
                      {grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
