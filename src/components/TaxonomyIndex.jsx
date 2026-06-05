import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function TaxonomyIndex() {
  const containerRef = useRef(null);

  const fadeUpVariants = {
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

  const experienceData = [
    {
      index: '01',
      org: 'CollegePur Web Dev Intern',
      period: 'June 2025 – Aug 2025 // Remote',
      bullets: [
        'Built responsive interface systems with React and Tailwind CSS.',
        'Integrated API endpoints and dynamic filter arrays.',
        'Connected agentic GenAI suggestion models with user views.',
        'Refactored component hooks to minimize client-side rendering lag.',
        'Extracted database insights using Python Pandas ETL.'
      ]
    }
  ];

  const educationData = [
    {
      index: '02',
      org: 'B.Tech — Artificial Intelligence',
      institution: 'Newton School of Technology, Rishihood University // 2024–28',
      grade: 'GPA Status: 7.2 / 10.0'
    },
    {
      index: '03',
      org: 'Intermediate Class XII Certification',
      institution: 'Lal Bahadur Shastri School, Kota // 2023–24',
      grade: 'Grade Achieved: 78.2%'
    },
    {
      index: '04',
      org: 'Matriculation Class X Certification',
      institution: 'Lucknow Public School, Lucknow // 2021–22',
      grade: 'Grade Achieved: 89.9%'
    }
  ];

  const skillsData = [
    { label: 'Languages', list: 'Python / SQL / JavaScript / TypeScript / HTML / CSS' },
    { label: 'Libraries', list: 'React / Next.js / Node.js / Express / Redux / Tailwind CSS' },
    { label: 'AI Agents', list: 'LangChain / LangGraph / FAISS / HuggingFace / GPT Models' },
    { label: 'Databases', list: 'MongoDB / MySQL / Firebase / PostgreSQL' },
    { label: 'Analytics', list: 'Pandas / NumPy / Excel / Tableau / Matplotlib' }
  ];

  return (
    <section id="resume" className="magazine-spread index-spread" ref={containerRef}>
      <div className="index-layout">
        
        {/* Sticky Left Editorial Header */}
        <div className="index-left">
          <div className="index-sticky-wrap">
            <span className="caption" style={{ color: 'var(--accent)', fontWeight: 700 }}>
              Section 02 // Index Logs
            </span>
            <h2 className="index-heading">
              TAXONOMY &<br />
              CHRONOLOGY.
            </h2>
            <p className="proj-desc">
              Academic benchmarks, engineering history, and technological competencies cataloged systematically like a publication table of contents.
            </p>
          </div>
        </div>

        {/* Right Index Content */}
        <div className="index-right">
          
          {/* PROFESSIONAL CHRONOLOGY */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <h3 className="caption" style={{ borderBottom: '1px solid var(--text)', paddingBottom: '8px', marginBottom: '16px' }}>
              01 / Professional Timeline
            </h3>
            
            <div className="toc-table">
              {experienceData.map((exp) => (
                <div className="toc-row" key={exp.org}>
                  <span className="toc-num">{exp.index}</span>
                  <div>
                    <h4 className="toc-title">{exp.org}</h4>
                    <span className="caption" style={{ fontSize: '0.65rem' }}>{exp.period}</span>
                  </div>
                  <div className="toc-meta">
                    <ul className="toc-desc-list">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="toc-desc-item">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ACADEMIC BENCHMARKS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            style={{ marginTop: '24px' }}
          >
            <h3 className="caption" style={{ borderBottom: '1px solid var(--text)', paddingBottom: '8px', marginBottom: '16px' }}>
              02 / Academic Milestones
            </h3>

            <div className="toc-table">
              {educationData.map((edu) => (
                <div className="toc-row" key={edu.org}>
                  <span className="toc-num">{edu.index}</span>
                  <div>
                    <h4 className="toc-title">{edu.org}</h4>
                    <span className="caption" style={{ fontSize: '0.65rem' }}>{edu.institution}</span>
                  </div>
                  <div className="toc-meta" style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="caption" style={{ border: '1px solid var(--text)', padding: '2px 8px', borderRadius: '0' }}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SKILLS MATRIX PARAGRAPH */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            style={{ marginTop: '24px' }}
          >
            <h3 className="caption" style={{ borderBottom: '1px solid var(--text)', paddingBottom: '8px', marginBottom: '24px' }}>
              03 / Technical Skill Taxonomy
            </h3>

            <div className="toc-skills-paragraph">
              {skillsData.map((skill, idx) => (
                <span key={skill.label} style={{ display: 'inline', marginRight: '24px' }}>
                  <span>[{skill.label}]</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, textTransform: 'none', color: 'var(--text)', letterSpacing: 'normal' }}>
                    {skill.list}
                  </span>
                  {idx < skillsData.length - 1 && " — "}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
