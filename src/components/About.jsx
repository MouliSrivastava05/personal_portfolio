import { motion } from 'framer-motion';
import TechBadge from './TechBadge';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const FOCUS = [
  'Agentic AI systems with LangGraph and LLMs',
  'RAG pipelines with FAISS and vector search',
  'Full-stack ML products with FastAPI and React',
  'Data-driven dashboards and ETL pipelines',
  'Scalable web systems with MERN and Next.js',
];

const STACK = [
  'Python', 'JavaScript', 'TypeScript', 'SQL',
  'React', 'Next.js', 'Node.js', 'Express', 'FastAPI',
  'LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Groq',
  'MongoDB', 'MySQL', 'Firebase', 'PostgreSQL',
  'Pandas', 'NumPy', 'Tableau', 'Streamlit', 'Git', 'Figma',
];

const STATS = [
  { n: '06', l: 'Projects Shipped' },
  { n: '3+', l: 'AI Systems Built' },
  { n: '1', l: 'Internship' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.p
        className="about-chapter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        002 / About
      </motion.p>

      <div className="about-layout">
        {/* Left sticky headline */}
        <motion.h2
          className="about-headline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Sharp<br />
          code,<br />
          <span className="hl-italic">smarter</span><br />
          systems.
        </motion.h2>

        {/* Right content */}
        <div>
          <motion.p
            className="about-para"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            I'm <strong>Mouli Srivastava</strong> — a full-stack developer and AI engineer who builds systems that think. I work at the intersection of the MERN stack and agentic AI, shipping production-grade applications powered by LLMs, RAG pipelines, and multi-node LangGraph workflows.
          </motion.p>

          <motion.p
            className="about-para"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            My edge is bridging the gap between raw model intelligence and real-world product utility — every system I ship is explainable, grounded in evidence, and built to handle failure gracefully.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="about-stats-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {STATS.map(({ n, l }) => (
              <div className="about-stat" key={l}>
                <div className="about-stat-n">{n}</div>
                <div className="about-stat-l">{l}</div>
              </div>
            ))}
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="about-focus-title">Currently Focused On</p>
            <div className="about-focus-rows">
              {FOCUS.map((item, i) => (
                <div className="about-focus-row" key={item}>
                  <span className="about-focus-idx">0{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div
            className="stack-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="stack-title">Tech Stack</p>
            <div className="tech-badge-grid">
              {STACK.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
