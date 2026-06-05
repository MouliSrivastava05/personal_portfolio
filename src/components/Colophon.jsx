
export default function Colophon({ data }) {
  return (
    <footer id="contact" className="colophon-spread">
      <div className="colophon-left">
        <h2 className="colophon-title">
          LET'S STRIP<br />
          DOWN THE CLUTTER.<br />
          BUILD SOMETHING RATIONAL.
        </h2>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '85%', marginTop: '32px' }}>
          Seeking technical challenges in machine learning systems, full-stack pipelines, and automated intelligence models.
        </p>

        <div className="colophon-details">
          <div>
            <span className="caption" style={{ display: 'block', marginBottom: '8px' }}>// Publishing Metadata</span>
            <p>Edition 2026.1 / Hand-authored digital log.</p>
            <p>Typeset in Cormorant Garamond & Barlow Condensed.</p>
          </div>
          <div>
            <span className="caption" style={{ display: 'block', marginBottom: '8px' }}>// Content Indices</span>
            <p>06 Projects cataloged / 01 Professional Intern log / 05 Skill Taxonomies mapped.</p>
          </div>
        </div>
      </div>

      <div className="colophon-right">
        <div>
          <span className="caption" style={{ display: 'block', marginBottom: '12px' }}>// Primary Coordinates</span>
          <a href={`mailto:${data.email1}`} className="colophon-email-link">
            {data.email1}
          </a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <span className="caption" style={{ display: 'block', marginBottom: '12px' }}>// Public Archives</span>
          <div className="colophon-socials">
            <a href={data.githubUrl} target="_blank" rel="noreferrer" className="colophon-social-link">
              GitHub / Code Repository
            </a>
            <a href={data.linkedinUrl} target="_blank" rel="noreferrer" className="colophon-social-link">
              LinkedIn / Professional Profile
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px dashed var(--text-muted)', paddingTop: '24px', marginTop: '40px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>Delhi, India // IST Time</span>
          <span>&copy; {new Date().getFullYear()} Mouli Srivastava.</span>
        </div>
      </div>
    </footer>
  );
}
