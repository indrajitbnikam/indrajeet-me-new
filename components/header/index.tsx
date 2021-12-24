import { useState } from 'react';
import ThemeToggleButton from '../theme-toggle-button';

const Header = () => {
  return (
    <header className="text-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span
            className="ml-3 text-2xl text-gray-700 dark:text-[#f8f7f1]"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Indrajeet Nikam
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]">
            Blogs
          </a>
          <a className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]">
            Projects
          </a>
          <a className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]">
            Journey
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
