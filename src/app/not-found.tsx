'use client';

import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className='flex flex-col items-center justify-center h-[400px] py-4 lg:py-8 text-xl text-white'>
        404 | Page Not Found
      </div>
    </motion.section>
  );
}
