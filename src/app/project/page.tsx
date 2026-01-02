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
      className='py-8'
    >
      <div className='flex flex-col lg:flex-row gap-8 items-center'>
        <div className='flex flex-col gap-4 lg:w-[50%] order-2 lg:order-1'>
          <div className='text-6xl font-extrabold leading-none text-transparent text-outline'>
            {(currentIndex + 1).toString().padStart(2, '0')}
          </div>

          <div className='flex items-center gap-3'>
            <h3 className='text-3xl text-white font-bold hover:text-primary transition-colors duration-200'>
              <a
                href={currentProject.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {currentProject.title}
              </a>
            </h3>
            <a
              href={currentProject.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors duration-200'
              aria-label={`View ${currentProject.title}`}
            >
              <FiExternalLink size={20} />
            </a>
          </div>

          <p className='text-white/85 text-balance leading-relaxed'>
            {currentProject.description}
          </p>

          <div className='text-primary text-sm'>
            {currentProject.tech.join(' • ')}
          </div>
        </div>

        <div className='lg:w-[50%] w-full order-1 lg:order-2'>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            onSlideChange={onSlideChange}
            onBeforeInit={onInit}
            allowTouchMove={true}
            className='h-[200px] lg:h-[300px] w-full'
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className='flex items-center justify-center h-full relative'>
                  <div className='absolute inset-0 rounded-xl bg-black/15 z-0' />
                  <Image
                    src={project.image}
                    className='object-contain rounded-xl shadow-2xl z-10'
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

      <div className='flex gap-2 justify-end mt-8'>
        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className='bg-primary rounded-3xl p-2 lg:p-3 disabled:bg-card disabled:text-white transition-all duration-200 active:scale-90'
          disabled={!canMoveLeft}
          aria-label='Previous project'
        >
          <MdOutlineNavigateBefore size={20} />
        </button>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className='bg-primary rounded-3xl p-2 lg:p-3 disabled:bg-card disabled:text-white transition-all duration-200 active:scale-90'
          disabled={!canMoveRight}
          aria-label='Next project'
        >
          <MdOutlineNavigateNext size={20} />
        </button>
      </div>
    </motion.section>
  );
}
