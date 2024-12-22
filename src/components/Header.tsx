'use client';

import { useMenu } from '@/state/menuContext';
import { NAVIGATION_PATH } from '../config/navigationPath';
import { IoMenu } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
    <div className='py-8 flex justify-between'>
      <Link
        className='text-white text-2xl font-semibold flex gap-1 cursor-pointer select-none'
        href={NAVIGATION_PATH.HOME}
      >
        <span>Shadman</span>
        <span className='text-primary'>Afzal</span>
      </Link>
      <div className='lg:flex lg:gap-8 items-center hidden'>
        <div className='flex gap-8 text-white'>
          {navLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.path}
                className={currentPath === link.path ? 'text-primary' : ''}
                aria-label={link.label}
              >
                <div
                  className={twMerge(
                    'hover:text-primary border-b-2 pb-0.5',
                    currentPath === link.path
                      ? 'border-b-primary'
                      : 'border-b-transparent'
                  )}
                >
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          className='rounded-full bg-primary px-4 text-background font-semibold text-sm py-1.5'
          aria-label="Let\'s Connect"
          href={NAVIGATION_PATH.CONTACT}
        >
          <span>Let&apos;s Connect</span>
        </Link>
      </div>
      <button
        className='lg:hidden text-primary'
        onClick={toggleMenu}
        aria-label='Open navigation menu'
      >
        <IoMenu size={30} />
      </button>
    </div>
  );
};

export default Header;
