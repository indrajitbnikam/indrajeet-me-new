import Link from 'next/link';
import ThemeToggleButton from '../../components/theme-toggle-button';

const Header = () => {
  return (
    <header className="text-gray-600">
      <div className="container mx-auto max-w-[1200px] flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span
            className="text-2xl text-gray-700 dark:text-[#f8f7f1]"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            <Link href="/">Indrajeet Nikam</Link>
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]">
            <Link href="/blogs">Blogs</Link>
          </a>
          <a className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]">
            <Link href="/projects">Projects</Link>
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
