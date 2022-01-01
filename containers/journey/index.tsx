import React from 'react';
import JourneyItem from '../../components/journey-item';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';

const Journey = ({ journey }: any) => {
  const getJourneyIcon = (journeyType: string) => {
    switch (journeyType) {
      case 'edu':
        return <BsBook className="text-2xl" />;
      case 'personal':
        return <AiOutlineHeart className="text-2xl" />;
      case 'professional':
        return <FaLaptopCode className="text-2xl" />;
      case 'achievement':
        return <AiOutlineStar className="text-2xl" />;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-start">
      {journey.map((item: any) => (
        <div key={item.name} className="flex relative pb-4">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-200 dark:bg-[#e4cf59] inline-flex items-center justify-center text-gray-600 relative z-10">
            {getJourneyIcon(item.journeyType)}
          </div>
          <div className="flex-grow pl-4">
            <JourneyItem {...item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
