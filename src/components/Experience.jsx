import { motion } from 'framer-motion';
import TechBadge from './TechBadge';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
};

const EXPERIENCE = [
  {
    role: 'Web Dev Intern',
    org: 'CollegePur',
    period: 'Jun – Aug 2025',
    location: 'Remote',
    bullets: [
      'Built responsive UI systems with React and Tailwind CSS, reducing page load time by 30%.',
      'Integrated REST API endpoints and dynamic filter arrays for course listings.',
      'Connected agentic GenAI suggestion models to the frontend user experience.',
      'Refactored component hooks to minimize client-side rendering lag across transitions.',
      'Extracted database insights using Python Pandas for product analytics reporting.',
    ],
  },
];

const EDUCATION = [
  {
    name: 'B.Tech — Artificial Intelligence',
    inst: 'Newton School of Technology, Rishihood University',
    period: '2024 – 2028',
    grade: 'GPA 7.2 / 10',
  },
  {
    name: 'Intermediate (Class XII)',
    inst: 'Lal Bahadur Shastri School, Kota',
    period: '2023 – 2024',
    grade: '78.2%',
  },
  {
    name: 'Matriculation (Class X)',
    inst: 'Lucknow Public School, Lucknow',
    period: '2021 – 2022',
    grade: '89.9%',
  },
];

const SKILLS_PROSE = [
  { cat: 'Languages', items: 'Python / SQL / JavaScript / TypeScript' },
  { cat: 'Frontend', items: 'React / Next.js / Tailwind / Redux' },
  { cat: 'Backend', items: 'Node.js / Express / FastAPI / Streamlit' },
  { cat: 'AI / ML', items: 'LangChain / LangGraph / FAISS / HuggingFace / Groq / OpenAI' },
  { cat: 'Databases', items: 'MongoDB / MySQL / Firebase / PostgreSQL' },
  { cat: 'Analytics', items: 'Pandas / NumPy / Tableau / Excel / Matplotlib' },
];

export default function Experience() {
  return (
    <section className="resume-section" id="resume">
      <motion.p
        className="resume-chapter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        004 / Resume
      </motion.p>

      <div className="resume-columns">
        {/* Left: Experience + Education */}
        <motion.div
          className="resume-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="resume-block-title">Professional Timeline</p>

          {EXPERIENCE.map((e) => (
            <div className="exp-item" key={e.org}>
              <div className="exp-top-row">
                <span className="exp-role">{e.role}</span>
                <span className="exp-period-tag">{e.period}</span>
              </div>
              <p className="exp-org-label">{e.org} · {e.location}</p>
              <ul className="exp-list">
                {e.bullets.map((b, i) => (
                  <li key={i} className="exp-list-item">{b}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="edu-section">
            <p className="resume-block-title">Academic Milestones</p>
            {EDUCATION.map((edu) => (
              <div className="edu-row" key={edu.name}>
                <div className="edu-left">
                  <div className="edu-name">{edu.name}</div>
                  <div className="edu-inst">{edu.inst} · {edu.period}</div>
                </div>
                <span className="edu-grade">{edu.grade}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Skills prose */}
        <motion.div
          className="resume-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="skills-categories">
            {SKILLS_PROSE.map((s) => (
              <div key={s.cat} className="skill-category-block">
                <p className="skill-category-title">[{s.cat}]</p>
                <div className="tech-badge-grid">
                  {s.items.split(' / ').map((item) => (
                    <TechBadge key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
