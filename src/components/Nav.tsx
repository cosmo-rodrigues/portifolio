'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavProps extends ComponentProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) => {
  const path = usePathname();
  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
