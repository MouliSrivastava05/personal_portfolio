import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechBadge from './TechBadge';

export default function ProjectDrawer({ project, onClose }) {
  // Lock body scroll when drawer is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="zine-drawer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <motion.div
            className="zine-drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger Button */}
            <button className="drawer-close-trigger" onClick={onClose} aria-label="Close panel">
              <span>Close Insert</span>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Spec Sheet Content */}
            <div style={{ marginTop: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="drawer-meta-num">
                *
              </div>
              
              <div>
                <span className="caption" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                  Archive Classification // {project.category.toUpperCase()}
                </span>
                <h2 className="drawer-title-serif">{project.title}</h2>
              </div>

              {project.img && (
                <div className="drawer-img-frame">
                  <img src={project.img} alt={project.title} />
                </div>
              )}

              {/* Specification description */}
              <div style={{ marginBottom: '32px' }}>
                <h4 className="caption" style={{ borderBottom: '1px solid var(--text)', paddingBottom: '6px', marginBottom: '12px' }}>
                  01 / System Description
                </h4>
                <p className="drawer-body-text">{project.desc}</p>
              </div>

              {/* Technologies integration */}
              <div style={{ marginBottom: '40px' }}>
                <h4 className="caption" style={{ borderBottom: '1px solid var(--text)', paddingBottom: '6px', marginBottom: '12px' }}>
                  02 / Technology Stack Mapping
                </h4>
                <div className="tech-badge-grid" style={{ marginTop: '12px' }}>
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>
              </div>

              {/* Publishing & Launch Actions */}
              <div className="drawer-action-row">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-accent-filled"
                  >
                    Launch System 
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-outline-border"
                  >
                    Source Code 
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
