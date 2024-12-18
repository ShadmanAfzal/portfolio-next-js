'use client';

import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { useMenu } from '@/state/menuContext';
import { NAVIGATION_PATH } from '@/config/navigationPath';
import { usePathname, useRouter } from 'next/navigation';

type NavLinkProps = {
  label: string;
  path: string;
};

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

export default function Navigation() {
  const { isOpen, closeMenu } = useMenu();
  const currentPath = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateToTab = (tab: NavLinkProps) => {
    closeMenu();
    router.push(tab.path);
  };

  return (
    <div
      className='absolute left-0 right-0 top-0 z-20 h-screen overscroll-none bg-black/30'
      onClick={() => closeMenu()}
    >
      <div
        className='flex flex-col bg-background float-right items-center w-[80%] h-full py-8 px-4'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='flex items-end justify-end self-end'>
          <button onClick={closeMenu} className='text-2xl text-primary'>
            <IoMdClose size={30} />
          </button>
        </div>
        <div className='mt-12'>
          <div className='text-white text-2xl font-semibold flex gap-1 py-4'>
            <span>Shadman</span>
            <span className='text-primary'>Afzal</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            {navLinks.map((navLink, idx) => {
              return (
                <div
                  key={idx}
                  className={`hover:text-primary text-center w-max text-lg ${
                    currentPath === navLink.path ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => navigateToTab(navLink)}
                >
                  {navLink.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
