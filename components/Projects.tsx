import { motion } from 'framer-motion';
import React from 'react';
import { Project } from '../typings';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0'
    >
      <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500
       font-semibold text-3xl'
      >
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-[#FDA512]/80'>
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='h-44 w-44 rounded-3xl'
              src='https://wallpaperaccess.com/full/6075692.jpg'
              alt=''
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                Case Study {i + 1} of {projects.length}:
                <span className='text-yellow-600'> {project?.title}</span>{' '}
              </h4>

              <p className='text-lg text-center md:text-left font-normal justify-center'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#FDA512]/30 left-0 h-[270px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
