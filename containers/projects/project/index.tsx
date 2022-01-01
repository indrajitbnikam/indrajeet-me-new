import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import client from '../../../client';
import { getFormattedDate } from '../../../helpers/date';
import Tags from '../../../components/tags';
import { ProjectInfo } from '../types';
import { AiOutlineEye, AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import Modal from '../../../components/modal';

const Project = ({ title, desc, img, repo, demo, date, tags }: ProjectInfo) => {
  const [open, setOpen] = useState(false);
  const imageProps = useNextSanityImage(client, img);

  const openPreview = () => {
    setOpen(true);
  };

  const openProjectRepo = () => {
    window.open(repo, '_blank');
  };

  const openProjectDemo = () => {
    window.open(demo, '_blank');
  };

  return (
    <div className="rounded-lg overflow-hidden flex flex-col border border-transparent hover:border-sky-400 dark:hover:border-[#e4cf59] bg-[#fffdf8b0] dark:bg-[#fffdf81a] hover:scale-[101%] transition-transform">
      <Image {...imageProps} alt={title} layout="responsive" />
      <div className="px-6 pt-4 pb-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4 mt-2 h-6">
          <p className="flex m-0 items-center">
            <span className="text-gray-600 dark:text-gray-400">
              <MdDateRange />
            </span>
            <span className="ml-1 inline-flex rounded-full w-fit align-middle text-xs text-gray-600 dark:text-gray-400">
              {getFormattedDate(date)}
            </span>
          </p>
          <div className="flex items-center">
            <div
              className="hidden cursor-pointer rounded-lg mr-2 px-2 py-2 sm:flex items-center text-xl font-medium dark:hover:bg-[#e4cf59] hover:bg-sky-300 hover:text-sky-800 dark:hover:text-gray-800 text-gray-700 dark:text-gray-300 dark:bg-gray-700 bg-gray-200"
              onClick={() => openPreview()}
            >
              <AiOutlineEye />
            </div>
            <div
              className="cursor-pointer rounded-lg mr-2 px-2 py-2 flex items-center text-xl font-medium dark:hover:bg-[#e4cf59] hover:bg-sky-300 hover:text-sky-800 dark:hover:text-gray-800 text-gray-700 dark:text-gray-300 dark:bg-gray-700 bg-gray-200"
              onClick={() => openProjectRepo()}
            >
              <AiOutlineGithub />
            </div>
            <div
              className="cursor-pointer rounded-lg px-2 py-2 flex items-center text-xl font-medium dark:hover:bg-[#e4cf59] hover:bg-sky-300 hover:text-sky-800 dark:hover:text-gray-800 text-gray-700 dark:text-gray-300 dark:bg-gray-700 bg-gray-200"
              onClick={() => openProjectDemo()}
            >
              <AiOutlineLink />
            </div>
          </div>
        </div>
        <p className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </p>
        <p className="line-clamp-3 text-gray-600 dark:text-gray-400 mb-6">
          {desc}
        </p>
        <Tags tags={tags.map((tag) => tag.name)} />
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <Image
            {...imageProps}
            alt={title}
            layout="responsive"
            className="cursor-pointer rounded-xl aspect-auto"
            onClick={() => setOpen(true)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Project;
