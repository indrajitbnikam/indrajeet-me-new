import React, { useState } from 'react';
import Image from 'next/image';
import {
  SiGithub,
  SiHashnode,
  SiLinkedin,
  SiStackoverflow,
  SiTwitter,
  SiXing,
} from 'react-icons/si';
import { openUrl } from '../../helpers/url';

const Hero = () => {
  const iamPhrases = ['Beautiful', 'Scalable', 'Considerate'];
  const [iamPhrase, setIamPhrase] = useState(iamPhrases[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openHashnode = () => {
    openUrl('https://indrajitbnikam.hashnode.dev/');
  };

  const openGithub = () => {
    openUrl('https://github.com/indrajitbnikam');
  };

  const openStackOverflow = () => {
    openUrl('https://stackoverflow.com/users/9792373/indrajeet');
  };

  const openTwitter = () => {
    openUrl('https://twitter.com/indrajeet_nikam');
  };

  const openLinkedIn = () => {
    openUrl('https://www.linkedin.com/in/indrajeet-nikam-3737a8101/');
  };

  const openXing = () => {
    openUrl('https://www.xing.com/profile/Indrajeet_Nikam2');
  };

  setTimeout(() => {
    let newIndex = 0;
    if (currentIndex !== 2) {
      newIndex = currentIndex + 1;
    }
    setIamPhrase(iamPhrases[newIndex]);
    setCurrentIndex(newIndex);
  }, 4000);

  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-[1100px] mx-auto flex justify-between px-5 md:px-10 py-10 md:py-24 md:flex-row flex-col-reverse items-center">
        <div className="flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="leading-relaxed text-4xl sm:text-6xl font-medium text-gray-800 dark:text-[#f8f7f1]">
            Hello!
          </h1>
          <p className="leading-relaxed text-4xl sm:text-6xl dark:text-gray-300">
            <span>
              I am{' '}
              <span className="leading-relaxed font-semibold text-sky-400 dark:text-[#e4cf59]">
                React Dev
              </span>
            </span>
          </p>
          <p className="leading-relaxed text-2xl ml-0 sm:ml-1 sm:text-3xl text-gray-400">
            I build{' '}
            <span className="underline underline-offset-2 text-gray-600 decoration-sky-400 dark:decoration-[#e4cf59]">
              {iamPhrase}
            </span>{' '}
            products.
          </p>
          <div className="flex gap-4 sm:gap-8 mt-8 items-center text-2xl text-gray-600 dark:text-gray-400">
            <SiHashnode
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openHashnode()}
            />
            <SiGithub
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openGithub()}
            />
            <SiStackoverflow
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openStackOverflow()}
            />
            <SiTwitter
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openTwitter()}
            />
            <SiLinkedin
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openLinkedIn()}
            />
            <SiXing
              className="cursor-pointer dark:hover:text-[#e4cf59] hover:text-sky-300"
              onClick={() => openXing()}
            />
          </div>
        </div>
        <div className="mb-10 md:mb-0 flex justify-end align-middle">
          <div className="rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden ring ring-gray-600 hover:ring-sky-400 ring-offset-4 ring-offset-[#f8f7f1] dark:ring-[#f8f7f1] dark:ring-offset-[#374151] dark:hover:ring-[#e4cf59] hover:ring-offset-8 hover:scale-105 transition-transform">
            <Image
              src="/Indra-dp.jpg"
              alt="Indrajeet profile picture"
              className="hover:"
              height="100%"
              width="100%"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
