import React from 'react';
import { useTheme } from 'next-themes';
import styles from './style.module.scss';
import { IconContext } from 'react-icons';
import { RiMoonClearFill, RiSunLine } from 'react-icons/ri';

const ThemeToggleButton = ({ extraClasses, ...props }: any) => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  const onThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <IconContext.Provider
      value={{ size: '24px', color: isDarkTheme ? '#f8f7f1' : '#4B5563' }}
    >
      {isDarkTheme ? (
        <RiMoonClearFill
          className={`cursor-pointer ${styles.spinOneTime} ${extraClasses}`}
          onClick={onThemeToggle}
          {...props}
        />
      ) : (
        <RiSunLine
          className={`cursor-pointer ${styles.spinOneTime} ${extraClasses}`}
          onClick={onThemeToggle}
          {...props}
        />
      )}
    </IconContext.Provider>
  );
};

export default ThemeToggleButton;
