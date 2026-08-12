(function () {
  'use strict';

  var storageKey = 'computer-technician-tools-theme';
  var themes = {
    'default': true,
    'catppuccin': true,
    'nord': true,
    'dracula': true,
    'TKOD': true,
    'Surprice': true,
    'amoled': true,
    'halloween': true,
    'christmas': true,
    'galaxy': true,
    'custom': true
  };

  try {
    var saved = window.localStorage.getItem(storageKey);
    var theme = themes[saved] ? saved : 'default';
    document.documentElement.setAttribute('data-tech-theme', theme);
  } catch (_) {
    document.documentElement.setAttribute('data-tech-theme', 'default');
  }
})();
