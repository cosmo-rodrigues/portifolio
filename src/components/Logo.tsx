'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps extends ComponentProps {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' className={cn(className)}>
      <Image src='/logo.png' height={54} width={54} alt='logo' priority />
    </Link>
  );
};
