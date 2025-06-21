import { useEffect, useState } from 'react';

// Shared state across all useTheme instances
let globalTheme: 'light' | 'dark' = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
let listeners: Set<() => void> = new Set();

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

export function useTheme(defaultTheme: 'light' | 'dark' = 'light') {
  const [theme, setThemeState] = useState(() => {
    return globalTheme || defaultTheme;
  });

  // Adding a listener that's notified when the theme is changed
  useEffect(() => {
    const listener = () => setThemeState(globalTheme);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = globalTheme === 'light' ? 'dark' : 'light';
    globalTheme = newTheme;
    setThemeState(newTheme);
    notifyListeners();
  };

  return { theme, toggleTheme };
}

export default useTheme;