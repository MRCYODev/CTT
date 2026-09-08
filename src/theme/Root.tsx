import {useEffect} from 'react';
import type {ReactNode} from 'react';

import ThemeEffects from '@site/src/components/ThemeEffects';
import ThemePicker from '@site/src/components/ThemePicker';

const darkOnlyThemes = new Set<string>([
  'custom',
  'galaxy',
  'christmas',
  'halloween',
  'amoled',
  'TKOD',
]);

function collapseMobileToc(): void {
  const toc = document.querySelector('.theme-doc-toc-mobile');
  if (!toc) return;

  const button = toc.querySelector('button');
  const expanded = toc.querySelector('[class*="tocCollapsibleExpanded"]');

  if (expanded && button instanceof HTMLButtonElement) {
    button.click();
  }
}

function getTocEntries(): Array<{link: HTMLAnchorElement; heading: HTMLElement}> {
  const toc = document.querySelector('.theme-doc-toc-mobile');
  if (!toc) return [];

  const links = Array.from(
    toc.querySelectorAll<HTMLAnchorElement>('.table-of-contents a[href^="#"]'),
  );
  const entries: Array<{link: HTMLAnchorElement; heading: HTMLElement}> = [];
  const seen = new Set<string>();

  for (const link of links) {
    const rawHash = link.getAttribute('href');
    if (!rawHash || rawHash === '#') continue;

    let id: string;
    try {
      id = decodeURIComponent(rawHash.slice(1));
    } catch {
      continue;
    }

    // Docusaurus can briefly render the same anchor more than once while the
    // mobile TOC is being rebuilt. Only one entry should ever be active.
    if (seen.has(id)) continue;

    const heading = document.getElementById(id);
    if (!heading) continue;

    seen.add(id);
    entries.push({link, heading});
  }

  return entries;
}

function getDocumentScrollTop(): number {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setMobileTocActiveLink(activeLink: HTMLAnchorElement | null): void {
  const toc = document.querySelector('.theme-doc-toc-mobile');
  if (!toc) return;

  toc
    .querySelectorAll<HTMLAnchorElement>('.table-of-contents a[href^="#"]')
    .forEach((link) => {
      const active = link === activeLink;
      link.toggleAttribute('data-ctt-toc-active', active);
      if (active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
}

function syncMobileTocActiveHeading(): void {
  const entries = getTocEntries();
  if (!entries.length) return;

  const navbar = document.querySelector<HTMLElement>('.navbar');
  const toc = document.querySelector<HTMLElement>('.theme-doc-toc-mobile');
  const button = toc?.querySelector<HTMLElement>('button');

  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
  const tocHeight = button?.getBoundingClientRect().height ?? 0;
  const activationLine = navbarHeight + tocHeight + 24;

  let activeIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;
  const scrollTop = getDocumentScrollTop();
  const activationDocumentY = scrollTop + activationLine;

  for (let index = 0; index < entries.length; index += 1) {
    const headingDocumentY = entries[index].heading.getBoundingClientRect().top + scrollTop;
    const distance = activationDocumentY - headingDocumentY;

    if (distance >= 0) {
      // The last heading above the activation line wins.
      activeIndex = index;
      closestDistance = distance;
    } else if (closestDistance !== Number.POSITIVE_INFINITY) {
      break;
    } else {
      // At the very top of a page, the first heading is the current section.
      activeIndex = 0;
    }
  }

  setMobileTocActiveLink(entries[activeIndex]?.link ?? null);
}

function scrollToHashTarget(rawHash: string): boolean {
  if (!rawHash || rawHash === '#') return false;

  let id: string;
  try {
    id = decodeURIComponent(rawHash.slice(1));
  } catch {
    return false;
  }

  const heading = document.getElementById(id);
  if (!heading) return false;

  const navbar = document.querySelector<HTMLElement>('.navbar');
  const toc = document.querySelector<HTMLElement>('.theme-doc-toc-mobile');
  const button = toc?.querySelector<HTMLElement>('button');
  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
  const tocHeight = window.matchMedia('(max-width: 996px)').matches
    ? (button?.getBoundingClientRect().height ?? 0)
    : 0;

  // Use document coordinates instead of relying solely on window.scrollY.
  // This is more reliable across Firefox's root scrolling implementation.
  const currentScrollTop = getDocumentScrollTop();
  const targetTop =
    currentScrollTop +
    heading.getBoundingClientRect().top -
    navbarHeight -
    tocHeight -
    16;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
  });

  return true;
}

function installMobileTocInteractions(): () => void {
  let scrollFrame = 0;
  let refreshTimer = 0;
  let collapseTimer = 0;

  const sync = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      syncMobileTocActiveHeading();
    });
  };

  const refresh = () => {
    window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(sync, 50);
  };

  const handlePointerDown = (event: PointerEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const toc = target.closest('.theme-doc-toc-mobile');
    if (!toc) {
      collapseMobileToc();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      collapseMobileToc();
    }
  };

  const handleSmoothAnchorClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link || (link.target && link.target !== '_self')) return;

    const rawHash = link.getAttribute('href');
    if (!rawHash || rawHash === '#') return;

    let targetId: string;
    try {
      targetId = decodeURIComponent(rawHash.slice(1));
    } catch {
      return;
    }

    if (!document.getElementById(targetId)) return;

    event.preventDefault();

    if (!scrollToHashTarget(rawHash)) return;

    if (window.location.hash !== rawHash) {
      window.history.pushState(null, '', rawHash);
    }

    if (link.closest('.theme-doc-toc-mobile')) {
      setMobileTocActiveLink(link);
      window.clearTimeout(collapseTimer);
      collapseTimer = window.setTimeout(collapseMobileToc, 120);
    }
  };

  const handleHashChange = () => {
    if (window.location.hash) {
      scrollToHashTarget(window.location.hash);
    }
    refresh();
  };

  // Observe DOM replacement, but not class attributes: Docusaurus itself
  // changes the native active class and observing that would create a loop.
  const observer = new MutationObserver(refresh);
  observer.observe(document.body, {childList: true, subtree: true});

  document.addEventListener('pointerdown', handlePointerDown, true);
  document.addEventListener('keydown', handleKeyDown, true);
  document.addEventListener('click', handleSmoothAnchorClick, true);
  window.addEventListener('scroll', sync, {passive: true});
  window.addEventListener('resize', sync, {passive: true});
  window.addEventListener('hashchange', handleHashChange);

  sync();

  return () => {
    document.removeEventListener('pointerdown', handlePointerDown, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    document.removeEventListener('click', handleSmoothAnchorClick, true);
    window.removeEventListener('scroll', sync);
    window.removeEventListener('resize', sync);
    window.removeEventListener('hashchange', handleHashChange);
    observer.disconnect();
    window.cancelAnimationFrame(scrollFrame);
    window.clearTimeout(refreshTimer);
    window.clearTimeout(collapseTimer);
  };
}

