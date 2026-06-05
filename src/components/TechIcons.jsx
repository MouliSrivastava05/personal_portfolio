
// Custom crisp SVG paths for tech stack logos
export const TechIcons = {
  python: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path
        d="M14.25.18c.9 0 1.66.67 1.76 1.56l.08.76h-4.04c-1.63 0-2.95 1.3-2.95 2.92v2.44H6.38c-.9 0-1.66-.67-1.76-1.56l-.08-.76C4.43 2.5 6.95.18 9.94.18h4.31zm-3.8 2.37a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        fill="#3776AB"
      />
      <path
        d="M9.75 23.82c-.9 0-1.66-.67-1.76-1.56l-.08-.76h4.04c1.63 0 2.95-1.3 2.95-2.92v-2.44h2.72c.9 0 1.66.67 1.76 1.56l.08.76c.11 3.06-2.41 5.36-5.4 5.36H9.75zm3.8-2.37a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="#FFD343"
      />
      <path
        d="M14.25 5.5c1.63 0 2.95 1.3 2.95 2.92v2.44H14.5a1.5 1.5 0 0 0-1.5 1.5v3.14c0 .83-.67 1.5-1.5 1.5H8.36A2.95 2.95 0 0 1 5.4 13.6V11.2h2.72c.83 0 1.5-.67 1.5-1.5V6.56c0-.83.67-1.5 1.5-1.5h3.13z"
        fill="#3776AB"
      />
      <path
        d="M9.75 18.5c-1.63 0-2.95-1.3-2.95-2.92v-2.44H9.5a1.5 1.5 0 0 0 1.5-1.5V8.5c0-.83.67-1.5 1.5-1.5h3.14a2.95 2.95 0 0 1 2.96 2.9v2.4h-2.72c-.83 0-1.5.67-1.5 1.5v3.14c0 .83-.67 1.5-1.5 1.5H9.75z"
        fill="#FFD343"
      />
    </svg>
  ),
  typescript: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text
        x="21"
        y="19"
        fill="#FFF"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="bold"
        textAnchor="end"
      >
        TS
      </text>
    </svg>
  ),
  javascript: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text
        x="21"
        y="19"
        fill="#000"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="bold"
        textAnchor="end"
      >
        JS
      </text>
    </svg>
  ),
  sql: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00b4d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  html: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26" />
      <path d="M12 2.2v19.6l6.8-2.2 1.6-17.4H12z" fill="#EF652A" />
      <path d="M12 9.6H8.4l-.2-2.5H12V4.6H5.7l.7 8h5.6v-3zM12 17.1l-3.3-1-.2-2.2H6l.4 4.5 5.6 1.8v-3.1z" fill="#EBEBEB" />
      <path d="M12 9.6h3.6l-.3 3.5-3.3 1v-3.1zM12 4.6h6.3l-.6 6.5H12V4.6zM12 17.1v3.1l5.6-1.8.6-6.5H15l-.2 2.2-2.8 3z" fill="#FFF" />
    </svg>
  ),
  css: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#1572B6" />
      <path d="M12 2.2v19.6l6.8-2.2 1.6-17.4H12z" fill="#33A9DC" />
      <path d="M12 9.6H8.4l-.2-2.5H12V4.6H5.7l.7 8h5.6v-3zM12 17.1l-3.3-1-.2-2.2H6l.4 4.5 5.6 1.8v-3.1z" fill="#EBEBEB" />
      <path d="M12 9.6h3.6l-.3 3.5-3.3 1v-3.1zM12 4.6h6.3l-.6 6.5H12V4.6zM12 17.1v3.1l5.6-1.8.6-6.5H15l-.2 2.2-2.8 3z" fill="#FFF" />
    </svg>
  ),
  react: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#61DAFB" strokeWidth="2" {...props}>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  nextjs: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path
        d="M18.88 19.56l-8.22-10.45v8.08H9.37V6.09h1.27l8.24 10.47V6.09h1.29v13.47h-1.29zM16.32 12l-5.67-7.22h.93l5.67 7.22h-.93z"
        fill="#FFF"
      />
    </svg>
  ),
  nodejs: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#68A063" {...props}>
      <path d="M21.2 5.8l-8.6-5a1.2 1.2 0 0 0-1.2 0l-8.6 5a1.2 1.2 0 0 0-.6 1v10.4a1.2 1.2 0 0 0 .6 1l8.6 5a1.2 1.2 0 0 0 1.2 0l8.6-5a1.2 1.2 0 0 0 .6-1V6.8a1.2 1.2 0 0 0-.6-1zm-9.2-2.8v16l-7-4V7z" />
    </svg>
  ),
  express: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#2d3748" />
      <text x="12" y="15" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">EX</text>
    </svg>
  ),
  fastapi: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M12 0L1.5 4.5V12c0 6.2 4.5 10.2 10.5 12 6-1.8 10.5-5.8 10.5-12V4.5L12 0zm1.5 16.5h-3L12 11.2l-2.2 4.5h-1.3l2.8-5.6-2-4.1h3L12 12.8l2.2-4.5h1.3l-2.8 5.6 2.1 4.1z" fill="#009485" />
    </svg>
  ),
  langchain: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  langgraph: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#818cf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="5" r="3" fill="#818cf8" />
      <circle cx="5" cy="19" r="3" fill="#818cf8" />
      <circle cx="19" cy="19" r="3" fill="#818cf8" />
      <line x1="12" y1="8" x2="6" y2="16" />
      <line x1="12" y1="8" x2="18" y2="16" />
      <line x1="8" y1="19" x2="16" y2="19" />
    </svg>
  ),
  faiss: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <rect x="14" y="14" width="8" height="8" rx="1" />
      <line x1="10" y1="6" x2="14" y2="6" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="18" x2="14" y2="18" />
      <line x1="18" y1="10" x2="18" y2="14" />
    </svg>
  ),
  huggingface: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="11" fill="#FFD21E" />
      <circle cx="8" cy="10" r="1.5" fill="#000" />
      <circle cx="16" cy="10" r="1.5" fill="#000" />
      <path d="M7 14.5c2.5 3 7.5 3 10 0" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M4 8.5c1.5-2.5 4-2 4-2M20 8.5c-1.5-2.5-4-2-4-2" stroke="#000" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  groq: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#f97316" />
    </svg>
  ),
  mongodb: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M12 0C10.5 3 6.8 9.8 6.8 13.5c0 3.7 2.3 6.8 5.2 6.8 2.9 0 5.2-3.1 5.2-6.8C17.2 9.8 13.5 3 12 0zm0 18.8c-1.8 0-3.2-2.1-3.2-4.5S10.6 8.2 12 5.5c1.4 2.7 3.2 6.4 3.2 8.8s-1.4 4.5-3.2 4.5z" fill="#47A248" />
      <path d="M12 20.2V24" stroke="#47A248" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  mysql: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  firebase: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M3.9 18.1l2.5-15.6c.1-.4.5-.6.8-.4l3.1 3.1-6.4 12.9z" fill="#FFC400" />
      <path d="M12.1 7.2L9.2 3.6c-.3-.4-.9-.4-1.2 0l-5.6 11.2 8.7-7.6z" fill="#FF9100" />
      <path d="M1.9 17.5l9.2 5.3c.6.3 1.2.3 1.8 0l9.2-5.3-1.8-9.2-18.4 9.2z" fill="#DD2C00" />
    </svg>
  ),
  postgresql: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#336791" {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5h-2v-4h2v4zm0-6.5h-2V7h2v3z" />
    </svg>
  ),
  pandas: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#150458" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  ),
  numpy: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#013243" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  ),
  tableau: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E15759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="7" x2="7" y2="12" />
      <line x1="12" y1="7" x2="17" y2="12" />
      <line x1="12" y1="17" x2="7" y2="12" />
      <line x1="12" y1="17" x2="17" y2="12" />
    </svg>
  ),
  streamlit: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF4B4B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 2 22 22 22 12 2" fill="none" />
      <polyline points="7 14 12 7 17 14" />
    </svg>
  ),
  git: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M23.3 10.9L13.1.7c-.9-.9-2.4-.9-3.3 0L7.9 2.6l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5L12.7 10c-.3.3-.7.5-1.2.6v6.2c.4.2.7.5.9.9.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.2-.2.5-.5.9-.6V10.9c-.4-.1-.8-.4-1-.8l-3-3C4.2 6.8 4 6 4 5.3c.3-.8 1.1-1.3 2-1.2L2.6 7.9c-.9.9-.9 2.4 0 3.3l10.2 10.2c.9.9 2.4.9 3.3 0l7.2-7.2c.9-.9.9-2.4 0-3.3z" fill="#F05032" />
    </svg>
  ),
  figma: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M12 2c1.7 0 3 1.3 3 3v2c0 1.7-1.3 3-3 3-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm0 8c1.7 0 3 1.3 3 3v2.8c0 1.7-1.3 3.2-3 3.2-1.7 0-3-1.5-3-3.2V13c0-1.7 1.3-3 3-3z" fill="#F24E1E" />
      <path d="M9 13v2.8c0 1.7-1.3 3.2-3 3.2-1.7 0-3-1.5-3-3.2V13c0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3z" fill="#A259FF" />
      <path d="M9 5c0-1.7-1.3-3-3-3S3 3.3 3 5v2c0 1.7 1.3 3 3 3 1.7 0 3-1.3 3-3V5z" fill="#FF7262" />
      <path d="M15 13v2.8c0 1.7 1.3 3.2 3 3.2s3-1.5 3-3.2V13c0-1.7-1.3-3-3-3s-3 1.3-3 3z" fill="#1ABC9C" />
    </svg>
  ),
  redux: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#764ABC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  tailwind: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path d="M12 6.09c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1 .25 1.72.99 2.51 1.8 1.3 1.33 2.8 2.88 5.99 2.88 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1-.25-1.72-.99-2.51-1.8-1.3-1.33-2.8-2.88-5.99-2.88zm-6 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1 .25 1.72.99 2.51 1.8 1.3 1.33 2.8 2.88 5.99 2.88 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1-.25-1.72-.99-2.51-1.8-1.3-1.33-2.8-2.88-5.99-2.88z" fill="#06B6D4" />
    </svg>
  ),
  openai: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10a37f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5-2.5-.5-5.5 2-7l2.5 1.5v-3c0-3 2.5-5.5 5.5-5.5S20 5 20 8v3l2.5-1.5c2.5 1.5 3.5 4.5 2 7l-2.5-1.5v3c0 3-2.5 5.5-5.5 5.5S11 22 11 19v-3l-2.5 1.5c-2.5-1.5-3.5-4.5-2-7l2.5 1.5z" />
    </svg>
  ),
  excel: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <rect width="24" height="24" rx="4" fill="#107C41" />
      <text x="12" y="16.5" fill="#FFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">X</text>
    </svg>
  ),
  matplotlib: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#11557c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="6" y1="18" x2="6" y2="8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="18" y1="18" x2="18" y2="6" />
    </svg>
  ),
  default: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
};

export function getTechIcon(name) {
  const normalized = name.toLowerCase().replace(/[\s.\-()]/g, '');
  
  let iconFn = TechIcons[normalized];
  if (!iconFn) {
    if (normalized === 'tailwindcss') iconFn = TechIcons.tailwind;
    else if (normalized === 'nextjs') iconFn = TechIcons.nextjs;
    else if (normalized === 'nodejs') iconFn = TechIcons.nodejs;
    else iconFn = TechIcons.default;
  }
  
  return iconFn({});
}
