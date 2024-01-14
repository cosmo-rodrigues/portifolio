'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

interface MobileNavProps extends ComponentProps {}

export const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <div className={cn(className)}>
      <h1>MobileNav</h1>
    </div>
  );
};
