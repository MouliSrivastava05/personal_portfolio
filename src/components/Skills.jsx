import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const groups = [
  { label: 'Languages',     skills: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C++'] },
  { label: 'Frontend',      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'] },
  { label: 'Backend',       skills: ['Node.js', 'Express.js', 'Prisma ORM', 'REST APIs'] },
  { label: 'Databases',     skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
  { label: 'AI / ML',       skills: ['LangChain', 'LangGraph', 'Hugging Face', 'Groq API', 'FAISS', 'Scikit-Learn', 'TensorFlow'] },
  { label: 'Data',          skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Looker Studio', 'Excel'] },
  { label: 'DevOps & Tools',skills: ['Git', 'GitHub', 'Postman', 'Figma', 'OAuth 2.0', 'Vercel'] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.p>

        <div className="flex flex-col gap-6">
          {groups.map(({ label, skills }, gi) => (
            <motion.div
              key={label}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + gi * 0.07 }}
            >
              <span className="text-[#52525b] text-xs font-semibold uppercase tracking-wider w-32 shrink-0 pt-1">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg text-[#a1a1aa] hover:text-white transition-colors cursor-default"
                    style={{ background: '#111111', border: '1px solid #1f1f1f' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
