'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      className='bg-custom-teal/10  my-24 h-16 w-1 sm:block rounded-full'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
