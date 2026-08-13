import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

interface SourceBadgeProps {
  url: string;
  github?: string;
}

function getFaviconUrl(url: string): string {
  try {
    const hostname = new URL(url).hostname;

    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
  } catch {
    return '';
  }
}

export default function SourceBadge({
  url,
  github,
}: SourceBadgeProps) {
  // Open source
  if (github) {
    return (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sourceBadge}
        title="Open source — GitHub"
        aria-label="View source code on GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  }

  // Closed source
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.sourceBadge}
      title="Closed source — Official website"
      aria-label="Open official website">
      <img
        src={getFaviconUrl(url)}
        alt=""
        className={styles.favicon}
        width={24}
        height={24}
      />
    </a>
  );
}