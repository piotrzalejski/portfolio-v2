'use client';

import { useTheme } from '@/lib/hooks';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      className={clsx(
        'absolute right-0 sm:relative sm:top-2 z-[9999] size-8 backdrop-blur-sm border border-black/15 rounded-md shadow-2xl flex items-center justify-center hover:scale-110 active:scale-105 transition-all',
        {
          'bg-[#765de5] hover:bg-[#6b46c1] text-white': theme === 'light',
          'bg-[#fbd38d] hover:bg-[#f6ad55] text-black': theme === 'dark',
        }
      )}
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {theme === 'light' ? <BsMoonFill /> : <BsSun />}
    </motion.button>
  );
}
