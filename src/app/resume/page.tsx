'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import AboutMe from '@/components/resume/AboutMe';
import Certification from '@/components/resume/Certification';
import Education from '@/components/resume/Education';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';

export default function Resume() {
  const tabs = [
    'Experience',
    'Education',
    'Skills',
    'Certification',
    'About Me',
  ];

  const [activeTab, setActiveTab] = useState('Experience');

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  const showSection = () => {
    switch (activeTab) {
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Skills':
        return <Skills />;
      case 'Certification':
        return <Certification />;
      case 'About Me':
        return <AboutMe />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 py-4 lg:py-8'>
        <div className='flex flex-col gap-4 w-full max-w-[300px]'>
          {tabs.map((tab, idx) => {
            return (
              <div
                onClick={() => toggleTab(tab)}
                className={twMerge(
                  'h-[40px] w-full rounded-md flex justify-center items-center text-sm font-semibold active:scale-95 transition-all duration-200',
                  activeTab === tab
                    ? 'bg-primary text-background'
                    : 'bg-card text-white cursor-pointer'
                )}
                key={idx}
              >
                {tab}
              </div>
            );
          })}
        </div>

        <div className='flex-1'>{showSection()}</div>
      </div>
    </motion.section>
  );
}
