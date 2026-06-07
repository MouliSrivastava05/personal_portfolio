import { motion } from 'framer-motion';
import SplitText from './SplitText';

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
            <SplitText text="MOULI" delay={0.06} duration={0.8} />
            <br />
            <span className="name-line-2">
              <SplitText text="Srivastava" delay={0.04} duration={0.8} />
            </span>
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

      {/* Absolute Positioned Banner */}
      <motion.div
        className="hero-absolute-banner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-banner-key">Availability</p>
        <p className="hero-banner-val amber">Internships 2026</p>
      </motion.div>
    </section>
  );
}
