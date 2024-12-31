'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

import 'swiper/swiper-bundle.css';

type ProjectType = {
  number: string;
  title: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
};

const projects: ProjectType[] = [
  {
    number: '01',
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
      'Docker',
      'Webpack',
      'Redux',
      'Redis',
    ],
  },
  {
    number: '02',
    title: 'Real-Time Notification System',
    link: 'https://github.com/ShadmanAfzal/notification-system-design',
    description:
      'A prototype event-driven notification service built with Node.js (Express.js) uses Kafka for scalable event handling, processing user likes and comments efficiently. Designed as a proof of concept for robust architecture.',
    image: '/images/notification_design.png',
    tech: ['Node.js', 'Docker', 'Typescript', 'Prisma', 'Zod', 'Kafka'],
  },
  {
    number: '03',
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
  const [curentProject, setCurrentProject] = useState<ProjectType>(projects[0]);
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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className='relative py-4 lg:py-8'>
        <div className='flex flex-col-reverse items-center lg:flex-row gap-4 w-full'>
          <div className='flex flex-col gap-4 lg:w-[50%]'>
            <div className='text-6xl font-extrabold leading-none text-transparent text-outline'>
              {curentProject.number}
            </div>
            <div className='text-3xl text-white font-bold hover:text-primary'>
              <a
                href={curentProject.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {curentProject.title}
              </a>
            </div>
            <div className='text-white/80 leading-relaxed'>
              {curentProject.description}
            </div>
            <div className='text-primary leading-relaxed'>
              {curentProject.tech.join(', ')}
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            onSlideChange={onSlideChange}
            onBeforeInit={onInit}
            allowTouchMove={false}
            className='h-[200px] lg:h-[300px] w-full lg:w-[50%] bg-card'
          >
            {projects.map((project, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className='flex items-center'>
                    <Image
                      src={project.image}
                      className='object-contain'
                      alt=''
                      fill
                      priority
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='absolute top-20 right-0 z-10 lg:top-0 lg:right-0 lg:relative flex flex-row gap-2 w-full justify-between lg:justify-end pt-4'>
          <Tooltip id='swiper-btn' />
          <button
            onClick={() => swiperRef?.current?.slidePrev()}
            className='bg-primary rounded-md p-2 lg:p-3 disabled:bg-card disabled:text-white transition-all duration-200 active:scale-90'
            disabled={!canMoveLeft}
            data-tooltip-id='link'
            data-tooltip-content={!canMoveLeft ? null : 'Previous'}
            data-tooltip-place='top'
            aria-label='View previous project'
          >
            <MdOutlineNavigateBefore size={20} />
          </button>
          <button
            onClick={() => swiperRef?.current?.slideNext()}
            className='bg-primary rounded-md p-2 lg:p-3 disabled:bg-card disabled:text-white transition-all duration-200 active:scale-90'
            disabled={!canMoveRight}
            data-tooltip-id='link'
            data-tooltip-content={!canMoveRight ? null : 'Next'}
            data-tooltip-place='top'
            aria-label='View next project'
          >
            <MdOutlineNavigateNext size={20} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
