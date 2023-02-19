import { motion } from 'framer-motion';
import React from 'react';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className='flex flex-col rounded-3xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[550px] snap-center bg-[#ffff]/60 p-10   hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden border border-[black]/40
    '
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full l:w-[180px] l:h-[180px] object-cover object-center'
        src='https://img.freepik.com/free-psd/glowing-instagram-logo-icon-isolated_47987-11963.jpg?size=338&ext=jpg&ga=GA1.2.2031243908.1673631277'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-normal text-yellow-600'>
          {experience?.jobTitle}
        </h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'></div>

        <p className='uppercase py-5 text-gray-500'>
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience.points &&
            experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  );
}
