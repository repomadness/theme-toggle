import React, { ReactNode, useEffect } from 'react';
import useTheme from '../../hooks/useTheme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
}