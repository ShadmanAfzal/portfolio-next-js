import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className='relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.5, ease: 'easeIn' },
        }}
      >
        <div className='w-[200px] h-[200px] lg:h-[380px] lg:w-[380px] mix-blend-lighten absolute'>
          <Image
            id='avatar-image'
            src='/images/avatar.png'
            className='object-contain'
            alt=''
            fill
            priority
            quality={100}
          />
        </div>
        <motion.svg
          className='w-[202px] lg:w-[382px] h-[202px] lg:h-[382px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='hsl(75,94%, 57%)'
            strokeWidth='5'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
