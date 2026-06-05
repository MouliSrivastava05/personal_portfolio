import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDrawer from './ProjectDrawer';

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'GenAI / Agentic', 'Data / Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-chapter">
        <span className="projects-chapter-label">003 / Selected Work</span>
        <span className="projects-chapter-count">0{projects.length} projects</span>
      </div>

      {/* Dynamic Category Filter Bar */}
      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Modern Asymmetric Scalable Grid */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Alternating vertical offsets to maintain the zine zesty aesthetic
            const cardClass = `project-card${index % 2 === 1 ? ' card-offset' : ''}`;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className={cardClass}
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveProject(project)}
              >
                <div className="proj-card-inner">
                  {/* framed thumbnail frame */}
                  <div className="proj-card-img-wrap">
                    {project.img ? (
                      <img src={project.img} alt={project.title} loading="lazy" />
                    ) : (
                      <div className="proj-card-no-img">{project.id}</div>
                    )}
                    <div className="proj-card-overlay">
                      <div className="proj-card-explore-btn">
                        <span>Launch Specs</span>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>

                  {/* metadata info and snippet */}
                  <div className="proj-card-meta">
                    <div className="proj-card-top-line">
                      <span className="proj-card-category">{project.category}</span>
                      <span className="proj-card-year">{project.year}</span>
                    </div>
                    <h3 className="proj-card-title">{project.title}</h3>
                    <p className="proj-card-desc-snippet">{project.desc}</p>
                    
                    <div className="proj-card-tags-row">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="proj-card-tag-pill">{tag}</span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="proj-card-tag-pill-more">+{project.tags.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Side specifications drawer panel */}
      <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
