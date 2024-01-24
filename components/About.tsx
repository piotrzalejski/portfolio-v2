'use client';

import { motion } from 'framer-motion';
import SectionHeading from './Section-Heading';
import useSectionInView from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading heading='About Me' />
      <p className='mb-3'>
        From the world of sales to the coding universe – that&apos;s been my
        journey so far. I&apos;ve got a knack for making deals happen, but now
        I&apos;m all about making lines of code dance.
      </p>
      <p className='mb-3'>
        I kicked off my tech adventure at a bootcamp, then I landed roles as a
        SWET / QA engineer, making sure software plays nice and does what
        it&apos;s supposed to. But hey, I&apos;ve got my 👀 set on full-fledged
        development – it&apos;s where the real fun begins.
      </p>
      <p className='mb-3'>
        When I&apos;m not glued to the keyboard, you&apos;ll find me hanging out
        with my amazing wife, two kiddos, and our four-legged buddy. We&apos;re
        a crew that loves hitting the slopes, diving into the lake, and cruising
        on bikes. Life&apos;s a blend of family, coding dreams, and outdoor
        thrills – wouldn&apos;t have it any other way! 🚀✨
      </p>
    </motion.section>
  );
}
