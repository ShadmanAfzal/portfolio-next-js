'use client';

import { formatYearsOfExperience } from '@/lib/experience';

const AboutMe = () => {
  const yearsOfExperience = formatYearsOfExperience();

  const details = [
    {
      key: 'Name',
      value: 'Shadman Afzal',
    },
    {
      key: 'Phone',
      value: `+91 ${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
      link: `tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
    },
    {
      key: 'Email',
      value: 'shadman.afzal.7@gmail.com',
      link: 'mailto:shadman.afzal.7@gmail.com',
    },
    {
      key: 'Experience',
      value: `${yearsOfExperience} Years`,
    },
    {
      key: 'Language',
      value: 'English',
    },
    {
      key: 'Location',
      value: 'New Delhi, India',
    },
    {
      key: 'GitHub',
      value: 'github/ShadmanAfzal',
      link: 'https://github.com/ShadmanAfzal/',
    },
    {
      key: 'LinkedIn',
      value: 'linkedin/shadman-afzal',
      link: 'https://www.linkedin.com/in/shadman-afzal/',
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='text-3xl text-white font-semibold'>About Me</div>
        <div className='text-white/80 leading-relaxed text-[15px]'>
          A Fullstack JavaScript developer based in New Delhi, India, with{' '}
          {yearsOfExperience} years of experience in Node.js, React.js, and AWS,
          focused on building software that solves real-world problems.
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-4 text-white/80 text-[15px]'>
        {details.map((detail, idx) => {
          return (
            <div className='flex gap-2' key={idx}>
              <span>{detail.key}:</span>
              <span className='text-white font-semibold'>
                {detail.link ? (
                  <a
                    href={detail.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutMe;
