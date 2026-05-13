import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'ReliefOps',
    date: 'Feb 2026',
    tag: 'Full-Stack',
    description:
      'Disaster coordination platform with role-based auth for Citizens, Volunteers & Admins. Geolocation-based resource matching with real-time map visualizations.',
    tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'NextAuth.js', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/MouliSrivastava05/ReliefOps.git',
    demo: 'https://relief-ops-two.vercel.app/',
  },
  {
    name: 'MoneyMatic',
    date: 'Nov 2025',
    tag: 'Full-Stack',
    description:
      'Personal finance tracker with transaction management, budgets, and reminders. JWT auth, dynamic filtering, and dark-mode UI.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/MouliSrivastava05/MoneyMatic.git',
    demo: 'https://money-matic.vercel.app/',
  },
  {
    name: 'ChurnIQ',
    date: 'Feb 2026',
    tag: 'GenAI / AI',
    description:
      'Agentic AI platform predicting player churn in games. RAG pipeline with FAISS + HuggingFace + Groq LLaMA 3.1. LangGraph orchestration + Random Forest ML.',
    tech: ['Python', 'LangGraph', 'LangChain', 'FAISS', 'Scikit-Learn', 'Streamlit', 'Groq API'],
    github: 'https://github.com/VanshSharma88/ChurnIQ.git',
    demo: 'https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/',
  },
  {
    name: 'NexCraft — AI Chatbot Maker',
    date: 'Sep 2025',
    tag: 'GenAI / AI',
    description:
      'Platform to create, configure, and deploy custom AI chatbots. Groq AI real-time conversational interface with Firebase Auth + MongoDB.',
    tech: ['Next.js', 'React', 'Firebase', 'MongoDB', 'JWT', 'Groq API', 'Tailwind CSS'],
    github: 'https://github.com/MouliSrivastava05/chatbot_maker.git',
    demo: 'https://chatbot-maker-2d4c-git-main-moulisrivastava05s-projects.vercel.app/',
  },
  {
    name: 'Market Performance Analytics',
    date: '2025',
    tag: 'Data Analytics',
    description:
      'Excel dashboard analyzing 10k+ transactions and $2.29M+ revenue. Identified 30% discount threshold driving 60% of negative-margin sales.',
    tech: ['Excel', 'Python', 'Pandas', 'Tableau'],
    github: 'https://github.com/MouliSrivastava05/DVA_Capstone.git',
    demo: null,
  },
  {
    name: 'Amazon Electronics Intelligence',
    date: '2025',
    tag: 'Data Analytics',
    description:
      'Python ETL pipeline cleaning 42k+ Amazon records with outlier detection. Keyword classification into 20+ product categories and an interactive Tableau dashboard.',
    tech: ['Python', 'Pandas', 'NumPy', 'Tableau', 'Matplotlib'],
    github: 'https://github.com/Aman739-code/E_G1_DVACapstone2.git',
    demo: null,
  },
];

const tagColors = {
  'Full-Stack':     { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.16)', text: '#818cf8' },
  'GenAI / AI':     { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.16)', text: '#c084fc' },
  'Data Analytics': { bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.16)', text: '#2dd4bf' },
};

function ProjectCard({ project, delay, inView }) {
  const [hovered, setHovered] = useState(false);
  const tag = tagColors[project.tag];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl flex flex-col h-full transition-all duration-200"
      style={{
        background: '#111111',
        border: `1px solid ${hovered ? 'rgba(99,102,241,0.22)' : '#1f1f1f'}`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-md"
            style={{ background: tag.bg, border: `1px solid ${tag.border}`, color: tag.text }}
          >
            {project.tag}
          </span>
          <span className="text-xs text-[#52525b]">{project.date}</span>
        </div>

        <h3 className="text-white font-semibold text-base mb-2 leading-snug">{project.name}</h3>
        <p className="text-[#52525b] text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md text-[#52525b]"
              style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-[#1a1a1a]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors"
            style={{ background: '#0a0a0a', border: '1px solid #1f1f1f' }}
          >
            <GitFork size={13} /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={0.08 + i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
