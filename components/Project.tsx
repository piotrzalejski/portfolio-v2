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
      className='group bg-white/[0.36] max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-80 mb-3 sm:mb-8 last:mb-0 rounded-lg hover:bg-white/[0.8]'
    >
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-custom-teal px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
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
        className='absolute top-8 -right-40 w-[28rem] rounded-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 transition group-hover:scale-105'
      />
    </motion.section>
  );
}
