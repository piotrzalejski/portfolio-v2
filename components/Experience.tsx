'use client';

import React from 'react';
import SectionHeading from './Section-Heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '@/lib/data';
import useSectionInView, { useTheme } from '@/lib/hooks';
import { motion } from 'framer-motion';

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

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.75);
  const { theme } = useTheme();
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28'>
      <SectionHeading heading='My Experience' />
      <VerticalTimeline lineColor='' animate={false}>
        {experienceData.map((experience, index) => (
          <motion.div
            variants={variants}
            initial={variants.initial}
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
            className='vertical-timeline-element'
            key={index}
          >
            <VerticalTimelineElement
              visible={true}
              icon={experience.icon}
              date={experience.date}
              contentStyle={{
                background:
                  theme === 'light' ? '#f4f9fc' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '0.33rem',
                boxShadow: '0px 3px 5px rgba(0,0,0,0.08)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #f4f9fc'
                    : ' 0.4rem solid rgba(255,255,255,0.15)',
              }}
              iconStyle={{
                background:
                  theme === 'light' ? '#f4f9fc' : 'rgba(255,255,255,0.05)',
                fontSize: '1.5rem',
                boxShadow:
                  theme == 'light'
                    ? '0 0 0 3px #f4f9fc, inset 0 2px 0 rgb(0 0 0 / 5%), 0 3px 0 4px rgb(0 0 0 / 4%)'
                    : '0 0 0 3px rgba(255,255,255,0.25), inset 0 2px 0 rgb(0 0 0 / 5%), 0 3px 0 4px rgb(0 0 0 / 4%)',
                color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'initial',
                backdropFilter: 'blur(5px)',
              }}
            >
              <h3 className='font-semibold capitalize'>{experience.title}</h3>
              <p className='!mt-0 !font-light text-gray-400'>
                {experience.location}
              </p>
              <p className='!font-normal !mt-0 dark:text-white/75'>
                {experience.desc}
              </p>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </section>
  );
}
