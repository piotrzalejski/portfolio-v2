'use client';

import React from 'react';
import SectionHeading from './Section-Heading';
import { projectsData } from '@/lib/data';
import Project from './Project';

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
