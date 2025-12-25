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
    <div className='py-8 flex justify-between'>
      <Link
        className='text-white text-2xl font-semibold cursor-pointer select-none'
        href={NAVIGATION_PATH.HOME}
      >
        <span>shadmanafzal</span>
              <span className='text-primary'>.in</span>
      </Link>
      <div className='lg:flex lg:gap-8 items-center hidden'>
        <div className='flex gap-8 text-white'>
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
                <div className='hover:text-primary'>{link.label}</div>
              </Link>
            );
          })}
        </div>
        <Link
          className='rounded-full bg-primary px-4 text-background font-semibold text-sm py-1.5 active:scale-95 transition-all duration-200 ease-in-out'
          aria-label="Let's Connect"
          href={NAVIGATION_PATH.CONTACT}
        >
          <span>Let&apos;s Connect</span>
        </Link>
      </div>
      <button
        className='lg:hidden text-primary active:scale-95 transition-all duration-200 ease-in-out'
        onClick={toggleMenu}
        aria-label='Open navigation menu'
      >
        <FaBurger size={30} />
      </button>
    </div>
  );
};

export default Header;
