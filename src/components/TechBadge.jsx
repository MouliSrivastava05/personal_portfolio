import { getTechIcon } from './TechIcons';

export default function TechBadge({ name }) {
  const iconElement = getTechIcon(name);

  return (
    <div className="tech-badge">
      <span className="tech-badge-icon">
        {iconElement}
      </span>
      <span className="tech-badge-text">{name}</span>
    </div>
  );
}
