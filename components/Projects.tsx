'use client';

import React from 'react';
import SectionHeading from './Section-Heading';
import { projectsData } from '@/public/lib/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
      <SectionHeading heading='Projects' />
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className='group bg-[rgb(220,211,199)] max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-80 mb-3 sm:mb-8 last:mb-0 rounded-lg hover:bg-[rgb(200,191,179)]'>
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
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
    </section>
  );
}
