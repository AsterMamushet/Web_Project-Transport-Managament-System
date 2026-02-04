const LangManager = {
  toggle: () => {
    const current = localStorage.getItem('gion_lang') || 'en';
    const next = current === 'en' ? 'am' : 'en';
    localStorage.setItem('gion_lang', next);
    location.reload();
  },

  init: () => {
    const lang = localStorage.getItem('gion_lang') || 'en';
    LangManager.apply(lang);
  },

  apply: (lang) => {
    if (typeof translations === 'undefined') return;
    const t = translations[lang];
    if (!t) return;

    // Update Toggle Label if exists
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'en' ? 'AM' : 'EN';

    // Update Body Font
    if (lang === 'am') {
      document.body.style.fontFamily = "'Nyala', 'sans-serif'";
    } else {
      document.body.style.fontFamily = "'Poppins', 'sans-serif'";
    }

    // Translate Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Translate Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });
  }
};

document.addEventListener('DOMContentLoaded', LangManager.init);
