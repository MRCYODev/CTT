import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

interface SourceBadgeProps {
  url: string;
  github?: string;
  icon?: string;
}

function getDomain(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function getIconSources(
  url: string,
  icon?: string,
): string[] {
  const domain = getDomain(url);
  const sources: string[] = [];

  if (icon) {
    sources.push(icon);
  }

  if (domain) {
    sources.push(`https://icon.horse/icon/${domain}`);
  }

  if (domain) {
    sources.push(
      `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
        domain,
      )}&sz=128`,
    );
  }

  return sources;
}

function WebsiteIcon({
  url,
  icon,
}: {
  url: string;
  icon?: string;
}) {
  const sources = getIconSources(url, icon);
  const [sourceIndex, setSourceIndex] = useState(0);

  if (sourceIndex >= sources.length) {
    return null;
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt=""
      className={styles.favicon}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      onError={() => {
        setSourceIndex((index) => index + 1);
      }}
    />
  );
}

export default function SourceBadge({
  url,
  github,
  icon,
}: SourceBadgeProps) {
  return (
    <span className={styles.sourceGroup}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sourceBadge}
        title="Official website"
        aria-label="Open official website"
      >
        <WebsiteIcon url={url} icon={icon} />
      </a>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sourceBadge} ${styles.githubBadge}`}
          title="View source code on GitHub"
          aria-label="View source code on GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      )}
    </span>
  );
}