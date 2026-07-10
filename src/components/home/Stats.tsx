'use client';

import { getYearsOfExperience } from '@/lib/experience';
import CountUp from 'react-countup';
import { twMerge } from 'tailwind-merge';

const Stats = () => {
  const yearsOfExperience = getYearsOfExperience();

  const stats = [
    {
      count: Number(yearsOfExperience),
      text: 'Years of experience',
    },
    {
      count: 18,
      text: 'Projects completed',
    },
    {
      count: 17,
      text: 'Technologies mastered',
    },
    {
      count: Number(process.env.NEXT_PUBLIC_GITHUB_TOTAL_COMMITS!),
      text: 'Total Commits',
    },
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center py-8'>
      {stats.map((stat, idx) => {
        return (
          <div
            key={idx}
            className='flex flex-col items-center justify-start gap-3 text-center'
          >
            <CountUp
              start={0}
              end={stat.count}
              duration={4}
              delay={0.5}
              decimals={!Number.isInteger(stat.count) ? 1 : undefined}
              className='text-white text-3xl xl:text-5xl font-extrabold'
            />
            <div>
              <p
                className={twMerge(
                  'leading-snug text-white/80',
                  stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                )}
              >
                {stat.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