function ThemeModeEnforcer(): null {
  useEffect(() => {
    const root = document.documentElement;

    const stabilizeNavbarLogo = () => {
      const logos = document.querySelectorAll<HTMLImageElement>(
        '.navbar__logo, .navbar-sidebar__brand .navbar__logo',
      );

      logos.forEach((logo) => {
        // Keep one stable asset in every CTT color mode. Docusaurus/the theme
        // CSS must not make the logo disappear or swap it when data-theme changes.
        if (logo.getAttribute('src') !== '/img/logo.png') {
          logo.setAttribute('src', '/img/logo.png');
        }
        logo.removeAttribute('srcset');
        logo.style.setProperty('display', 'block', 'important');
        logo.style.setProperty('visibility', 'visible', 'important');
        logo.style.setProperty('opacity', '1', 'important');
        logo.style.setProperty('filter', 'none', 'important');
        logo.style.setProperty('mix-blend-mode', 'normal', 'important');
      });
    };

    const enforceThemeMode = () => {
      stabilizeNavbarLogo();

      const theme = root.getAttribute('data-tech-theme');

      if (!theme || !darkOnlyThemes.has(theme)) return;

      if (root.getAttribute('data-theme') !== 'dark') {
        root.setAttribute('data-theme', 'dark');
      }

      root.style.colorScheme = 'dark';
    };

    enforceThemeMode();
    stabilizeNavbarLogo();

    const observer = new MutationObserver(enforceThemeMode);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-tech-theme', 'data-theme'],
    });

    const logoObserver = new MutationObserver(stabilizeNavbarLogo);
    logoObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const tocCleanup = installMobileTocInteractions();

    return () => {
      observer.disconnect();
      logoObserver.disconnect();
      tocCleanup();
    };
  }, []);

  return null;
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      <ThemeModeEnforcer />
      <ThemeEffects />
      <ThemePicker />
      {children}
    </>
  );
}
