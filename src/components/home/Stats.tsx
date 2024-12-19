'use client';

import moment from 'moment';
import CountUp from 'react-countup';

const Stats = () => {
  const now = moment();
  const targetDate = moment('2022-07-21', 'YYYY-MM-DD');
  const yearsOfExperience = (now.diff(targetDate, 'days') / 365.25).toFixed(1);

  const stats = [
    {
      count: Number(yearsOfExperience),
      text: 'Years of experience',
    },
    {
      count: 17,
      text: 'Projects completed',
    },
    {
      count: 16,
      text: 'Technologies mastered',
    },
    {
      count: 950,
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
                className={`${
                  stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                } leading-snug text-white/80`}
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
