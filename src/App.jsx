import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const MOULI_DATA = {
  name: 'Mouli Srivastava',
  username: 'MouliSrivastava05',
  location: 'New Delhi, India',
  email1: 'mouli.srivastava2024@nst.rishihood.edu.in',
  email2: 'moulisrivastava5@gmail.com',
  linkedin: 'linkedin.com/in/mouli-srivastava-083298333',
  linkedinUrl: 'https://linkedin.com/in/mouli-srivastava-083298333',
  githubUrl: 'https://github.com/MouliSrivastava05',
};

const PROJECTS = [
  {
    id: '01',
    category: 'Full-Stack',
    year: '2024',
    title: 'Rated',
    url: 'rated-lemon.vercel.app',
    img: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/MouliSrivastava05/Rated.git',
    demo: 'https://rated-lemon.vercel.app/',
    desc: 'High-performance streetwear e-commerce platform with a custom brutalist design system. Features React Context state management, Firebase auth, and dynamic product routing.',
    tags: ['React', 'Vite', 'Firebase', 'Vanilla CSS'],
  },
  {
    id: '02',
    category: 'Full-Stack',
    year: '2025',
    title: 'ReliefOps',
    url: 'relief-ops-two.vercel.app',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/MouliSrivastava05/ReliefOps.git',
    demo: 'https://relief-ops-two.vercel.app/',
    desc: 'Disaster coordination platform with role-based auth for Citizens, Volunteers & Admins. Geolocation-based resource matching with real-time Google Maps visualizations and live status dashboards.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Google Maps API'],
  },
  {
    id: '03',
    category: 'GenAI / Agentic',
    year: '2026',
    title: 'ChurnIQ',
    url: 'churniq.streamlit.app',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/VanshSharma88/ChurnIQ.git',
    demo: 'https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/',
    desc: 'Agentic AI platform predicting player churn in games. RAG pipeline with FAISS + HuggingFace + Groq LLaMA 3.1. LangGraph multi-node orchestration with Random Forest ML backbone.',
    tags: ['Python', 'LangGraph', 'FAISS', 'Groq', 'Streamlit'],
  },
  {
    id: '04',
    category: 'Full-Stack',
    year: '2025',
    title: 'NexCraft',
    url: 'nexcraft.vercel.app',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/MouliSrivastava05/chatbot_maker.git',
    demo: 'https://chatbot-maker-2d4c-git-main-moulisrivastava05s-projects.vercel.app/',
    desc: 'Platform to create, configure and deploy custom AI chatbots. Groq-powered real-time conversational interface with Firebase Auth, MongoDB persistence, and embeddable widget support.',
    tags: ['Next.js', 'Firebase', 'Groq', 'MongoDB'],
  },
  {
    id: '05',
    category: 'Full-Stack',
    year: '2025',
    title: 'MoneyMatic',
    url: 'money-matic.vercel.app',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/MouliSrivastava05/MoneyMatic.git',
    demo: 'https://money-matic.vercel.app/',
    desc: 'Personal finance tracker with transaction management, smart budgets, and payment reminders. JWT auth, dynamic date-range filtering, and a polished dark-mode UI.',
    tags: ['React', 'Node.js', 'MySQL', 'JWT'],
  },
  {
    id: '06',
    category: 'Data / Analytics',
    year: '2024',
    title: 'Market Analytics',
    url: 'github.com/MouliSrivastava05',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/MouliSrivastava05/DVA_Capstone.git',
    demo: null,
    desc: 'Excel + Tableau dashboard analyzing 10,000+ transactions and $2.29M+ revenue. Identified the critical 30% discount threshold driving 60% of negative-margin sales.',
    tags: ['Excel', 'Python', 'Tableau', 'Pandas'],
  },
  {
    id: '07',
    category: 'Data / Analytics',
    year: '2024',
    title: 'Amazon Intelligence',
    url: 'github.com/MouliSrivastava05',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/Aman739-code/E_G1_DVACapstone2.git',
    demo: null,
    desc: 'Python ETL pipeline cleaning 42,000+ Amazon product records with outlier detection and deduplication. Keyword classification into 20+ product categories with an interactive Tableau dashboard.',
    tags: ['Python', 'Pandas', 'Tableau', 'ETL'],
  },
];

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Always dark
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      {/* Simple static cursor dot — never changes shape */}
      <div
        className="custom-cursor"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <Nav />

      <main>
        <div className="site-wrapper">
          <Hero data={MOULI_DATA} />
        </div>

        <div className="site-wrapper">
          <About data={MOULI_DATA} />
        </div>

        <div className="site-wrapper">
          <Projects projects={PROJECTS} />
        </div>

        <div className="site-wrapper">
          <Experience />
        </div>

        <div className="site-wrapper">
          <Contact data={MOULI_DATA} />
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>New Delhi, India · IST</span>
          <span>© {new Date().getFullYear()} Mouli Srivastava</span>
        </div>
      </footer>
    </>
  );
}
