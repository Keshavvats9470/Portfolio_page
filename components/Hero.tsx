import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi there, This is Keshav Vats`,
      '</ For those who do coding />',
      'Drink-Coffee-&-Start-Coding',
    ],
    loop: true,
    delaySpeed: 2100,
  });

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-44 w-44 mx-auto object-cover'
        src='/bh.jpg'
        alt=''
      />

      <div className='z-20'>
        <h2 className='text-xl font-semibold uppercase text-yellow-500 pb-2 tracking-[15px] border border-y-2 border-x-0 border-blue-900/30 p-2'>
          Developer/WEB
        </h2>
        <h1 className='text-4xl lg:text-4xl font-semibold px-10'>
          <span className='mr-5'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#experience'>
            <button className='heroButton '>Experience</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
