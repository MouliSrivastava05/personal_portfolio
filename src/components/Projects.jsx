import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import ratedImg from '../assets/projects/rated.png';
import reliefOpsImg from '../assets/projects/reliefops.png';
import churnIQImg from '../assets/projects/churniq.png';
import nexCraftImg from '../assets/projects/nexcraft.png';
import moneyMaticImg from '../assets/projects/moneymatic.png';
import marketAnalyticsImg from '../assets/projects/market_analytics.png';
import amazonIntelligenceImg from '../assets/projects/amazon_intelligence.png';

const PROJECTS = [
  {
    id: '01', category: 'Full-Stack', year: '2024', title: 'Rated', img: ratedImg,
    desc: 'High-performance streetwear e-commerce platform with a custom brutalist design system.',
    tags: ['React', 'Vite', 'Firebase']
  },
  {
    id: '02', category: 'Full-Stack', year: '2025', title: 'ReliefOps', img: reliefOpsImg,
    desc: 'Disaster coordination platform with role-based auth for Citizens, Volunteers & Admins.',
    tags: ['Next.js', 'TypeScript', 'MongoDB']
  },
  {
    id: '03', category: 'GenAI / Agentic', year: '2026', title: 'ChurnIQ', img: churnIQImg,
    desc: 'Agentic AI platform predicting player churn in games using multi-node orchestration.',
    tags: ['Python', 'LangGraph', 'FAISS']
  },
  {
    id: '04', category: 'Full-Stack', year: '2025', title: 'NexCraft', img: nexCraftImg,
    desc: 'Platform to create, configure and deploy custom AI chatbots powered by Groq.',
    tags: ['Next.js', 'Firebase', 'Groq']
  },
  {
    id: '05', category: 'Full-Stack', year: '2025', title: 'MoneyMatic', img: moneyMaticImg,
    desc: 'Personal finance tracker with transaction management, smart budgets, and payment reminders.',
    tags: ['React', 'Node.js', 'MySQL']
  },
  {
    id: '06', category: 'Data / Analytics', year: '2024', title: 'Market Analytics', img: marketAnalyticsImg,
    desc: 'Excel + Tableau dashboard analyzing 10,000+ transactions and identifying critical discount thresholds.',
    tags: ['Tableau', 'Excel']
  },
  {
    id: '07', category: 'Data / Analytics', year: '2024', title: 'Amazon Intelligence', img: amazonIntelligenceImg,
    desc: 'Python ETL pipeline cleaning 42,000+ Amazon product records with keyword clustering.',
    tags: ['Python', 'Pandas']
  },
];

const FILTERS = ['All', 'Full-Stack', 'GenAI / Agentic', 'Data / Analytics'];

export default function Projects() {
  const [selected, setSelected] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = selected === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === selected);

  return (
    <section id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="work-header">
          <span className="work-counter">07 projects</span>
        </div>

        <div className="work-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${selected === f ? 'active' : ''}`}
              onClick={() => setSelected(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div className="work-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="work-card"
            >
              <div className="work-img-frame">
                {project.img && <img src={project.img} alt={project.title} loading="lazy" />}
                <div className="work-img-overlay">
                  <span className="work-view-text">View &rarr;</span>
                </div>
              </div>
              
              <div className="work-meta">
                <div className="work-top">
                  <span className="work-cat">{project.category}</span>
                  <span className="work-year">{project.year}</span>
                </div>
                <h3 className="work-title">{project.title}</h3>
                <p className="work-desc">{project.desc}</p>
                <div className="work-tech">
                  {project.tags.map(tag => (
                    <span key={tag} className="work-tech-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
