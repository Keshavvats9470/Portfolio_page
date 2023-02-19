import { motion } from 'framer-motion';
import React from 'react';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly items-center bg-[black] border border-[#000046]/30 mb-6'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] font-semibold text-gray-300 text-3xl '>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          // opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='/batmanHenry.png'
        className='-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56  rounded-full object-cover 
        sm:w-28 sm:h-28 
        md:rounded-lg md:w-64 md:h-95 xl:w-[440px] xl:h-[370px] justify-center border border-white/40'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold text-gray-200'>
          Here is a little{' '}
          <span className='underline decoration-[#FDA512]/50'>background</span>{' '}
          .
        </h4>
        <p className='text-md text-yellow-500 opacity-90'>
          Currently an Information Technology student at Kalinga Institute of
          Industrial Technology, Bhubaneswar, India. Seeking a who job where i
          can apply the knowledge and skills that i have learnt past few years
          and can also gain some experience on how things works in a company.
          <br />
          <br />
          <p className='text-sm text-gray-300  tracking-[5px] mb-2 font-semibold'>
            EDUCATION DETAILS:{' '}
          </p>
          -- Kalinga Institue of Industrial Technology, ( Sept. 2020 - July 2024
          )
          <br />
          <p className='text-gray-300 mt-1'>CGPA - 8.4</p>
          <p>
            -- Intermediate, Science & Mathematics, ( July 2018 - July 2020 )
          </p>
          <p>
            -- Matric, Science & Mathematics affiliated to ICSE board, ( May
            2016 - July 2018 )
          </p>
        </p>
      </div>
    </motion.div>
  );
}
