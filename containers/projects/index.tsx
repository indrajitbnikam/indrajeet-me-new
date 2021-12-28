import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getFirstNProjects } from '../../services/api';
import Project from './project';
import { ProjectInfo } from './types';

const Projects = ({
  projects,
  showAll = false,
}: {
  projects: ProjectInfo[];
  showAll?: boolean;
}) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-8">
        {projects &&
          projects.map((project: any) => (
            <Project key={project.title} {...project} />
          ))}
      </div>

      {!showAll && (
        <div className="mt-8 py-2 flex self-center">
          <div className="px-4 py-2 rounded border border-sky-400 dark:border-[#e4cf59] hover:border-sky-200 hover:bg-sky-200 dark:hover:bg-[#e4cf59]  text-sky-800 dark:text-[#e4cf59] dark:hover:text-gray-800">
            <Link href="/projects">Show more</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;