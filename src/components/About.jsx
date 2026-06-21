import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { n: '06', l: 'projects shipped' },
  { n: '3+', l: 'ai systems built' },
  { n: '1', l: 'internship' },
];

const FOCUS = [
  'Agentic AI systems with LangGraph and LLMs',
  'RAG pipelines with FAISS and vector search',
  'Full-stack ML products with FastAPI and React',
  'Data-driven dashboards and ETL pipelines',
  'Scalable web systems with MERN and Next.js',
];

const STACK = [
  { cat: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { cat: 'Frontend', items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI'] },
  { cat: 'AI / ML', items: ['LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Groq'] },
  { cat: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'] },
  { cat: 'Data & Analytics', items: ['Pandas', 'NumPy', 'Tableau', 'Streamlit'] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref}>
      <motion.div 
        className="about-layout"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left: Headline Rhythm */}
        <motion.div className="about-headline" variants={fadeUp}>
          <span className="about-headline-1">Sharp code,</span>
          <span className="about-headline-2">smarter</span>
          <span className="about-headline-3">systems.</span>
        </motion.div>

        {/* Right: Bio, Stats, Focus, Tech */}
        <motion.div variants={stagger}>
          <motion.p className="about-bio" variants={fadeUp}>
            Works at the intersection of MERN stack and agentic AI. Ships production-grade apps with LLMs, RAG pipelines, and LangGraph workflows. Every system is explainable, grounded in evidence, built to handle failure gracefully.
          </motion.p>

          <motion.div className="about-stats" variants={fadeUp}>
            {STATS.map(s => (
              <div key={s.l} className="stat-item">
                <span className="stat-num">{s.n}</span>
                <span className="stat-label">{s.l}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="hero-label" style={{ marginBottom: '16px' }}>currently focused on</p>
            <div className="focus-grid">
              {FOCUS.map((item, i) => (
                <div key={i} className="focus-item">
                  <span className="focus-num">0{i + 1}</span>
                  <span className="focus-text">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="hero-label" style={{ marginBottom: '16px', marginTop: '24px' }}>tech stack</p>
            {STACK.map(s => (
              <div key={s.cat} className="stack-group">
                <p className="stack-cat">{s.cat}</p>
                <div className="stack-list">
                  {s.items.map((item) => (
                    <span key={item}>
                      <span className="stack-pill">{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
