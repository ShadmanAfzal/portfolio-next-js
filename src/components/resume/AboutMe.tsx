'use client';

import { formatYearsOfExperience } from '@/lib/experience';

const AboutMe = () => {
  const yearsOfExperience = formatYearsOfExperience();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  const details = [
    {
      key: 'Name',
      value: 'Shadman Afzal',
    },
    ...(phoneNumber
      ? [
          {
            key: 'Phone',
            value: `+91 ${phoneNumber}`,
            link: `tel:+91${phoneNumber}`,
          },
        ]
      : []),
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
        <div className='font-secondary text-3xl font-medium text-black/80'>About Me</div>
        <div className='text-[15px] leading-relaxed text-black/70'>
          A Fullstack JavaScript developer based in New Delhi, India, with{' '}
          {yearsOfExperience} years of experience in Node.js, React.js, and AWS,
          focused on building software that solves real-world problems.
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 py-4 text-[15px] text-black/70 md:grid-cols-2'>
        {details.map((detail, idx) => {
          return (
            <div className='flex gap-2' key={idx}>
              <span>{detail.key}:</span>
              <span className='font-semibold text-black/90'>
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
