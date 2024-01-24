'use client';

import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import ThemeSwitch from './theme-switch';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='flex items-center fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/5 backdrop-blur-[0.5rem] sm:h-[3.25rem] dark:bg-[#20202380] dark:border-none'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-4 text-dark text-opacity-70 dark:text-[#ffffffeb] '>
          {links.map((link) => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'flex w-full px-3 py-3 hover:text-dark transition dark:hover:text-white dark:hover:underline',
                  {
                    'text-dark underline underline-offset-2 dark:text-white dark:underline':
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='underline rounded-full absolute inset-0 -z-10 dark:bg-transparent dark:underline'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 40,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
