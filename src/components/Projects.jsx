import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import ProjectDrawer from './ProjectDrawer';

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
    link: 'https://github.com/MouliSrivastava05/Rated.git',
    demo: 'https://rated-lemon.vercel.app/',
    desc: 'High-performance streetwear e-commerce platform with a custom brutalist design system. Features React Context state management, Firebase auth, and dynamic product routing.',
    tags: ['React', 'Vite', 'Firebase']
  },
  {
    id: '02', category: 'Full-Stack', year: '2025', title: 'ReliefOps', img: reliefOpsImg,
    link: 'https://github.com/MouliSrivastava05/ReliefOps.git',
    demo: 'https://relief-ops-two.vercel.app/',
    desc: 'Disaster coordination platform with role-based auth for Citizens, Volunteers & Admins. Geolocation-based resource matching with real-time Google Maps visualizations and live status dashboards.',
    tags: ['Next.js', 'TypeScript', 'MongoDB']
  },
  {
    id: '03', category: 'GenAI / Agentic', year: '2026', title: 'ChurnIQ', img: churnIQImg,
    link: 'https://github.com/VanshSharma88/ChurnIQ.git',
    demo: 'https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/',
    desc: 'Agentic AI platform predicting player churn in games. RAG pipeline with FAISS + HuggingFace + Groq LLaMA 3.1. LangGraph multi-node orchestration with Random Forest ML backbone.',
    tags: ['Python', 'LangGraph', 'FAISS']
  },
  {
    id: '04', category: 'Full-Stack', year: '2025', title: 'NexCraft', img: nexCraftImg,
    link: 'https://github.com/MouliSrivastava05/chatbot_maker.git',
    demo: 'https://chatbot-maker-2d4c-git-main-moulisrivastava05s-projects.vercel.app/',
    desc: 'Platform to create, configure and deploy custom AI chatbots. Groq-powered real-time conversational interface with Firebase Auth, MongoDB persistence, and embeddable widget support.',
    tags: ['Next.js', 'Firebase', 'Groq']
  },
  {
    id: '05', category: 'Full-Stack', year: '2025', title: 'MoneyMatic', img: moneyMaticImg,
    link: 'https://github.com/MouliSrivastava05/MoneyMatic.git',
    demo: 'https://money-matic.vercel.app/',
    desc: 'Personal finance tracker with transaction management, smart budgets, and payment reminders. JWT auth, dynamic date-range filtering, and a polished dark-mode UI.',
    tags: ['React', 'Node.js', 'MySQL']
  },
  {
    id: '06', category: 'Data / Analytics', year: '2024', title: 'Market Analytics', img: marketAnalyticsImg,
    link: 'https://github.com/MouliSrivastava05/DVA_Capstone.git',
    demo: null,
    desc: 'Excel + Tableau dashboard analyzing 10,000+ transactions and $2.29M+ revenue. Identified the critical 30% discount threshold driving 60% of negative-margin sales.',
    tags: ['Tableau', 'Excel']
  },
  {
    id: '07', category: 'Data / Analytics', year: '2024', title: 'Amazon Intelligence', img: amazonIntelligenceImg,
    link: 'https://github.com/Aman739-code/E_G1_DVACapstone2.git',
    demo: null,
    desc: 'Python ETL pipeline cleaning 42,000+ Amazon product records with outlier detection and deduplication. Keyword classification into 20+ product categories with an interactive Tableau dashboard.',
    tags: ['Python', 'Pandas']
  },
];

const FILTERS = ['All', 'Full-Stack', 'GenAI / Agentic', 'Data / Analytics'];

export default function Projects() {
  const [selected, setSelected] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
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
              onClick={() => setActiveProject(project)}
              style={{ cursor: 'pointer' }}
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
      <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
