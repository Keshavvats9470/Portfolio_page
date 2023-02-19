import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

// WE ARE EXPECTING THIS
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:keshavvats855@gmail?subject=${formData.subject}&body=Hello, i am ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly items-center overflow-hidden bg-[black] border border-[#000046]/30'>
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-300 font-semibold text-3xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 mt-24 '>
        <h4 className='text-3xl font-semibold text-center text-white/90'>
          I have got just what you need.{' '}
          <span className='text-yellow-600'>Let's Talk</span>
        </h4>

        <div className='space-y-4 '>
          <div className='flex items-center space-x-2 justify-center'>
            <PhoneIcon className='text-[#FDA512] h-6 w-6 animate-pulse' />
            <p className='text-l font-light text-gray-400'>+91 123456789</p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <EnvelopeIcon className='text-[#FDA512] h-6 w-6 animate-pulse' />
            <p className='text-l text-gray-400 font-light underline'>
              keshavvats855@gmail.com
            </p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <MapPinIcon className='text-[#FDA512] h-6 w-6 animate-pulse' />
            <p className='text-l font-light text-gray-400'>
              1234 Developer Lane
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='E-mail'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />

          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#FDA512]/90 py-5 px-8 rounded-lg text-black font-semibold text-lg'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
