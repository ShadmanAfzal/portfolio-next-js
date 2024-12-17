'use client';

import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <Hero />
      <Stats />
    </motion.section>
  );
}
