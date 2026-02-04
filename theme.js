const ThemeManager = {
  init: () => {
    const savedTheme = localStorage.getItem('gion_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    ThemeManager.updateIcon(savedTheme);
  },

  toggle: () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('gion_theme', next);
    ThemeManager.updateIcon(next);
  },

  updateIcon: (theme) => {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    if (theme === 'dark') {
      btn.innerHTML = '<i class="fas fa-moon"></i>';
      btn.classList.remove('btn-outline-dark');
      btn.classList.add('btn-outline-light');
    } else {
      btn.innerHTML = '<i class="fas fa-sun"></i>';
      btn.classList.remove('btn-outline-light');
      btn.classList.add('btn-outline-dark');
    }
  }
};

document.addEventListener('DOMContentLoaded', ThemeManager.init);
