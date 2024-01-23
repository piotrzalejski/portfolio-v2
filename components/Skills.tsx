'use client';

import { skillData } from '@/lib/data';
import React from 'react';
import SectionHeading from './Section-Heading';
import useSectionInView from '@/lib/hooks';
import { animate, motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      id='skills'
      className='scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-40'
    >
      <SectionHeading heading='Skills' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-[#f4f9fc] border border-black/[0.1] rounded-xl px-3 py-2'
            variants={variants}
            initial={variants.initial}
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
