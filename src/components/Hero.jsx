import { motion, useMotionValue, useTransform } from 'framer-motion';
import DecryptedText from './DecryptedText';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <section className="hero-wrap" id="home">
      <div className="site-wrapper" style={{ width: '100%' }}>
        <motion.div 
          className="hero-inner"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="hero-text-col">
            <motion.p className="hero-label" variants={fadeUp}>
              001 — introduction
            </motion.p>
            
            <motion.div className="hero-name-row" variants={fadeUp}>
              <h1 className="hero-name">MOULI</h1>
              <h1 className="hero-name italic">Srivastava</h1>
            </motion.div>

            <motion.p className="hero-tagline" variants={fadeUp}>
              <DecryptedText text="full-stack developer & ai engineer" speed={40} delay={600} />
            </motion.p>

            <motion.div className="hero-pills" variants={fadeUp}>
              <span className="hero-pill">Full-Stack Dev</span>
              <span className="hero-pill">AI / LLM Systems</span>
              <span className="hero-pill">Data Engineering</span>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div className="hero-photo-col" variants={fadeUp}>
            <motion.div 
              className="hero-photo-frame"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hero-photo-inner">
                <img src="/profile.jpg" alt="Mouli Srivastava" className="hero-photo-img" />
              </div>
              
              {/* Rotating Circular Badge */}
              <motion.div 
                className="hero-rotating-badge"
                style={{ translateZ: 50 }}
              >
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text className="hero-badge-text">
                    <textPath href="#circlePath" startOffset="0%">
                      AVAILABLE FOR INTERNSHIPS · 2026 ·
                    </textPath>
                  </text>
                </svg>
                <div className="hero-badge-center"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint" />
    </section>
  );
}
