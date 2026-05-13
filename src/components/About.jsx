import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const pills = [
  'B.Tech AI — 2024–2028',
  'GPA: 7.2 / 10',
  'GDG Event Manager',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-6"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
        >
          About
        </motion.p>

        <motion.p
          className="text-[#a1a1aa] text-lg leading-relaxed max-w-2xl mb-10"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
        >
          I'm a B.Tech AI student at Rishihood University with hands-on experience across
          full-stack engineering, generative AI systems, and data analytics. I care deeply
          about building things that are fast, intelligent, and purposeful.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#a1a1aa]"
              style={{ background: '#111111', border: '1px solid #1f1f1f' }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
