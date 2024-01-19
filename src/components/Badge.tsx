'use client';

import React from 'react';

interface PropsInterface {
  badgeText: string;
  containerStyles: string;
  endCountNum: number;
  endCountText: string;
  icon: string;
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
    </div>
  );
};
