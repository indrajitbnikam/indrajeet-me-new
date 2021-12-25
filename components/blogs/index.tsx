import React from 'react';
import Blog from './blog';
import Link from 'next/link';
import { BlogInfo } from './types';

const Blogs = ({ blogs }: { blogs: BlogInfo[] }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-8">
        {blogs && blogs.map((blog: any) => <Blog key={blog.title} {...blog} />)}
      </div>
      <div className="mt-8 py-2 flex self-center">
        <div className="px-4 py-2 rounded border border-sky-400 dark:border-[#e4cf59] hover:border-sky-200 hover:bg-sky-200 dark:hover:bg-[#e4cf59]  text-sky-800 dark:text-[#e4cf59] dark:hover:text-gray-800">
          <Link href="/blogs">Show more</Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
