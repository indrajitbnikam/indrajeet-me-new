import React from 'react';

const SectionLayout = ({ title, highlightedTitle, children }: any) => {
  return (
    <section>
      <div className="container max-w-[1200px] mx-auto flex px-5 py-8 flex-col">
        <p className="text-3xl sm:text-4xl text-gray-600 dark:text-gray-300">
          {`${title} `}
          <span className="font-semibold text-sky-400 dark:text-[#e4cf59]">
            {highlightedTitle}
          </span>
        </p>
        <div className="p-5 pt-8 sm:pt-14">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
