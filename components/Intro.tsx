'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import useSectionInView from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
    >
      <motion.h1
        className='mb-10 mt-10 px-4 text-2xl font-medium sm:text-4xl !leading-normal'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>
          Hi there! I'm Piotr. <br />
        </span>
        <div className='text-2xl sm:text-3xl'>
          I&apos;m an <span className='font-bold'>full-stack developer </span>
          based in Chicago.
        </div>
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className=' bg-custom-teal text-white px-7 py-3 flex items-center rounded-full hover:bg-custom-teal-dark active:scale-95 transition outline-none hover:scale-105'
        >
          Contact me
        </Link>

        <a
          className='group bg-white text-dark/70 px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-105 hover:text-dark'
          // TODO add updated resume
          // href=''
          // download
        >
          Download Resume{' '}
          <HiDownload className='group-hover:translate-y-1 transtion' />
        </a>

        <a
          className='bg-white text-dark/70 p-4 flex items-center gap-2 rounded-full active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-110 hover:text-dark
        '
          href='https://www.linkedin.com/in/piotr-zalejski'
          target='_blank'
        >
          <LuLinkedin />
        </a>

        <a
          className='bg-white text-dark/70 p-4 flex items-center gap-2 rounded-full active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-110 hover:text-dark'
          href='https://www.github.com/piotrzalejski'
          target='_blank'
        >
          <LuGithub />
        </a>
      </motion.div>
    </section>
  );
}
