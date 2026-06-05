import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function EditorialCover({ data, theme, toggleTheme }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <motion.section 
      className="cover-spread"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Cover Brand Nav Header */}
      <div className="cover-header-brand">
        <a href="#" className="cover-brand-title">
          Mouli Srivastava
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span className="cover-brand-issue">Issue No. 05 / 2026 Archive</span>
          <button 
            className="cover-brand-theme-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>

      {/* Headline Cover Title */}
      <div className="cover-title-block">
        <motion.h1 className="cover-title" variants={titleVariants}>
          GENERATIVE<br />
          CHAOS &<br />
          LOGICAL<br />
          STRUCTURES.
        </motion.h1>
        <motion.p className="cover-tagline" variants={titleVariants}>
          A digital log cataloging dataset analytics, full-stack systems, and neural agentic orchestrations.
        </motion.p>
      </div>

      {/* Grayscale Cover Image */}
      <motion.div className="cover-image-block" variants={imageVariants}>
        <img 
          src={data.avatar} 
          alt="Mouli Srivastava profile cover" 
          className="cover-image" 
        />
      </motion.div>

      {/* Bottom Metadata Column Sheet */}
      <motion.div className="cover-metadata-box" variants={fadeUpVariants}>
        <div className="cover-meta-col">
          <span className="caption">// Volume focus</span>
          <span className="cover-meta-val">Full-Stack / GenAI / Analysis</span>
        </div>
        <div className="cover-meta-col">
          <span className="caption">// Coordinates</span>
          <span className="cover-meta-val">{data.location}</span>
        </div>
        <div className="cover-meta-col">
          <span className="caption">// Status</span>
          <span className="cover-meta-val">B.Tech AI Candidate (2028)</span>
        </div>
        <div className="cover-meta-col">
          <span className="caption">// GitHub Handle</span>
          <span className="cover-meta-val">@{data.username}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
