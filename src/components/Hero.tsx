'use client';

import React from 'react';
import Link from 'next/link';

import { Download, Send } from 'lucide-react';
import * as Ri from 'react-icons/ri';

import * as Shad from '@/components/ui';
import * as MyComponents from '@/components';

export const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Web Developer
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Cosmo Rodrigues</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              {`I am an experienced Full Stack Developer (Front End heavy). With 3
              years of experience in the software industry, I've been deeply
              involved in crafting solutions that bridge the gap between
              technology and real-world challenges.`}
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Shad.Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Shad.Button>
              </Link>
              <Shad.Button className='gap-x2' variant='secondary'>
                Download CV
                <Download size={18} />
              </Shad.Button>
            </div>
          </div>
          <div className='hidden lg:flex relative'>image</div>
        </div>

        <div className='hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <Ri.RiArrowDownLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};
