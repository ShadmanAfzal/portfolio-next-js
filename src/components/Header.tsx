'use client';

import { useMenu } from '@/state/menuContext';
import { NAVIGATION_PATH } from '../config/navigationPath';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaBurger } from 'react-icons/fa6';

type NavLinkProps = {
  label: string;
  path: string;
};

const Header: React.FC = () => {
  const { toggleMenu } = useMenu();
  const currentPath = usePathname();

  const navLinks: NavLinkProps[] = [
    {
      label: 'Home',
      path: NAVIGATION_PATH.HOME,
    },
    {
      label: 'Resume',
      path: NAVIGATION_PATH.RESUME,
    },
    {
      label: 'Project',
      path: NAVIGATION_PATH.PROJECT,
    },
  ];

  return (
    <div className='flex justify-between py-8'>
      <div />
      <div className='hidden items-center lg:flex lg:gap-8'>
        <div className='flex gap-8'>
          {navLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.path}
                className={
                  currentPath === link.path ? 'text-primary' : undefined
                }
                aria-label={link.label}
              >
                <div className='hover:text-primary'>
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          className='rounded-full bg-primary px-4 py-1.5 text-sm font-secondary font-semibold text-background transition-all duration-200 ease-in-out active:scale-95'
          aria-label="Let's Connect"
          href={NAVIGATION_PATH.CONTACT}
        >
          <span>Let&apos;s Connect</span>
        </Link>
      </div>
      <button
        className='lg:hidden text-primary font-secondary active:scale-95 transition-all duration-200 ease-in-out'
        onClick={toggleMenu}
        aria-label='Open navigation menu'
      >
        <FaBurger size={30} />
      </button>
    </div>
  );
};

export default Header;
