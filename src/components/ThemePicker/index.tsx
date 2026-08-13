import {useEffect, useState} from 'react';
import styles from './styles.module.css';

const storageKey = 'computer-technician-tools-theme';
const colorModeKey = 'theme';

const themes = [
  'default',
  'catppuccin',
  'nord',
  'dracula',
  'TKOD',
  'Suprise',
  'amoled',
  'halloween',
  'christmas',
  'galaxy',
  'custom',
] as const;

type ThemeName = (typeof themes)[number];

function isThemeName(value: string | null): value is ThemeName {
  return value !== null && (themes as readonly string[]).includes(value);
}

function getInitialTheme(): ThemeName {
  if (typeof document !== 'undefined') {
    const domTheme = document.documentElement.dataset.techTheme;
    if (isThemeName(domTheme)) return domTheme;
  }

  if (typeof window !== 'undefined') {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (isThemeName(storedTheme)) return storedTheme;
  }

  return 'default';
}

export default function ThemePicker() {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.techTheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const handleThemeChange = (nextTheme: ThemeName) => {
    if (nextTheme === 'Suprise') {
      // Reset CTT to the Default theme.
      setTheme('default');

      // Force Docusaurus to Light mode.
      document.documentElement.dataset.theme = 'light';
      window.localStorage.setItem(colorModeKey, 'light');

      // Make sure Default is what gets restored on refresh.
      window.localStorage.setItem(storageKey, 'default');

      // Open the surprise in a new tab.
      window.open(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        '_blank',
        'noopener,noreferrer',
      );

      return;
    }

    setTheme(nextTheme);
  };

  return (
    <label className={styles.picker}>
      <span>Theme</span>
      <select
        aria-label="Choose color theme"
        value={theme}
        onChange={(event) =>
          handleThemeChange(event.target.value as ThemeName)
        }
      >
        <option value="default">Default</option>
        <option value="catppuccin">Catppuccin</option>
        <option value="nord">Nord</option>
        <option value="dracula">Dracula</option>
        <option value="TKOD">TKOD</option>
        <option value="Suprise">Suprise</option>
        <option value="amoled">AMOLED</option>
        <option value="halloween">Halloween</option>
        <option value="christmas">Christmas</option>
        <option value="galaxy">Galaxy</option>
        <option value="custom">Custom</option>
      </select>
    </label>
  );
}