'use client';

import React from 'react';
import CountUp from 'react-countup';

interface PropsInterface {
  badgeText: string;
  containerStyles: string;
  endCountNum: number;
  endCountText: string;
  icon: React.ReactNode;
}

export const Badge = ({
  badgeText,
  containerStyles,
  endCountNum,
  endCountText,
  icon,
}: PropsInterface) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-primary'>
          <CountUp delay={1} duration={4} end={endCountNum} />
          {endCountText}
        </div>
        <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>
          {badgeText}
        </div>
      </div>
    </div>
  );
};
