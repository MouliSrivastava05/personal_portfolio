import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const email = "moulisrivastava5@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="contact-wrap" id="contact" ref={ref}>
      <motion.div 
        className="site-wrapper" style={{ width: '100%' }}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="contact-headline" variants={fadeUp}>
          Let's <br/>
          <em>build</em> <br/>
          together.
        </motion.h2>

        <motion.p className="contact-sub" variants={fadeUp}>
          Open to internships, collaborations, and new ideas.
        </motion.p>

        <motion.div variants={fadeUp}>
          <button className="contact-email-btn" onClick={handleCopy}>
            {copied ? "copied" : email}
          </button>
        </motion.div>

        <motion.div className="contact-rule" variants={fadeUp} />

        <motion.div className="contact-meta-grid" variants={fadeUp}>
          <div className="c-meta-col">
            <span className="c-meta-label">institution email</span>
            <span className="c-meta-val">mouli.srivastava2024@nst.rishihood.edu.in</span>
          </div>
          <div className="c-meta-col">
            <span className="c-meta-label">location</span>
            <span className="c-meta-val">New Delhi, India</span>
          </div>
          <div className="c-meta-col">
            <span className="c-meta-label">response time</span>
            <span className="c-meta-val">within 24 hours</span>
          </div>
        </motion.div>

        <motion.div className="contact-socials" variants={fadeUp}>
          <a href="https://github.com/MouliSrivastava05" target="_blank" rel="noreferrer" className="social-btn">github</a>
          <a href="https://linkedin.com/in/mouli-srivastava-083298333" target="_blank" rel="noreferrer" className="social-btn">linkedin</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
