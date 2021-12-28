import React, { ComponentType } from 'react';
import { useTheme } from 'next-themes';
import { IconContext } from 'react-icons';

const ThemeIconWrapper = ({ children }: { children: JSX.Element }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <IconContext.Provider
      value={{ size: '24px', color: isDarkTheme ? '#f8f7f1' : '#4B5563' }}
    >
      {children}
    </IconContext.Provider>
  );
};

export default ThemeIconWrapper;
