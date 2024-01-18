'use client';

import Link from 'next/link';
import React from 'react';
import * as Ri from 'react-icons/ri';

const icons = [
  {
    name: <Ri.RiFacebookBoxFill />,
    path: 'https://www.facebook.com/100090862816878',
  },
  {
    name: <Ri.RiGithubFill />,
    path: 'https://github.com/cosmo-rodrigues',
  },
  {
    name: <Ri.RiInstagramFill />,
    path: 'https://www.instagram.com/cosmorodrigues_/',
  },
  {
    name: <Ri.RiLinkedinFill />,
    path: 'https://www.linkedin.com/in/cosmo-rodrigues/',
  },
  {
    name: <Ri.RiYoutubeFill />,
    path: 'https://youtube.com/@cosmo-rodrigues',
  },
];

export const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link target='_blank' href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};
