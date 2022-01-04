import Image from 'next/image';
import React from 'react';

const SkillItem = ({ iconSrc, name, description }: any) => {
  return (
    <div className="flex flex-col items-center sm:justify-start justify-center sm:flex-row sm:align-middle border rounded-md border-transparent px-6 py-4 bg-[#ffffffb0] dark:bg-[#fffdf81a] sm:hover:scale-105 transition-transform">
      <div className="mb-1 sm:mr-4 flex align-middle">
        <Image alt="name" src={iconSrc} width={32} height={32} />
      </div>
      <p className="flex align-middle text-xl m-0 p-0 text-gray-600 dark:text-gray-300">
        {name}
      </p>
    </div>
  );
};

export default SkillItem;
