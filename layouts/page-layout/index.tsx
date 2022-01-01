import React, { useEffect, useState } from 'react';
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import styles from './style.module.scss';
import classNames from 'classnames';
import { useTheme } from 'next-themes';

const PageLayout = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const getThemeClass = theme === 'dark' ? styles.bgDark : styles.bgLight;

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={classNames('min-h-screen flex flex-col', getThemeClass)}>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
