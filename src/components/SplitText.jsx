import { motion } from 'framer-motion';

export default function SplitText({ text, className, delay = 0.05, duration = 0.5, yOffset = 20 }) {
  const characters = text.split('');

  return (
    <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {characters.map((char, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration,
              delay: index * delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
