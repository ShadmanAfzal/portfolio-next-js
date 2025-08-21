'use client';

import moment, { Moment } from 'moment';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      company: 'Squareboat',
      position: 'Senior Software Engineer',
      location: 'Gurugram, Inda',
      startDate: moment('2025-08-04', 'YYYY-MM-DD'),
      endDate: undefined,
      isCurrent: true,
      description: [
        'Engineered and deployed backend APIs for a job portal using Nest.js, ensuring robust and maintainable architecture.', 'Integrated Sentry for real-time error monitoring, PM2 for process orchestration, and Redis queues for scalable, asynchronous email notification workflows.'
      ],
      showMore: false,
    },
    {
      company: 'Tata Consultancy Services',
      position: 'Systems Engineer',
      location: 'Noida, Inda',
      startDate: moment('2022-07-21', 'YYYY-MM-DD'),
      endDate: moment('2025-07-31', 'YYYY-MM-DD'),
      isCurrent: false,
      description: [
        'Worked on multiple projects using the PERN stack, focusing on Node.js and React.js.',
        'Utilized a range of industry-standard tools including Jira, Contentful, ServiceNow, AWS, Docker, and more.',
        'Optimized API response time from 4 seconds to 20 milliseconds, resulting in a 99.5% reduced latency and significantly improved user experience globally.',
        'Designed and implemented AWS infrastructure for job execution utilizing ECS, AWS Lambda, CloudFormation, and Athena. Leveraged GitHub Actionsto streamline and automate code deployment through a robust CI/CD pipeline.',
      ],
      showMore: false,
    },
    {
      company: 'Appyhigh',
      position: 'SDE Intern',
      location: 'Remote',
      startDate: moment('2021-09-01', 'YYYY-MM-DD'),
      endDate: moment('2022-05-31', 'YYYY-MM-DD'),
      isCurrent: false,
      description: [
        'Created an Email client application with 100K users, developing both Front-end and Back-end. Incorporated multiple email clients such as Gmail, Outlook, and Yandex.',
        'Developed a Train Ticket booking application, incorporating features such as Ticket booking through the Razorpay payment gateway, real-time Train updates, PNR status tracking, Seat Availability, Train Search functionality, and IRCTC User Authentication integration.',
        'Utilized Flutter and applied the MVVM architecture with the Bloc pattern, integrating RxDart and GetX libraries. Also, used Node.js for API development.',
      ],
      showMore: false,
    },
  ]);

  const expandExperience = (company: string) => {
    const experience = experiences.map((experience) => {
      if (experience.showMore)
        return {
          ...experience,
          showMore: false,
        };

      if (experience.company === company)
        return {
          ...experience,
          showMore: true,
        };

      return {
        ...experience,
        showMore: false,
      };
    });

    setExperiences(experience);
  };

  const formatDate = (date: Moment): string => {
    return date.format('MMM YYYY');
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='text-3xl text-white font-semibold'>My Experience</div>
        <div className='text-white/80 leading-relaxed text-[15px]'>
          Experienced in developing scalable software solutions with expertise
          in full-stack development, cloud technologies, and system
          optimization.
        </div>
      </div>
      <div className='flex flex-col gap-4 py-4 lg:h-[360px] lg:overflow-y-auto scrollbar-custom'>
        {experiences.map((experience, idx) => {
          const isExpanded = experience.showMore;
          return (
            <div
              key={idx}
              className='flex flex-col gap-1 bg-card rounded-md py-4 px-6 transition-all duration-200 cursor-pointer'
              onClick={() => expandExperience(experience.company)}
            >
              <div className='text-sm text-primary'>
                {formatDate(experience.startDate)} -{' '}
                {experience.isCurrent
                  ? 'Present'
                  : formatDate(experience.endDate!)}
              </div>
              <div className='text-white text-[15px]'>{experience.company}</div>
              <div className='flex justify-between items-center'>
                <div className='text-white/80 text-sm'>
                  {experience.position}
                </div>
                <div className='text-white/80 text-sm flex items-center gap-2'>
                  <span className='text-primary'>
                    <FaLocationDot />
                  </span>
                  {experience.location}
                </div>
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'h-auto py-2' : 'h-0'
                }`}
              >
                <div className='flex flex-col gap-3'>
                  {isExpanded &&
                    experience.description.map((desc, idx) => (
                      <div className='flex gap-2' key={idx}>
                        <span className='text-primary'>•</span>
                        <p className='text-white/90 text-sm leading-relaxed'>
                          {desc}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
