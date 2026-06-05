import { motion } from 'framer-motion';

export default function MagazineFeatures({ projects, onSelectProject }) {
  
  // Stagger/Reveal variants for slow printed transitions
  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 1.02 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  const imageLeftVariants = {
    hidden: { opacity: 0, x: -60, scale: 1.02 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  // Helper to map index to one of the 4 editorial styles
  const renderProjectSpread = (project, index) => {
    const formatIndex = String(index + 1).padStart(2, '0');
    const layoutStyle = index % 4;

    switch (layoutStyle) {
      case 0:
        // ReliefOps style: Image on right, overlapping text block
        return (
          <div className="spread-row" key={project.title}>
            <motion.div 
              className="feature-ops-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={textVariants}
            >
              <span className="caption">No. {formatIndex} // Feature Spread</span>
              <h3 className="proj-title-serif">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
              
              <div className="proj-specs">
                {project.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              
              <button 
                className="proj-action-btn"
                onClick={() => onSelectProject(project)}
              >
                Inspect Spec Sheet →
              </button>
            </motion.div>

            <motion.div 
              className="feature-ops-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={imageVariants}
            >
              <img src={project.img} alt={project.title} />
            </motion.div>
          </div>
        );

      case 1:
        // ChurnIQ style: Tall narrow frame on left, text column on right
        return (
          <div className="spread-row" key={project.title}>
            <motion.div 
              className="feature-churn-frame"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={imageLeftVariants}
            >
              <img src={project.img} alt={project.title} />
            </motion.div>

            <motion.div 
              className="feature-churn-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={textVariants}
            >
              <span className="caption">No. {formatIndex} // Profile Spread</span>
              <h3 className="proj-title-serif">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
              
              <div className="proj-specs" style={{ marginBottom: '24px' }}>
                {project.tags.map(t => <span key={t}>{t}</span>)}
              </div>

              <div>
                <button 
                  className="proj-action-btn"
                  onClick={() => onSelectProject(project)}
                  style={{ marginTop: 0 }}
                >
                  Inspect Spec Sheet →
                </button>
              </div>
            </motion.div>
          </div>
        );

      case 2:
        // NexCraft style: Typography pull-quote layout
        return (
          <div className="spread-row" key={project.title}>
            <div className="feature-craft-quote-block">
              <motion.h3 
                className="feature-craft-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={textVariants}
              >
                {project.title.toUpperCase()} / <span style={{ fontStyle: 'italic', fontWeight: 300 }}>SYSTEMS</span>
              </motion.h3>

              <motion.div 
                className="feature-craft-desc-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={textVariants}
              >
                <span className="caption">No. {formatIndex} // Display Spread</span>
                <p className="proj-desc" style={{ marginTop: '12px' }}>{project.desc}</p>
                <div className="proj-specs" style={{ marginBottom: '20px' }}>
                  {project.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div>
                  <button 
                    className="proj-action-btn"
                    onClick={() => onSelectProject(project)}
                    style={{ marginTop: 0 }}
                  >
                    Inspect Spec Sheet →
                  </button>
                </div>
              </motion.div>

              <motion.div 
                className="feature-craft-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={imageVariants}
              >
                <img src={project.img} alt={project.title} />
              </motion.div>
            </div>
          </div>
        );

      case 3:
      default:
        // MoneyMatic style: Horizontal offset overlap
        return (
          <div className="spread-row" key={project.title}>
            <motion.div 
              className="feature-matic-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={textVariants}
            >
              <span className="caption">No. {formatIndex} // Balance Spread</span>
              <h3 className="proj-title-serif">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
              <div className="proj-specs">
                {project.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <button 
                className="proj-action-btn"
                onClick={() => onSelectProject(project)}
              >
                Inspect Spec Sheet →
              </button>
            </motion.div>

            <motion.div 
              className="feature-matic-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={imageVariants}
            >
              <img src={project.img} alt={project.title} />
            </motion.div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="magazine-spread">
      <div className="feature-spread-header">
        <h2 className="feature-spread-title">Selected Features</h2>
        <span className="caption">Archived engineering logs // 2024–2026</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((project, idx) => renderProjectSpread(project, idx))}
      </div>
    </section>
  );
}
