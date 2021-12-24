import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const iamPhrases = ['#ReactDeveloper', '#Web3Evangelist', '#TechEnthusiast'];
  const [iamPhrase, setIamPhrase] = useState(iamPhrases[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="container max-w-[1000px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl font-medium text-gray-800 dark:text-[#f8f7f1]">
            Hello!
          </h1>
          <p className="leading-relaxed text-6xl dark:text-gray-300">
            <span>
              I am{' '}
              <span className="font-semibold text-sky-400 dark:text-[#e4cf59]">
                Indrajeet.
              </span>
            </span>
          </p>
          <p className="leading-relaxed text-3xl dark:text-gray-300">
            <span className="underline underline-offset-2 decoration-sky-400 dark:decoration-[#e4cf59]">
              {iamPhrase}
            </span>
          </p>
        </div>
        <div className="flex justify-end align-middle">
          <div className="rounded-full h-[400px] w-[400px] overflow-hidden ring ring-gray-600 hover:ring-sky-400 ring-offset-4 ring-offset-[#f8f7f1] dark:ring-[#f8f7f1] dark:ring-offset-[#374151] dark:hover:ring-[#e4cf59] hover:ring-offset-8 hover:scale-105 transition-transform">
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
