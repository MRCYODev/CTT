import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGitlab,
  faBitbucket,
  faNpm,
  faDocker,
  faPython,
  faCodepen,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

interface SourceBadgeProps {
  url: string;

  // Source / repository platforms
  github?: string;
  gitlab?: string;
  bitbucket?: string;
  codeberg?: string;
  gitea?: string;
  forgejo?: string;
  sourceforge?: string;
  sourcehut?: string;
  launchpad?: string;
  savannah?: string;
  kde?: string;

  // Package / development platforms
  npm?: string;
  pypi?: string;
  dockerhub?: string;
  huggingface?: string;
  codepen?: string;
  git?: string;

  // Explicit website icon override
  icon?: string;
}

type SourceLink = {
  url: string;
  type: SourceType;
};

type SourceType =
  | 'github'
  | 'gitlab'
  | 'bitbucket'
  | 'codeberg'
  | 'gitea'
  | 'forgejo'
  | 'sourceforge'
  | 'sourcehut'
  | 'launchpad'
  | 'savannah'
  | 'kde'
  | 'npm'
  | 'pypi'
  | 'dockerhub'
  | 'huggingface'
  | 'codepen'
  | 'git';

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
    sources.push(
      `https://icon.horse/icon/${domain}`,
    );
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

function SimpleIcon({
  name,
  alt,
}: {
  name: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${name}`}
      alt=""
      className={styles.favicon}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      title={alt}
      onError={() => setFailed(true)}
    />
  );
}

function SourcePlatformIcon({
  type,
}: {
  type: SourceType;
}) {
  switch (type) {
    case 'github':
      return (
        <FontAwesomeIcon
          icon={faGithub}
          title="GitHub"
        />
      );

    case 'gitlab':
      return (
        <FontAwesomeIcon
          icon={faGitlab}
          title="GitLab"
        />
      );

    case 'bitbucket':
      return (
        <FontAwesomeIcon
          icon={faBitbucket}
          title="Bitbucket"
        />
      );

    case 'npm':
      return (
        <FontAwesomeIcon
          icon={faNpm}
          title="npm"
        />
      );

    case 'dockerhub':
      return (
        <FontAwesomeIcon
          icon={faDocker}
          title="Docker Hub"
        />
      );

    case 'pypi':
      return (
        <FontAwesomeIcon
          icon={faPython}
          title="PyPI"
        />
      );

    case 'codepen':
      return (
        <FontAwesomeIcon
          icon={faCodepen}
          title="CodePen"
        />
      );

    case 'git':
      return (
        <FontAwesomeIcon
          icon={faGitAlt}
          title="Git"
        />
      );

    case 'codeberg':
      return (
        <SimpleIcon
          name="codeberg"
          alt="Codeberg"
        />
      );

    case 'gitea':
      return (
        <SimpleIcon
          name="gitea"
          alt="Gitea"
        />
      );

    case 'forgejo':
      return (
        <SimpleIcon
          name="forgejo"
          alt="Forgejo"
        />
      );

    case 'sourceforge':
      return (
        <SimpleIcon
          name="sourceforge"
          alt="SourceForge"
        />
      );

    case 'sourcehut':
      return (
        <SimpleIcon
          name="sourcehut"
          alt="SourceHut"
        />
      );

    case 'launchpad':
      return (
        <SimpleIcon
          name="launchpad"
          alt="Launchpad"
        />
      );

    case 'savannah':
      return (
        <SimpleIcon
          name="savannah"
          alt="Savannah"
        />
      );

    case 'kde':
      return (
        <SimpleIcon
          name="kde"
          alt="KDE Invent"
        />
      );

    case 'huggingface':
      return (
        <SimpleIcon
          name="huggingface"
          alt="Hugging Face"
        />
      );

    default:
      return null;
  }
}

function getSourceLink(
  props: SourceBadgeProps,
): SourceLink | null {
  const sources: Array<{
    url?: string;
    type: SourceType;
  }> = [
    {url: props.github, type: 'github'},
    {url: props.gitlab, type: 'gitlab'},
    {url: props.bitbucket, type: 'bitbucket'},
    {url: props.codeberg, type: 'codeberg'},
    {url: props.gitea, type: 'gitea'},
    {url: props.forgejo, type: 'forgejo'},
    {url: props.sourceforge, type: 'sourceforge'},
    {url: props.sourcehut, type: 'sourcehut'},
    {url: props.launchpad, type: 'launchpad'},
    {url: props.savannah, type: 'savannah'},
    {url: props.kde, type: 'kde'},
    {url: props.npm, type: 'npm'},
    {url: props.pypi, type: 'pypi'},
    {url: props.dockerhub, type: 'dockerhub'},
    {url: props.huggingface, type: 'huggingface'},
    {url: props.codepen, type: 'codepen'},
    {url: props.git, type: 'git'},
  ];

  const source = sources.find(
    (entry) => Boolean(entry.url),
  );

  if (!source?.url) {
    return null;
  }

  return {
    url: source.url,
    type: source.type,
  };
}

export default function SourceBadge({
  url,
  github,
  gitlab,
  bitbucket,
  codeberg,
  gitea,
  forgejo,
  sourceforge,
  sourcehut,
  launchpad,
  savannah,
  kde,
  npm,
  pypi,
  dockerhub,
  huggingface,
  codepen,
  git,
  icon,
}: SourceBadgeProps) {
  const source = getSourceLink({
    url,
    github,
    gitlab,
    bitbucket,
    codeberg,
    gitea,
    forgejo,
    sourceforge,
    sourcehut,
    launchpad,
    savannah,
    kde,
    npm,
    pypi,
    dockerhub,
    huggingface,
    codepen,
    git,
    icon,
  });

  return (
    <span className={styles.sourceGroup}>
      {/* Official website */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.sourceBadge}
        title="Official website"
        aria-label="Open official website"
      >
        <WebsiteIcon
          url={url}
          icon={icon}
        />
      </a>

      {/* Source / development platform */}
      {source && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sourceBadge}
          title={`View source on ${source.type}`}
          aria-label={`View source on ${source.type}`}
        >
          <SourcePlatformIcon
            type={source.type}
          />
        </a>
      )}
    </span>
  );
}