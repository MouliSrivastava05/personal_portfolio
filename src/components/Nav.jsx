import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section tracker
      const sections = ['about', 'projects', 'resume', 'contact'];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(s);
          return;
        }
      }
      setActive('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">MS / Portfolio</a>

        <div className="nav-links">
          {LINKS.map(({ label, href }) => (
            <a 
              key={label} 
              href={href} 
              className={`nav-link ${active === href.substring(1) ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-avail">
          <span className="nav-avail-dot" />
          available for internships
        </div>

        <button className="nav-mobile-btn">Menu</button>
      </div>
    </nav>
  );
}
