const handleThemeChange = (theme: string) => {
  if (theme === 'Surprice') {
    window.location.assign(
      new URL('/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com').toString()
    );
    return;
  }

  setTheme(theme);
};