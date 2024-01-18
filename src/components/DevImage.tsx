'use client';

import Image from 'next/image';
import React from 'react';

export const DevImage = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt='Cosmo Rodrigues' fill priority />
    </div>
  );
};
