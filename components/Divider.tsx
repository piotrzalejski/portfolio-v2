'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      className='relative inline-block align-middle mt-20 mb-14'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.75, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <svg className='w-60 h-auto absolute z-10' viewBox='0 0 230 140'>
        {/* purple-colored SVGs */}
        <polygon
          className=' stroke-[#765de5] stroke-[4.5px] fill-none'
          points='62.8,56.5 12,127 123.6,127'
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeMiterlimit={10}
          vectorEffect={'non-scaling-stroke'}
        ></polygon>
        <polygon
          className='stroke-[#765de5] stroke-[4.5px] fill-none'
          points='135.2,31.5 59.5,127 210.6,127'
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeMiterlimit={10}
          vectorEffect={'non-scaling-stroke'}
        ></polygon>
      </svg>

      {/* Black-filled SVG */}
      <svg className='relative z-0 w-60' viewBox='0 0 230 133'>
        <polygon
          className=' fill-gray-400'
          points='142.2,31.5 57.5,137 225.6,137'
        ></polygon>
        <polygon
          className='fill-gray-400'
          points='70.8,56.5 13,137 140.6,137'
        ></polygon>
      </svg>
    </motion.div>
  );
}
