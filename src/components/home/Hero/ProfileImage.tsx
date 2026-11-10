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
        <div className='absolute h-[200px] w-[200px] mix-blend-multiply lg:h-[380px] lg:w-[380px]'>
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
          className='h-[202px] w-[202px] text-primary lg:h-[382px] lg:w-[382px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='currentColor'
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
