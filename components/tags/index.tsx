import React from 'react';

const Tags = ({ tags = [] }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <div
          key={tag}
          className="rounded-full mr-2 mb-2 px-2 pb-1 flex items-center text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:bg-gray-700 bg-gray-200 dark:hover:text-gray-200"
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
