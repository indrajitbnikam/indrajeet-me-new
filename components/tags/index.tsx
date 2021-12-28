import React from 'react';

const Tags = ({ tags = [] }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <div
          key={tag}
          className="rounded-full mr-2 mb-2 px-2 flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:bg-gray-700 bg-gray-200 dark:hover:text-gray-200"
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
