import React from 'react';
import SkillItem from './skill-item';

const Skills = () => {
  const skillsArray = [
    {
      name: 'React',
      src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    },
    {
      name: 'Next.js',
      src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
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
      name: 'Tailwind CSS',
      src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
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
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skillsArray.map(({ name, src }) => (
        <SkillItem key={name} iconSrc={src} name={name} />
      ))}
    </div>
  );
};

export default Skills;
