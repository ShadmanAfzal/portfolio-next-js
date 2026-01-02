'use client';

import moment, { Moment } from 'moment';
import { FaLocationDot } from 'react-icons/fa6';

const Education = () => {
  const educations = [
    {
      college: 'Guru Gobind Singh Indraprastha University',
      degree: 'Bachelor of Technology in Information Technology',
      location: 'New Delhi, Inda',
      startDate: moment('2018-08-01', 'YYYY-MM-DD'),
      endDate: moment('2022-06-01', 'YYYY-MM-DD'),
      grade: '9.4 CGPA',
    },
    {
      college: 'KSK Academy',
      degree: 'Senior Secondary Education',
      location: 'New Delhi, India',
      startDate: moment('2017-05-01', 'YYYY-MM-DD'),
      endDate: moment('2018-05-31', 'YYYY-MM-DD'),
      grade: '88.8%',
    },
  ];

  const formatDate = (date: Moment): string => {
    return date.format('MMM YYYY');
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='text-3xl text-white font-semibold'>My Education</div>
        <div className='text-white/80 leading-relaxed text-[15px]'>
          Gained comprehensive knowledge in software development, data
          management, and emerging technologies, equipping me with the skills to
          apply innovative solutions to real-world challenges.
        </div>
      </div>
      <div className='flex flex-col gap-4 py-4 lg:h-[360px] lg:overflow-y-auto scrollbar-custom'>
        {educations.map((experience, idx) => {
          return (
            <div
              key={idx}
              className='flex flex-col gap-1 bg-card rounded-3xl py-4 px-6 transition-all duration-200'
            >
              <div className='text-sm text-primary'>
                {formatDate(experience.startDate)} -{' '}
                {formatDate(experience.endDate!)}
              </div>
              <div className='flex justify-between items-center flex-wrap text-white text-[15px]'>
                <div>{experience.college}</div>
                <div>{experience.grade}</div>
              </div>
              <div className='flex flex-wrap justify-between items-start gap-2'>
                <div className='text-white/80 text-sm'>{experience.degree}</div>
                <div className='text-white/80 text-sm flex items-center gap-2'>
                  <span className='text-primary'>
                    <FaLocationDot />
                  </span>
                  {experience.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
