import { motion } from 'framer-motion';

export default function Nav() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="site-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo">MS / Portfolio</a>

        <ul className="nav-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-availability">
          <span className="nav-avail-dot" />
          Available for Internships
        </div>
      </div>
    </motion.nav>
  );
}
