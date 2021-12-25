import React from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import client from '../../../client';

// Images
import { MdDateRange } from 'react-icons/md';
import { useRouter } from 'next/router';
import { getFormattedDate } from '../../../helpers/date';
import Tags from '../../tags';
import { BlogInfo } from '../types';

const Blog = ({ title, desc, img, date, url, tags }: BlogInfo) => {
  const imageProps = useNextSanityImage(client, img);

  const openBlog = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="rounded-lg overflow-hidden flex flex-col border border-transparent hover:border-sky-400 dark:hover:border-[#e4cf59] bg-[#fffdf8b0] dark:bg-[#fffdf81a] hover:scale-[101%] transition-transform">
      <Image
        {...imageProps}
        alt={title}
        layout="responsive"
        className="cursor-pointer"
        onClick={openBlog}
      />
      <div className="px-6 pt-4 pb-5 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <span className="text-gray-600 dark:text-gray-400">
            <MdDateRange />
          </span>
          <span className="ml-1 inline-flex rounded-full w-fit align-middle text-xs text-gray-600 dark:text-gray-400">
            {getFormattedDate(date)}
          </span>
        </div>
        <p
          className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2 cursor-pointer"
          onClick={openBlog}
        >
          {title}
        </p>
        <p className="line-clamp-3 text-gray-600 dark:text-gray-400 mb-6">
          {desc}
        </p>
        <Tags tags={tags.map((tag) => tag.name)} />
      </div>
    </div>
  );
};

export default Blog;
