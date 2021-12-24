import Image from 'next/image';
import React from 'react';

const SkillItem = ({ iconSrc, name, description }: any) => {
  return (
    <div className="flex align-middle border rounded-md border-transparent px-6 py-4 hover:border-sky-400 dark:hover:border-[#e4cf59] hover:scale-[101%] transition-transform">
      <div className="mr-4 flex align-middle">
        <Image alt="name" src={iconSrc} width={32} height={32} />
      </div>
      <p className="flex align-middle text-xl m-0 p-0 text-gray-600 dark:text-gray-300">
        {name}
      </p>
    </div>
  );
};

export default SkillItem;
