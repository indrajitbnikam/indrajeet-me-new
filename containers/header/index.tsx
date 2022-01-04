import { useState } from 'react';
// Components
import ThemeToggleButton from '../../components/theme-toggle-button';
import ThemeIconWrapper from '../../hoc/theme-wrapper';
import { RiMenuFill } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import styles from './style.module.scss';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path).finally(() => setIsOpen(false));
  };

  const getMobileNavButton = () => {
    return isOpen ? (
      <ThemeIconWrapper>
        <VscChromeClose
          className={`cursor-pointer ${styles.spinOneTime}`}
          onClick={() => setIsOpen(false)}
        />
      </ThemeIconWrapper>
    ) : (
      <ThemeIconWrapper>
        <RiMenuFill
          className={`cursor-pointer ${styles.spinOneTime}`}
          onClick={() => setIsOpen(true)}
        />
      </ThemeIconWrapper>
    );
  };

  return (
    <header className="text-gray-600">
      <div className="container mx-auto max-w-[1200px] flex flex-row flex-wrap p-5 items-center">
        <p
          className="cursor-pointer flex title-font font-medium items-center text-2xl text-gray-700 dark:text-[#f8f7f1]"
          style={{ fontFamily: 'Pacifico, cursive' }}
          onClick={() => navigateTo('/')}
        >
          Indrajeet Nikam
        </p>
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
          <p
            className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]"
            onClick={() => navigateTo('/projects')}
          >
            Projects
          </p>
          {/* <p
            className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]"
            onClick={() => navigateTo('/blogs')}
          >
            Blogs
          </p> */}
          <p
            className="mr-8 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]"
            onClick={() => navigateTo('/contact')}
          >
            Contact
          </p>
          <p
            className="mr-8 px-4 py-2 cursor-pointer rounded-lg border border-gray-600 dark:border-transparent bg-[#ffffffb0] dark:bg-[#fffdf81a] hover:text-gray-900 dark:text-gray-400 dark:hover:text-[#f8f7f1]"
            onClick={() => navigateTo('/resume')}
          >
            Resume
          </p>
          <ThemeToggleButton />
        </nav>

        <nav className="md:hidden ml-auto flex flex-wrap items-center text-base justify-center">
          <ThemeToggleButton extraClasses="mr-4" />
          {getMobileNavButton()}
        </nav>
      </div>
      <Transition show={isOpen}>
        {(ref) => (
          <div className="md:hidden">
            <div
              ref={ref}
              className="mx-4 p-4 space-y1 sm:px-3 flex flex-col rounded-xl bg-[#ffffffb0] dark:bg-[#fffdf81a]"
            >
              <div className="w-full text-center py-3 mb-2 rounded-xl group hover:bg-sky-100 dark:hover:bg-[#e4cf59] dark:text-gray-400 hover:text-sky-800 dark:hover:text-gray-800">
                <p
                  className="font-semibold cursor-pointer"
                  onClick={() => navigateTo('/projects')}
                >
                  Projects
                </p>
              </div>
              {/* <div className="w-full text-center py-3 mb-2 rounded-xl group hover:bg-sky-100 dark:hover:bg-[#e4cf59] dark:text-gray-400 hover:text-sky-800 dark:hover:text-gray-800">
                <p
                  className="font-semibold cursor-pointer"
                  onClick={() => navigateTo('/blogs')}
                >
                  Blogs
                </p>
              </div> */}
              <div className="w-full text-center py-3 mb-2 rounded-xl group hover:bg-sky-100 dark:hover:bg-[#e4cf59] dark:text-gray-400 hover:text-sky-800 dark:hover:text-gray-800">
                <p
                  className="font-semibold cursor-pointer"
                  onClick={() => navigateTo('/contact')}
                >
                  Contact
                </p>
              </div>
              <div className="w-full text-center py-3 mb-2 rounded-xl group border border-gray-600 dark:border-[#e4cf59] hover:bg-sky-100 dark:hover:bg-[#e4cf59] dark:text-gray-400 hover:text-sky-800 dark:hover:text-gray-800">
                <p
                  className="font-semibold cursor-pointer"
                  onClick={() => navigateTo('/resume')}
                >
                  Resume
                </p>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
