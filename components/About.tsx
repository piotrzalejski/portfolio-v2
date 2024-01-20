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
        From the world of sales to the coding universe – that's been my journey
        so far. I've got a knack for making deals happen, but now I'm all about
        making lines of code dance.
      </p>
      <p className='mb-3'>
        I kicked off my tech adventure at a bootcamp, then I landed roles as a
        SWET / QA engineer, making sure software plays nice and does what it's
        supposed to. But hey, I've got my 👀 set on full-fledged development –
        it's where the real fun begins.
      </p>
      <p className='mb-3'>
        When I'm not glued to the keyboard, you'll find me hanging out with my
        amazing wife, two kiddos, and our four-legged buddy. We're a crew that
        loves hitting the slopes, diving into the lake, and cruising on bikes.
        Life's a blend of family, coding dreams, and outdoor thrills – wouldn't
        have it any other way! 🚀✨
      </p>
    </motion.section>
  );
}
