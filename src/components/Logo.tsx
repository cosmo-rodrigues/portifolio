'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

interface LogoProps extends ComponentProps {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn(className)}>
      <h1>Logo</h1>
    </div>
  );
};
