import React, { useState, useEffect } from 'react';

const MOULI_DATA = {
  name: 'Mouli Srivastava',
  username: 'MouliSrivastava05',
  avatar: 'https://github.com/MouliSrivastava05.png',
  bio: 'Full-Stack Developer | AI & GenAI Engineer | Data Analyst turning complex datasets into actionable intelligence. I build high-performance scalable systems and models.',
  location: 'New Delhi, India',
  email1: 'mouli.srivastava2024@nst.rishihood.edu.in',
  email2: 'moulisrivastava5@gmail.com',
  linkedin: 'linkedin.com/in/mouli-srivastava-083298333',
  linkedinUrl: 'https://linkedin.com/in/mouli-srivastava-083298333',
  githubUrl: 'https://github.com/MouliSrivastava05',
  skills: ['React', 'Next.js', 'Python', 'Tailwind', 'LangChain', 'Pandas', 'SQL', 'MongoDB'],
};

const PROJECTS = [
  {
    category: 'fullstack',
    title: 'ReliefOps',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/MouliSrivastava05/ReliefOps.git',
    demo: 'https://relief-ops-two.vercel.app/',
    desc: 'Disaster coordination platform with role-based auth for Citizens, Volunteers & Admins. Geolocation-based resource matching with real-time map visualizations.',
    tags: ['nextjs', 'typescript', 'mongodb'],
    langClass: 'lang-fullstack',
    langName: 'Full-Stack'
  },
  {
    category: 'fullstack',
    title: 'MoneyMatic',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/MouliSrivastava05/MoneyMatic.git',
    demo: 'https://money-matic.vercel.app/',
    desc: 'Personal finance tracker with transaction management, budgets, and reminders. JWT auth, dynamic filtering, and dark-mode UI.',
    tags: ['react', 'nodejs', 'mysql'],
    langClass: 'lang-fullstack',
    langName: 'Full-Stack'
  },
  {
    category: 'genai',
    title: 'ChurnIQ',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/VanshSharma88/ChurnIQ.git',
    demo: 'https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/',
    desc: 'Agentic AI platform predicting player churn in games. RAG pipeline with FAISS + HuggingFace + Groq LLaMA 3.1. LangGraph orchestration + Random Forest ML.',
    tags: ['python', 'langgraph', 'faiss'],
    langClass: 'lang-genai',
    langName: 'GenAI / AI'
  },
  {
    category: 'genai',
    title: 'NexCraft',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/MouliSrivastava05/chatbot_maker.git',
    demo: 'https://chatbot-maker-2d4c-git-main-moulisrivastava05s-projects.vercel.app/',
    desc: 'Platform to create, configure, and deploy custom AI chatbots. Groq AI real-time conversational interface with Firebase Auth + MongoDB.',
    tags: ['nextjs', 'firebase', 'groq'],
    langClass: 'lang-genai',
    langName: 'GenAI / AI'
  },
  {
    category: 'data',
    title: 'Market-Performance-Analytics',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/MouliSrivastava05/DVA_Capstone.git',
    desc: 'Excel dashboard analyzing 10k+ transactions and $2.29M+ revenue. Identified 30% discount threshold driving 60% of negative-margin sales.',
    tags: ['excel', 'python', 'tableau'],
    langClass: 'lang-data',
    langName: 'Data Analytics'
  },
  {
    category: 'data',
    title: 'Amazon-Electronics-Intelligence',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Aman739-code/E_G1_DVACapstone2.git',
    desc: 'Python ETL pipeline cleaning 42k+ Amazon records with outlier detection. Keyword classification into 20+ product categories and an interactive Tableau dashboard.',
    tags: ['python', 'pandas', 'tableau'],
    langClass: 'lang-data',
    langName: 'Data Analytics'
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [modalData, setModalData] = useState(null);
  
  // Contribution Graph generation
  const [graphClasses, setGraphClasses] = useState([]);
  useEffect(() => {
    const classes = ['g-sq', 'g-sq g-l1', 'g-sq g-l2', 'g-sq', 'g-sq', 'g-sq g-l3', 'g-sq', 'g-sq g-l4', 'g-sq g-l1'];
    const squares = Array.from({ length: 200 }, () => classes[Math.floor(Math.random() * classes.length)]);
    setGraphClasses(squares);
  }, []);

  // Filter Logic
  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <header>
        <div className="header-left">
          <div className="header-logo-container">
            <button className="mobile-menu-btn">
              <svg viewBox="0 0 16 16" width="24" height="24"><path d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
            </button>
            <div className="header-logo">
              <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </div>
            <div style={{width: '24px'}}></div>
          </div>
        </div>
      </header>

      <div className="container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <img src={MOULI_DATA.avatar} alt="Avatar" className="avatar" />
            <div className="vcard-names">
              <h1 className="vcard-fullname">{MOULI_DATA.name}</h1>
              <h2 className="vcard-username">{MOULI_DATA.username}</h2>
            </div>
          </div>
          
          <div className="user-profile-bio">
            {MOULI_DATA.bio}
          </div>
          
          <a href={`mailto:${MOULI_DATA.email1}`} className="btn-profile">Follow / Contact</a>
          
          <ul className="vcard-details">
            <li>
              <svg viewBox="0 0 16 16"><path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              {MOULI_DATA.location}
            </li>
            <li>
              <svg viewBox="0 0 16 16"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
              <a href={`mailto:${MOULI_DATA.email1}`}>{MOULI_DATA.email1}</a>
            </li>
            <li>
              <svg viewBox="0 0 16 16"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
              <a href={`mailto:${MOULI_DATA.email2}`}>{MOULI_DATA.email2}</a>
            </li>
            <li>
              <svg viewBox="0 0 16 16"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>
              <a href={MOULI_DATA.linkedinUrl} target="_blank" rel="noreferrer">{MOULI_DATA.linkedin}</a>
            </li>
          </ul>

          <div className="skills-section">
            <h2>Skills & Organizations</h2>
            <div className="skills-badges">
              {MOULI_DATA.skills.map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <main className="content">
          <nav className="UnderlineNav">
            <div className="UnderlineNav-item">
              <svg viewBox="0 0 16 16"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
              Repositories <span className="repo-count">{filteredProjects.length}</span>
            </div>
          </nav>

          <div className="repo-filter-bar">
            <input 
              type="text" 
              className="local-search" 
              placeholder="Find a repository..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="filter-buttons">
              <button className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => setCurrentFilter('all')}>All</button>
              <button className={`filter-btn ${currentFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setCurrentFilter('fullstack')}>Full-Stack</button>
              <button className={`filter-btn ${currentFilter === 'genai' ? 'active' : ''}`} onClick={() => setCurrentFilter('genai')}>GenAI</button>
              <button className={`filter-btn ${currentFilter === 'data' ? 'active' : ''}`} onClick={() => setCurrentFilter('data')}>Data Analytics</button>
            </div>
          </div>

          <div className="repo-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="repo-card" onClick={() => setModalData(project)}>
                <img src={project.img} alt="Cover" className="card-cover-image" />
                <div className="repo-card-body">
                  <div className="repo-header">
                    <div className="repo-title-group">
                      <svg className="icon"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                      <a href={project.link} onClick={e => e.stopPropagation()} target="_blank" rel="noreferrer" className="repo-title">{project.title}</a>
                    </div>
                    <span className="repo-badge">Public</span>
                  </div>
                  <p className="repo-desc">{project.desc}</p>
                  <div className="repo-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="topic-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="repo-footer">
                    <span><span className={`lang-color ${project.langClass}`}></span> {project.langName}</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="no-results" style={{display: 'block'}}>
                No repositories match your search or filter.
              </div>
            )}
          </div>

          <div className="contrib-graph">
            <div className="contrib-title">1,402 contributions in the last year</div>
            <div className="graph-squares">
              {graphClasses.map((cls, idx) => (
                <div key={idx} className={cls}></div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Mouli Srivastava. All rights reserved.</p>
        <div style={{marginTop: '8px'}}>
          <a href={MOULI_DATA.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={MOULI_DATA.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${MOULI_DATA.email1}`}>Contact</a>
        </div>
      </footer>

      {/* MODAL */}
      <div className={`modal-overlay ${modalData ? 'active' : ''}`} onClick={() => setModalData(null)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">{modalData?.title}</div>
            <button className="close-btn" onClick={() => setModalData(null)}>
              <svg viewBox="0 0 16 16"><path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
            </button>
          </div>
          <div className="modal-body">
            {modalData && <img src={modalData.img} alt="Project Cover" className="modal-img" />}
            <p className="modal-desc">{modalData?.desc}</p>
          </div>
          <div className="modal-footer">
            {modalData?.demo && (
               <a href={modalData.demo} target="_blank" rel="noreferrer" className="btn-cancel" style={{textDecoration: 'none'}}>View Live Demo</a>
            )}
            <a href={modalData?.link} target="_blank" rel="noreferrer" className="btn-primary">View Live Repository</a>
          </div>
        </div>
      </div>
    </>
  );
}
