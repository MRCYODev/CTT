import {useEffect, useState} from 'react';
import styles from './styles.module.css';

const storageKey = 'computer-technician-tools-theme';
const themes = ['default', 'catppuccin', 'nord', 'dracula', 'TKOD' , 'custom'] as const;
type ThemeName = (typeof themes)[number];

export default function ThemePicker() {
  const [theme, setTheme] = useState<ThemeName>('default');

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as ThemeName | null;
    if (saved && themes.includes(saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.techTheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <label className={styles.picker}>
      <span>Theme</span>
      <select aria-label="Choose color theme" value={theme} onChange={(event) => setTheme(event.target.value as ThemeName)}>
        <option value="default">Default</option>
        <option value="catppuccin">Catppuccin</option>
        <option value="nord">Nord</option>
        <option value="dracula">Dracula</option>
        <option value="TKOD">TKOD</option>
        <option value="custom">Custom</option>
  
      </select>
    </label>
  );
}
