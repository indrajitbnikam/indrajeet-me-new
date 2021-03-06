import React from 'react';
import Blog from './blog';
import Link from 'next/link';
import { BlogInfo } from './types';

const Blogs = ({
  blogs,
  showAll = false,
}: {
  blogs: BlogInfo[];
  showAll?: boolean;
}) => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8'>
        {blogs && blogs.map((blog: any) => <Blog key={blog.title} {...blog} />)}
      </div>

      {!showAll && (
        <div className='flex self-center py-2 mt-8'>
          <div className='px-4 py-2 rounded border border-sky-400 dark:border-[#e4cf59] hover:border-sky-200 hover:bg-sky-200 dark:hover:bg-[#e4cf59]  text-sky-800 dark:text-[#e4cf59] dark:hover:text-gray-800'>
            <Link href='/blogs'>Show more</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
