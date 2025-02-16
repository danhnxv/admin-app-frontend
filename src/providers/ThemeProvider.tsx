'use client';

import React, { useEffect } from 'react';

interface ThemeProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProps) => {
  const theme = "dark";

  useEffect(() => {
    theme && (document.body.className = theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
