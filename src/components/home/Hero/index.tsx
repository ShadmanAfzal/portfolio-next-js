import { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';
import ProfileImage from './ProfileImage';
import { formatYearsOfExperience } from '@/lib/experience';

const Hero: React.FC = () => {
  const socialLinks: { href: string; logo: IconType; ariaLabel: string }[] = [
    {
      href: 'https://github.com/ShadmanAfzal/',
      logo: LuGithub,
      ariaLabel: 'View my GitHub account',
    },
    {
      href: 'https://www.linkedin.com/in/shadman-afzal',
      logo: FaLinkedinIn,
      ariaLabel: 'View my Linkedin profile',
    },
    {
      href: 'https://x.com/shadman_nawab',
      logo: FaXTwitter,
      ariaLabel: 'Follow me on X',
    },
    {
      href: 'https://www.instagram.com/shadmanafzal.in/',
      logo: FaInstagram,
      ariaLabel: 'Follow me on Instagram',
    },
    {
      href: 'mailto:shadmana.afzal.7@gmail.com',
      logo: SiGmail,
      ariaLabel: 'Message me on Gmail',
    },
  ];

  return (
    <div className='flex flex-col-reverse items-center justify-center gap-4 lg:flex-row'>
      <div className='flex flex-col items-center gap-2 text-center lg:max-w-[500px] lg:items-start lg:text-start'>
        <div className='text-xl'>Fullstack Developer</div>
        <div className='flex flex-col items-center gap-2 text-5xl font-semibold lg:items-start'>
          <div className=''>Hello I&apos;m</div>
          <div className='text-primary font-secondary'>Shadman Afzal</div>
        </div>
        <div>
          <p className='text-balance text-center leading-loose text-black/75 lg:text-start'>
            A Fullstack JavaScript developer based in New Delhi, India, with{' '}
            {formatYearsOfExperience()} years of experience in Node.js,
            React.js, and AWS, focused on building software that solves
            real-world problems.
          </p>
        </div>
        <div className='my-2 flex flex-col items-center gap-4 lg:flex-row'>
          <a
            href='https://resume.shadmanafzal.in?download=true'
            className='rounded-full border bg-primary px-5 py-2 text-white text-sm font-secondary font-semibold transition-all duration-200 hover:text-background active:scale-95'
            download
            aria-label='Download my CV'
          >
            <div className='flex gap-2 items-center'>Download CV</div>
          </a>
          <div className='flex gap-4'>
            {socialLinks.map((link, idx) => {
              return (
                <a
                  key={idx}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-primary text-center text-primary transition-all duration-200 hover:bg-primary hover:text-background'
                  aria-label={link.ariaLabel}
                >
                  <link.logo size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default Hero;
