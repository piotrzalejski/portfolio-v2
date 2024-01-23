'use client';

import React from 'react';
import SectionHeading from './Section-Heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';

export default function Experience() {
  const { ref, inView } = useSectionInView('Experience');
  return (
    <section ref={ref} id='experience' className='scroll-mt-28'>
      <SectionHeading heading='My Experience' />
      <VerticalTimeline lineColor=''>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            visible={inView}
            key={index}
            icon={experience.icon}
            date={experience.date}
            contentStyle={{
              background: '#f4f9fc',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '0.33rem',
              boxShadow: '0px 3px 5px rgba(0,0,0,0.08)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #f4f9fc',
            }}
            iconStyle={{
              background: '#f4f9fc',
              fontSize: '1.5rem',
              boxShadow:
                '0 0 0 3px #f4f9fc, inset 0 2px 0 rgb(0 0 0 / 5%), 0 3px 0 4px rgb(0 0 0 / 4%',
            }}
          >
            <h3 className='font-semibold capitalize'>{experience.title}</h3>
            <p className='!mt-0 !font-light text-gray-400'>
              {experience.location}
            </p>
            <p className='!font-normal !mt-0'>{experience.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
