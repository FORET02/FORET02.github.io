(() => {
  const storageKey = 'theme';
  const darkClass = 'dark-mode';
  const doc = document.documentElement;

  const applyTheme = (mode, { persist = false } = {}) => {
    if (mode === 'dark') {
      doc.classList.add(darkClass);
    } else {
      doc.classList.remove(darkClass);
    }

    doc.dataset.theme = mode;

    if (persist) {
      try {
        localStorage.setItem(storageKey, mode);
      } catch {
        // ignore storage errors
      }
    }

    window.dispatchEvent(
      new CustomEvent('foret:theme-change', { detail: { theme: mode } })
    );
  };

  try {
    const stored = localStorage.getItem(storageKey);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isStored = stored === 'dark' || stored === 'light';
    const mode = isStored ? stored : prefersDark ? 'dark' : 'light';

    applyTheme(mode, { persist: false });
  } catch {

  }
})();
