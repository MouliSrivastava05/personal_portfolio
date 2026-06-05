import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
};

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact({ data }) {
  return (
    <section className="contact-section" id="contact">
      <motion.p
        className="contact-chapter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        005 / Contact
      </motion.p>

      <div className="contact-center">
        <motion.h2
          className="contact-headline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Let's<br />
          <em>build</em><br />
          together.
        </motion.h2>

        <motion.p
          className="contact-sub"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Open to internships, collaborations, and new ideas. If you're working on something interesting, reach out.
        </motion.p>

        <motion.a
          href={`mailto:${data.email2}`}
          className="contact-email-link"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          {data.email2}
        </motion.a>

        <motion.div
          className="contact-meta-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="contact-meta-item">
            <span className="contact-meta-key">Institution Email</span>
            <a
              href={`mailto:${data.email1}`}
              className="contact-meta-val"
              style={{ color: 'inherit' }}
            >
              {data.email1}
            </a>
          </div>
          <div className="contact-meta-item">
            <span className="contact-meta-key">Location</span>
            <span className="contact-meta-val">{data.location}</span>
          </div>
          <div className="contact-meta-item">
            <span className="contact-meta-key">Response Time</span>
            <span className="contact-meta-val">Within 24 hours</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-social-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-soc-btn"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={data.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-soc-btn"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
