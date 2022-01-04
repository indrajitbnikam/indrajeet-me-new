import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import configuredSanityClient from '../../client';
import { getFormattedDate } from '../../helpers/date';
import Modal from '../modal';

const JourneyItem = ({ name, desc, img, date }: any) => {
  const [open, setOpen] = useState(false);

  const imageProps = useNextSanityImage(configuredSanityClient, img);

  return (
    <>
      <div className="max-w-lg flex flex-col items-start border-2 border-transparent hover:border-sky-400 dark:hover:border-[#e4cf59] bg-[#ffffffb0] dark:bg-[#fffdf810] rounded-lg px-5 py-4 mb-6">
        <p className="text-xl font-semibold mb-1">{name}</p>
        {desc && (
          <p className="text-md text-gray-400 mb-2 line-clamp-2">{desc}</p>
        )}
        <div className="flex items-center mb-2">
          <span className="text-gray-600 dark:text-gray-400">
            <MdDateRange />
          </span>
          <span className="ml-1 inline-flex rounded-full w-fit align-middle text-md text-gray-600 dark:text-gray-400">
            {getFormattedDate(date)}
          </span>
        </div>
        {imageProps && (
          <div className="rounded-md mx-auto w-[250px] sm:w-[400px] mt-4">
            <Image
              {...imageProps}
              alt={name}
              layout="responsive"
              className="cursor-pointer rounded-xl"
              onClick={() => setOpen(true)}
            />
          </div>
        )}
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <Image
            {...imageProps}
            alt={name}
            layout="responsive"
            className="cursor-pointer rounded-xl"
            onClick={() => setOpen(true)}
          />
        </Modal>
      )}
    </>
  );
};

export default JourneyItem;
