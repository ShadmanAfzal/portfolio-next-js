'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
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
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    const updateScrollHint = () => {
      setCanScrollRight(
        tabsElement.scrollLeft + tabsElement.clientWidth <
          tabsElement.scrollWidth - 1
      );
    };

    updateScrollHint();
    tabsElement.addEventListener('scroll', updateScrollHint, { passive: true });
    window.addEventListener('resize', updateScrollHint);

    return () => {
      tabsElement.removeEventListener('scroll', updateScrollHint);
      window.removeEventListener('resize', updateScrollHint);
    };
  }, []);

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  const scrollTabsRight = () => {
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    tabsElement.scrollLeft = Math.min(
      tabsElement.scrollWidth - tabsElement.clientWidth,
      tabsElement.scrollLeft + tabsElement.clientWidth * 0.75
    );
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
      <div className='flex flex-col gap-5 py-4 lg:flex-row lg:items-start lg:gap-10 lg:py-8'>
        <div className='relative w-full lg:w-[300px]'>
          <div
            ref={tabsRef}
            aria-label='Resume sections'
            className='scrollbar-none flex w-full gap-2 overflow-x-auto overscroll-x-contain pb-2 lg:flex-col lg:overflow-visible lg:pb-0'
          >
            {tabs.map((tab) => {
              return (
                <motion.button
                  type='button'
                  onClick={() => toggleTab(tab)}
                  aria-pressed={activeTab === tab}
                  className={twMerge(
                    'flex h-9 w-auto shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center font-secondary text-sm font-medium transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:h-10 lg:w-full',
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-card text-black/80 hover:bg-primary/10'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  key={tab}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>
          {canScrollRight && (
            <button
              type='button'
              aria-label='Scroll resume sections right'
              onClick={scrollTabsRight}
              className='absolute right-0 top-0 flex h-9 w-10 items-center justify-end rounded-r-full bg-gradient-to-l from-background via-background/95 to-transparent pr-0.5 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden'
            >
              <MdChevronRight className='text-primary' size={20} />
            </button>
          )}
        </div>

        <motion.div
          key={activeTab}
          className='flex-1'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {showSection()}
        </motion.div>
      </div>
    </motion.section>
  );
}
