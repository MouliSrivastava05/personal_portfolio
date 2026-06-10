import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

import ratedImg from './assets/projects/rated.png';
import reliefOpsImg from './assets/projects/reliefops.png';
import churnIQImg from './assets/projects/churniq.png';
import nexCraftImg from './assets/projects/nexcraft.png';
import moneyMaticImg from './assets/projects/moneymatic.png';
import marketAnalyticsImg from './assets/projects/market_analytics.png';
import amazonIntelligenceImg from './assets/projects/amazon_intelligence.png';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark';
    
    // Optional custom cursor tracker
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Optional solid 6px dot custom cursor */}
      <div 
        className="custom-cursor"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <Nav />

      <main>
        <div className="site-wrapper">
          <Hero />
        </div>

        <div className="site-wrapper section-padding">
          <About />
        </div>

        <div className="site-wrapper section-padding">
          <Projects />
        </div>

        <div className="site-wrapper section-padding">
          <Experience />
        </div>

        <div className="site-wrapper">
          <Contact />
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
