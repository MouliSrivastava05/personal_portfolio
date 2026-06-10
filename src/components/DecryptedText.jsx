import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function DecryptedText({ text, speed = 40, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;
    
    timeout = setTimeout(() => {
      setIsAnimating(true);
      let i = 0;
      
      interval = setInterval(() => {
        if (i >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(text);
          return;
        }

        const currentText = text.split('').map((char, index) => {
          if (index < i) return char;
          if (char === ' ') return ' ';
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }).join('');

        setDisplayText(currentText);
        i += 1 / 3; // slower reveal
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayText || text.replace(/./g, ' ')}</span>;
}
