'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (localStorage.getItem('ui-theme') === null) {
      localStorage.setItem('ui-theme', 'dark');
    }
    
    // Восстанавливаем тему из localStorage
    const storedTheme = localStorage.getItem('ui-theme') as 'light' | 'dark' | 'system';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    if (storedTheme === 'system' || !storedTheme) {
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  // Избегаем hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}