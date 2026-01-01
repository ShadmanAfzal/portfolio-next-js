'use client';

import moment, { Moment } from 'moment';
import { IconType } from 'react-icons';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';

type CertificateType = {
  name: string;
  startDate: Moment;
  endDate: Moment | null;
  company: string;
  logo: IconType;
  link: string;
};

const Certification = () => {
  const certificate: CertificateType[] = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      startDate: moment('2024-10-09', 'YYYY-MM-DD'),
      endDate: moment('2027-10-09', 'YYYY-MM-DD'),
      company: 'Amazon Web Services',
      logo: FaAws,
      link: 'https://drive.google.com/file/d/1ah8DweP6oOBh8YYprZpIYWSDCjD7Ro6P/view?usp=sharing',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      startDate: moment('2023-11-18', 'YYYY-MM-DD'),
      endDate: moment('2026-11-18', 'YYYY-MM-DD'),
      company: 'Amazon Web Services',
      logo: FaAws,
      link: 'https://drive.google.com/file/d/1hdtNsywIMHW6_WeVbBc7ODzZi9tpx8zM/view?usp=sharing',
    },
    {
      name: '30 Days of Google Cloud',
      startDate: moment('2020-12-13', 'YYYY-MM-DD'),
      endDate: null,
      company: 'Google',
      logo: DiGoogleCloudPlatform,
      link: 'https://drive.google.com/file/d/10ODjnhWAKukZC93XEHwsnoLbHt7egGAr/view?usp=sharing',
    },
  ];

  const formatDate = (date: Moment): string => {
    return date.format('D MMM YYYY');
  };

  const showDuration = (startDate: Moment, endDate: Moment): string => {
    return formatDate(startDate) + ' - ' + formatDate(endDate);
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='text-3xl text-white font-semibold'>
          My Certifications
        </div>
        <div className='text-white/80 leading-relaxed text-[15px]'>
          Earned industry-recognized certifications in cloud computing,
          demonstrating comprehensive expertise in AWS architecture, deployment,
          and optimization.
        </div>
      </div>
      <div className='flex flex-col gap-4 py-4 lg:h-[360px] lg:overflow-y-auto scrollbar-custom'>
        {certificate.map((cert, idx) => {
          return (
            <a
              key={idx}
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-start justify-center gap-1 bg-card rounded-3xl py-4 px-6'
            >
              <div className='flex items-center gap-4 text-white'>
                <cert.logo size={28} />
                <div>
                  <div className='text-[15px]'>{cert.name}</div>
                  <div className='text-sm text-white/85 pb-0.5'>
                    {cert.company}
                  </div>
                  {cert.endDate && (
                    <div className='text-sm'>
                      <span>Validity: </span>
                      <span className='text-primary'>
                        {showDuration(cert.startDate, cert.endDate)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Certification;
