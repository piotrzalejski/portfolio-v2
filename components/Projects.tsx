'use client';

import React from 'react';
import SectionHeading from './Section-Heading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import useSectionInView from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.66);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
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
