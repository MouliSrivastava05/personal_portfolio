const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Replace tokens
css = css.replace(
  /:root \{[\s\S]*?\}/,
  `:root {
  /* Terminal / Hacker Theme */
  --bg: #030C03;
  --bg-2: #0A140A;
  --bg-surface: var(--bg-2);
  --bg-raised: var(--bg-2);
  --green: #00FF41;
  --green-dim: #00B32C;
  --green-dim2: #005C16;
  --off-white: #E8F5E8;
  --cursor: #00FF41;

  --text: var(--off-white);
  --text-muted: var(--green-dim);
  --text-faint: var(--green-dim2);
  --accent: var(--green);
  --accent-dim: rgba(0, 255, 65, 0.12);
  --rule: var(--green-dim2);
  --rule-heavy: var(--green-dim);

  --font-serif: 'JetBrains Mono', monospace;
  --font-sans: 'IBM Plex Mono', monospace;
  --font-sans-alt: 'JetBrains Mono', monospace;
  --font-mono: 'IBM Plex Mono', monospace;

  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-mid: cubic-bezier(0.65, 0, 0.35, 1);

  --nav-h: 60px;
}`
);

// 2. Replace body background & pseudo-elements
css = css.replace(
  /body \{[\s\S]*?\}/,
  `body {
  position: relative;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 1.05rem;
  line-height: 1.5;
  overflow-x: hidden;
}`
);

css = css.replace(
  /body::before \{[\s\S]*?\}/,
  `body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  mix-blend-mode: overlay;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15));
  background-size: 100% 4px;
}`
);

// 3. Scrollbar
css = css.replace(
  /::-webkit-scrollbar-thumb \{[\s\S]*?\}/,
  `::-webkit-scrollbar-thumb {
  background: var(--green-dim2);
}`
);

// 4. Cursor
css = css.replace(
  /\.custom-cursor \{[\s\S]*?\}/,
  `.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--cursor);
  border-radius: 0;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: width 0.15s, height 0.15s, background 0.15s, border 0.15s;
}

.custom-cursor.hover {
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid var(--cursor);
}`
);

// 5. Remove border-radius and box-shadow globally
css = css.replace(/border-radius:\s*[^;]+;/g, 'border-radius: 0;');
css = css.replace(/box-shadow:\s*[^;]+;/g, 'box-shadow: none;');

// 6. Fix specific colors and backgrounds
css = css.replace(/background:\s*#0d0c0b;/g, 'background: var(--bg);');
css = css.replace(/rgba\(14,\s*13,\s*11,\s*0\.92\)/g, 'rgba(3, 12, 3, 0.92)');
css = css.replace(/rgba\(10,\s*10,\s*9,\s*0\.85\)/g, 'rgba(3, 12, 3, 0.85)');
css = css.replace(/rgba\(14,\s*13,\s*11,\s*0\.75\)/g, 'rgba(3, 12, 3, 0.85)');
css = css.replace(/#0D0D0D/g, 'var(--bg)');
css = css.replace(/#F5F0E8/g, 'var(--off-white)');
css = css.replace(/#ffffff/g, 'var(--off-white)');

// Navbar pulse dot color
css = css.replace(/background:\s*#3da05a;/g, 'background: var(--green);');

fs.writeFileSync(cssPath, css);
console.log('index.css rewritten successfully.');
