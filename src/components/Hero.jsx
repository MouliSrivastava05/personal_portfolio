import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ data }) {
  const STATUS = [
    { key: 'Location', val: data.location, highlight: false },
    { key: 'Status', val: 'B.Tech AI · 2024–28', highlight: false },
    { key: 'GitHub', val: `@${data.username}`, highlight: false },
    { key: 'Availability', val: 'Internships 2026', highlight: true },
  ];

  return (
    <section className="hero-wrap" id="home">
      {/* Chapter-style intro */}
      <motion.div
        className="hero-chapter-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="hero-chapter-num">001</span>
        <div className="hero-chapter-rule" />
        <span className="hero-chapter-label">Introduction</span>
      </motion.div>

      {/* Main split layout */}
      <motion.div
        className="hero-body"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Large name */}
        <motion.div className="hero-name-block" variants={slideUp}>
          <h1 className="hero-name">
            MOULI<br />
            <span className="name-line-2">Srivastava</span>
          </h1>
        </motion.div>

        {/* Right: Tagline + chips */}
        <motion.div className="hero-right" variants={slideRight}>
          <p className="hero-statement">
            Full-stack developer &amp; AI engineer who builds <strong>systems that think.</strong> Working at the intersection of agentic AI and high-performance web engineering.
          </p>
          <div className="hero-role-chips">
            <span className="hero-chip">Full-Stack Dev</span>
            <span className="hero-chip">AI / LLM Systems</span>
            <span className="hero-chip">Data Engineering</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom status bar */}
      <motion.div
        className="hero-status-row"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {STATUS.map(({ key, val, highlight }) => (
          <div className="hero-status-item" key={key}>
            <p className="hero-status-key">{key}</p>
            <p className={`hero-status-val${highlight ? ' amber' : ''}`}>{val}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
