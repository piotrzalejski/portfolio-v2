'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleIn = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityIn = useTransform(scrollYProgress, [0, 1], [0.66, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleIn,
        opacity: opacityIn,
      }}
      className='relative group bg-[#f4f9fc]/[0.36] max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 sm:h-80 mb-3 sm:mb-8 last:mb-0 rounded-lg hover:bg-[#f4f9fc]/[0.8] dark:bg-white/10 dark:hover:bg-white/20'
    >
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
          {description}
        </p>
        <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-custom-teal px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 dark:bg-[#f97316]/80'
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className='absolute hidden sm:block top-8 -right-40  w-[28rem] rounded-lg shadow-[-0.5rem_0.5rem_1.25rem_-0.25rem] shadow-black group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition group-hover:scale-105'
      />
    </motion.section>
  );
}
