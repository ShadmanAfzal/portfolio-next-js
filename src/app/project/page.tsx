'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

import 'swiper/swiper-bundle.css';

type ProjectType = {
  title: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
};

const projects: ProjectType[] = [
  {
    title: 'DevArena',
    link: 'https://github.com/ShadmanAfzal/DevArena',
    description:
      'DevArena is a full-stack coding platform where users can solve programming problems, submit code in multiple languages, and receive instant feedback with test case results. It features user authentication, problem tracking, and an admin dashboard, all built with a modern TypeScript/React frontend and a Node.js/Express backend.',
    image: '/images/dev-arena.png',
    tech: [
      'Node.js',
      'React.js',
      'Tailwind CSS',
      'Docker',
      'Google-auth',
      'Zustand',
      'Monaco editor',
    ],
  },
  {
    title: 'Velocity Email Client',
    link: 'https://github.com/ShadmanAfzal/Velocity-Email-Client',
    description:
      'A minimalist and intuitive email management application designed for seamless user experience. Features include inbox organization, dark mode, and secure user authentication with Google OAuth2.0, built using Redux Toolkit, Webpack, and Tailwind CSS.',
    image: '/images/velocity.png',
    tech: [
      'Node.js',
      'React.js',
      'Tailwind CSS',
      'Docker',
      'Passport.js',
      'Webpack',
      'Redux',
      'Redis',
    ],
  },
  {
    title: 'Real-Time Notification System',
    link: 'https://github.com/ShadmanAfzal/notification-system-design',
    description:
      'A prototype event-driven notification service built with Node.js (Express.js) uses Kafka for scalable event handling, processing user likes and comments efficiently. Designed as a proof of concept for robust architecture.',
    image: '/images/notification_design.png',
    tech: ['Node.js', 'Docker', 'Typescript', 'Prisma', 'Zod', 'Kafka'],
  },
  {
    title: 'Library Book Management Application',
    description:
      'A modern library management system built with Node.js and React.js ensures seamless book tracking and optimized performance using Webpack. Secure Google OAuth 2.0 enables effortless user authentication.',
    image: '/images/library-fullstack-application.png',
    link: 'https://github.com/ShadmanAfzal/Full-Stack-Library-Application',
    tech: [
      'Node.js',
      'React.js',
      'Sequelize',
      'Passport.js',
      'Formik',
      'Bootstrap',
      'Webpack',
      'Docker',
    ],
  },
];

export default function Project() {
  const [currentProject, setCurrentProject] = useState<ProjectType>(
    projects[0]
  );
  const [canMoveLeft, setCanMoveLeft] = useState(false);
  const [canMoveRight, setCanMoveRight] = useState(!!projects.length);

  const swiperRef = useRef<SwiperType>(null);

  const onInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const onSlideChange = (swiper: SwiperType) => {
    const currentPage = swiper.activeIndex;

    let canMoveLeft = true;
    let canMoveRight = true;

    if (currentPage === 0) canMoveLeft = false;

    if (currentPage === projects.length - 1) canMoveRight = false;

    setCanMoveLeft(canMoveLeft);
    setCanMoveRight(canMoveRight);
    setCurrentProject(projects[currentPage]);
  };

  const currentIndex = projects.findIndex(
    (p) => p.title === currentProject.title
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-4 lg:h-[calc(100svh-6rem)]'
    >
      <div className='flex flex-col rounded-3xl border border-black/5 bg-card/60 p-4 shadow-sm sm:p-6 lg:h-full lg:p-6'>
        <div className='flex flex-1 flex-col items-center gap-5 lg:min-h-0 lg:flex-row lg:items-start lg:gap-8'>
          <div className='order-2 flex w-full flex-col gap-3 lg:order-1 lg:w-1/2'>
            <div className='flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-primary/80'>
              <span className='h-px w-8 bg-primary/50' />
              Project {(currentIndex + 1).toString().padStart(2, '0')}
              <span className='text-black/35'>
                / {projects.length.toString().padStart(2, '0')}
              </span>
            </div>

            <div className='flex items-center gap-3'>
              <h3 className='font-secondary text-3xl font-semibold leading-tight sm:text-4xl'>
                <a
                  href={currentProject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-primary'
                >
                  {currentProject.title}
                </a>
              </h3>
              <a
                href={currentProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 rounded-full border border-primary/20 p-2 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white'
                aria-label={`View ${currentProject.title}`}
              >
                <FiExternalLink size={18} />
              </a>
            </div>

            <p className='text-pretty text-[15px] leading-relaxed text-black/75'>
              {currentProject.description}
            </p>

            <div className='flex flex-wrap gap-2 pt-1'>
              {currentProject.tech.map((technology) => (
                <span
                  key={technology}
                  className='rounded-full border border-primary/15 bg-background/80 px-3 py-1 text-xs font-medium text-black/70'
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className='order-1 w-full lg:order-2 lg:w-1/2'>
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              onSlideChange={onSlideChange}
              onBeforeInit={onInit}
              allowTouchMove={true}
              className='h-[220px] w-full sm:h-[280px] lg:h-[min(42svh,280px)]'
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={idx}>
                  <div className='relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-card p-2 shadow-lg shadow-black/10'>
                    <Image
                      src={project.image}
                      className='rounded-xl object-contain'
                      alt={project.title}
                      fill
                      priority={idx === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className='mt-4 flex items-center justify-between border-t border-black/5 pt-4'>
          <span className='text-sm font-medium tabular-nums text-black/50'>
            {(currentIndex + 1).toString().padStart(2, '0')}
            <span className='px-1.5 text-black/25'>/</span>
            {projects.length.toString().padStart(2, '0')}
          </span>
          <div className='flex gap-2'>
            <button
              onClick={() => swiperRef?.current?.slidePrev()}
              className='rounded-full border border-black/10 bg-card p-2.5 text-black/70 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 active:scale-95'
              disabled={!canMoveLeft}
              aria-label='Previous project'
            >
              <MdOutlineNavigateBefore size={22} />
            </button>
            <button
              onClick={() => swiperRef?.current?.slideNext()}
              className='rounded-full bg-primary p-2.5 text-white transition-all hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-40 active:scale-95'
              disabled={!canMoveRight}
              aria-label='Next project'
            >
              <MdOutlineNavigateNext size={22} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
