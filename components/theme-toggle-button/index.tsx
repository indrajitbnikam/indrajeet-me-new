import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconContext } from 'react-icons';
import { RiMoonClearFill, RiSunLine } from 'react-icons/ri';
import styles from './style.module.scss';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  const onThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <IconContext.Provider
      value={{ size: '24px', color: isDarkTheme ? '#f8f7f1' : undefined }}
    >
      {isDarkTheme ? (
        <RiMoonClearFill
          className={`cursor-pointer ${styles.spinOneTime}`}
          onClick={onThemeToggle}
        />
      ) : (
        <RiSunLine
          className={`cursor-pointer ${styles.spinOneTime}`}
          onClick={onThemeToggle}
        />
      )}
    </IconContext.Provider>
  );
};

export default ThemeToggleButton;
