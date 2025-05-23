'use client';

import React from 'react';
import Link from 'next/link';

import { Download, Send } from 'lucide-react';
import * as Ri from 'react-icons/ri';

import * as Shad from '@/components/ui';
import * as MyComponents from '@/components';

export const Hero = () => {
  return (
    <section className='py-12 lg:py-24 h-[84vh] lg:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left z-10'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Web Developer
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Cosmo Rodrigues</h1>
            <p className='subtitle max-w-[490px] mx-auto lg:mx-0'>
              {`Hello! I'm Cosmo Rodrigues, a passionate and experienced Full Stack Developer with a strong focus on front-end development, based in Brazil. Over the past 4+ years, I've been dedicated to designing and implementing solutions that bridge technology and real-world challenges, driving business growth and user satisfaction.`}
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12'>
              <Link href='/contact'>
                <Shad.Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Shad.Button>
              </Link>
              <Shad.Button className='gap-x-2' variant='secondary'>
                Download CV
                <Download size={18} />
              </Shad.Button>
            </div>
            <MyComponents.Socials
              containerStyles='flex gap-x-6 mx-auto lg:mx-0'
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          <div className='hidden lg:flex relative'>
            {/* {badge 01} */}
            <MyComponents.Badge
              badgeText='Years Of Experience'
              containerStyles='absolute top-[20%] -left-[8rem]'
              endCountNum={3}
              endCountText=''
              icon={<Ri.RiBriefcase4Fill />}
            />
            {/* {badge 02} */}
            <MyComponents.Badge
              badgeText='Finished Projects'
              containerStyles='absolute top-[50%] -left-[3rem]'
              endCountNum={15}
              endCountText=''
              icon={<Ri.RiTodoFill />}
            />
            {/* {badge 03} */}
            <MyComponents.Badge
              badgeText='People Reached'
              containerStyles='absolute top-[50%] right-0 min-w-[220px]'
              endCountNum={1}
              endCountText='M+'
              icon={<Ri.RiTeamFill />}
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-12'></div>
            <div className='bg-hero_shape w-[600px] h-[500px] bg-no-repeat absolute -top-1 -left-12'></div>
            <MyComponents.DevImage
              containerStyles='w-[464px] h-[538px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>

        <div className='hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce'>
          <Ri.RiArrowDownLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};
