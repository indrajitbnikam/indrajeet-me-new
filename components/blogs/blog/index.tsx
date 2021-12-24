import React from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import client from '../../../client';

// Images
import { FiExternalLink } from 'react-icons/fi';

interface BlogInfo {
  title: string;
  desc: string;
  img: any;
  url: string;
  date: string;
}

const Blog = ({ title, desc, img, date, url }: BlogInfo) => {
  const imageProps = useNextSanityImage(client, img);

  return (
    <div className="rounded-lg overflow-hidden flex flex-col border dark:border-0 bg-[#fffdf8b0] dark:bg-[#fffdf81a] hover:translate-y-[-4px] transition-transform">
      <Image {...imageProps} alt={title} layout="responsive" />
      <div className="px-6 pt-4 pb-5 flex flex-col flex-grow">
        <p className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </p>
        <p className="line-clamp-3 text-gray-600 dark:text-gray-400 mb-6">
          {desc}
        </p>
        <div className="mt-auto">
          <span className="px-4 py-1 inline-flex rounded-full w-fit align-middle text-sm text-sky-700 bg-sky-200 dark:bg-[#e4cf59] dark:text-gray-800">
            {date}
          </span>
          <span className="inline-block ml-4 text-sky-700 dark:text-[#e4cf59]">
            <a target="_blank" rel="noreferrer" href={url}>
              <FiExternalLink className="inline hover:animate-pulse" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
