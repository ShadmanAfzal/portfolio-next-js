import { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';
import ProfileImage from './ProfileImage';

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
      href: 'https://x.com/JustinKhan123',
      logo: FaXTwitter,
      ariaLabel: 'Follow me on X',
    },
    {
      href: 'mailto:shadmana.afzal.7@gmail.com',
      logo: SiGmail,
      ariaLabel: 'Message me on Gmail',
    },
  ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-4'>
      <div className='flex flex-col gap-2 text-center items-center lg:items-start lg:max-w-[500px]'>
        <div className='text-white text-xl'>Fullstack Developer</div>
        <div className='flex flex-col items-center lg:items-start gap-2 text-5xl font-semibold'>
          <div className='text-white'>Hello I&apos;m</div>
          <div className='text-primary'>Shadman Afzal</div>
        </div>
        <div>
          <p className='text-white/80 leading-loose text-center lg:text-start'>
            A seasoned software engineer with a passion for excellence and a
            proven track record, seeking an exciting new opportunity to drive
            transformative technological solutions.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 my-2 items-center'>
          <a
            href='/shadman_afzal_resume.pdf'
            className='px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-200 uppercase font-semibold text-sm active:scale-95'
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
                  className='w-8 h-8 flex justify-center items-center rounded-full border border-primary text-primary text-center hover:bg-primary hover:text-background transition-all duration-200'
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
