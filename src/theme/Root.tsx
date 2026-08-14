import {useEffect} from 'react';
import type {ReactNode} from 'react';

import ThemeEffects from '@site/src/components/ThemeEffects';
import ThemePicker from '@site/src/components/ThemePicker';

const darkOnlyThemes = new Set<string>([
  'christmas',
  'halloween',
  'amoled',
  'TKOD',
  'dracula',
  'nord',
  'galaxy',
  'custom',
]);

function ThemeModeEnforcer(): null {
  useEffect(() => {
    const root = document.documentElement;

    const enforceThemeMode = () => {
      const theme = root.getAttribute('data-tech-theme');

      if (!theme || !darkOnlyThemes.has(theme)) {
        return;
      }

      if (root.getAttribute('data-theme') !== 'dark') {
        root.setAttribute('data-theme', 'dark');
      }

      root.style.colorScheme = 'dark';
    };

    // Apply immediately.
    enforceThemeMode();

    // Keep dark-only themes dark if Docusaurus changes color mode.
    const observer = new MutationObserver(enforceThemeMode);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-tech-theme', 'data-theme'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default function Root({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <>
      <ThemeModeEnforcer />
      <ThemeEffects />
      <ThemePicker />
      {children}
    </>
  );
}