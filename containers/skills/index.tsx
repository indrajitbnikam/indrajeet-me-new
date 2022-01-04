import React from 'react';
import SkillItem from './skill-item';

const Skills = () => {
  const primarySkills = [
    {
      name: 'React',
      src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    },
    {
      name: 'Angular',
      src: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
    },
    {
      name: 'SCSS',
      src: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    },
  ];

  const secondarySkills = [
    {
      name: 'Next.js',
      src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    },
    {
      name: 'Tailwind CSS',
      src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    },
    {
      name: '.Net',
      src: 'https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg',
    },
    {
      name: 'Node',
      src: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
    },
    {
      name: 'AWS',
      src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    },
    {
      name: 'Firebase',
      src: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
    },
  ];

  return (
    <div className="text-gray-600 dark:text-gray-300 text-[26px]">
      <p className="mb-4">Primary skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {primarySkills.map(({ name, src }) => (
          <SkillItem key={name} iconSrc={src} name={name} />
        ))}
      </div>
      <p className="mb-4">Also know,</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {secondarySkills.map(({ name, src }) => (
          <SkillItem key={name} iconSrc={src} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
