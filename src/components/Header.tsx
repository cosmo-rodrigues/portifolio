'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

import * as MyComponents from '.';

interface HeaderProps extends ComponentProps {}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(className)}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <MyComponents.Logo />
          <div className='flex items-center gap-x-6'>
            <MyComponents.Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='flex justify-between intens-center gap-x-6'
              underlineStyles=''
            />
            <MyComponents.ThemeToggler />
            <div className='xl:hidden'>
              <MyComponents.MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
