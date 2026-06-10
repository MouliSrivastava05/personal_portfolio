import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EXP = [
  {
    role: 'Web Dev Intern', org: 'CollegePur', type: 'Remote', date: 'Jun–Aug 2025',
    bullets: [
      'Built responsive UI with React + Tailwind, cut page load time 30%',
      'Integrated REST API endpoints and dynamic filter arrays',
      'Connected agentic GenAI suggestion models to frontend',
      'Reduced client-side rendering lag by refactoring hooks',
      'Extracted DB insights with Python Pandas for analytics',
    ],
  }
];

const EDU = [
  { deg: 'B.Tech — Artificial Intelligence', inst: 'Newton School of Technology, Rishihood University', year: '2024–2028', grade: 'GPA 7.2/10' },
  { deg: 'Class XII', inst: 'Lal Bahadur Shastri School, Kota', year: '2023–2024', grade: '78.2%' },
  { deg: 'Class X', inst: 'Lucknow Public School', year: '2021–2022', grade: '89.9%' },
];

const SKILLS = [
  { cat: 'LANGUAGES', list: 'Python · JS · TypeScript · SQL' },
  { cat: 'FRONTEND', list: 'React · Next.js' },
  { cat: 'BACKEND', list: 'Node · Express · FastAPI' },
  { cat: 'AI · ML', list: 'LangChain · LangGraph · FAISS · HuggingFace · Groq' },
  { cat: 'DATABASES', list: 'MongoDB · MySQL · Firebase · PostgreSQL' },
  { cat: 'ANALYTICS', list: 'Pandas · NumPy · Tableau · Streamlit' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" ref={ref}>
      <motion.div 
        className="resume-layout"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left Col: Exp + Edu */}
        <motion.div variants={stagger}>
          <motion.div variants={fadeUp}>
            <h3 className="resume-col-title">Experience</h3>
            {EXP.map(e => (
              <div key={e.org} className="exp-block">
                <h4 className="exp-role">{e.role}</h4>
                <div className="exp-meta">
                  <span className="exp-org">{e.org} · {e.type}</span>
                  <span className="exp-date">{e.date}</span>
                </div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, i) => <li key={i} className="exp-bullet">— {b}</li>)}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: '64px' }}>
            <h3 className="resume-col-title">Education</h3>
            <div className="edu-list">
              {EDU.map(e => (
                <div key={e.deg} className="edu-item">
                  <div className="edu-degree">{e.deg}</div>
                  <div className="edu-meta">
                    <span className="edu-inst">{e.inst} · {e.year}</span>
                    <span className="edu-grade">{e.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Col: Skills */}
        <motion.div variants={fadeUp}>
          <h3 className="resume-col-title">Skills</h3>
          {SKILLS.map(s => (
            <div key={s.cat} className="skill-block">
              <div className="skill-label">{s.cat}</div>
              <div className="skill-text">{s.list}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
