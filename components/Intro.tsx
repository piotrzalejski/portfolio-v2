'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleTransitionEnd = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    if (isClicked) {
      const resetButton = setTimeout(() => {
        setIsClicked(false);
      }, 500);
      return clearTimeout(resetButton);
    }
  }, [isClicked]);

  return (
    <section
      ref={ref}
      className='max-w-[50rem] text-center scroll-mt-[100rem] h-[50rem]'
      id='home'
    >
      <motion.h1
        className='mb-10 mt-[10rem] px-4 text-2xl font-medium sm:text-4xl !leading-normal'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>
          Hi there! I&apos;m Piotr. <br />
        </span>
        <div className='text-2xl sm:text-3xl'>
          I&apos;m a <span className='font-bold'>full-stack developer </span>
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
          className=' bg-custom-teal text-white px-7 py-3 flex items-center rounded-full hover:bg-custom-teal-dark active:scale-95 transition outline-none hover:scale-105 dark:bg-[#f97316] dark:text-[#1a202c] dark:hover:bg-[#f97316]/80'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
        </Link>

        <a
          className={clsx(
            'group bg-white text-dark/70 px-7 py-3 flex items-center gap-2 rounded-full active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-105 hover:text-dark dark:bg-white/10 dark:text-white/60',
            { 'focus:scale-110': isClicked, 'focus:scale-100': !isClicked }
          )}
          href='/resume/Piotr_Zalejski_Resume.pdf'
          download
          onClick={handleClick}
          onTransitionEnd={handleTransitionEnd}
        >
          Download Resume{' '}
          <HiDownload className='group-hover:translate-y-1 transtion' />
        </a>

        <div className='flex flex-row gap-2'>
          <a
            className='bg-white text-dark/70 p-4 flex items-center  rounded-full active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-110 hover:text-dark  dark:bg-white/10 dark:text-white/60
        '
            href='https://www.linkedin.com/in/piotr-zalejski'
            target='_blank'
          >
            <LuLinkedin />
          </a>

          <a
            className='bg-white text-dark/70 p-4 flex items-center gap-2 rounded-full active:scale-95 transition outline-none cursor-pointer border border-black/10 hover:scale-110 hover:text-dark  dark:bg-white/10 dark:text-white/60'
            href='https://www.github.com/piotrzalejski'
            target='_blank'
          >
            <LuGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
