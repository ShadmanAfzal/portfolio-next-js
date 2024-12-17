'use client';

import { useMenu } from '@/state/menuContext';
import { NAVIGATION_PATH } from '../config/navigationPath';
import { IoMenu } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';

type NavLinkProps = {
  label: string;
  path: string;
};

const Header: React.FC = () => {
  const router = useRouter();
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
    {
      label: 'Contact',
      path: NAVIGATION_PATH.CONTACT,
    },
  ];

  const toggleTab = (path: string) => {
    router.push(path);
  };

  return (
    <div className='py-8 flex justify-between'>
      <div
        className='text-white text-2xl font-semibold flex gap-1 cursor-pointer select-none'
        onClick={() => router.push('/')}
      >
        <span>Shadman</span>
        <span className='text-primary'>Afzal</span>
      </div>
      <div className='lg:flex lg:gap-8 hidden'>
        <div className='flex gap-8 text-white'>
          {navLinks.map((link, idx) => {
            return (
              <button
                key={idx}
                onClick={() => toggleTab(link.path)}
                name={link.label}
                className={
                  currentPath === link.path ? 'text-primary' : undefined
                }
              >
                <div
                  className={`hover:text-primary border-b-2 pb-0.5 ${
                    currentPath === link.path
                      ? 'border-b-primary'
                      : 'border-b-transparent'
                  }`}
                >
                  {link.label}
                </div>
              </button>
            );
          })}
        </div>
        <button
          className='rounded-full bg-primary px-4 text-background font-semibold text-sm'
          onClick={() => router.push(NAVIGATION_PATH.CONTACT)}
        >
          Hire Me
        </button>
      </div>
      <button className='lg:hidden text-primary' onClick={toggleMenu}>
        <IoMenu size={30} />
      </button>
    </div>
  );
};

export default Header;
