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
      className='fixed inset-0 z-20 bg-black/40 backdrop-blur-sm transition-opacity duration-300'
      onClick={closeMenu}
    >
      <div
        className='absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background shadow-xl transition-transform duration-300 ease-out'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='h-full flex flex-col p-6'>
          <button
            onClick={closeMenu}
            className='self-end text-primary hover:opacity-70 transition-opacity active:scale-90'
            aria-label='Close navigation menu'
          >
            <IoMdClose size={28} />
          </button>

          <div className='mt-6 mb-12'>
            <div className='text-white text-2xl font-semibold'>
              <span>shadmanafzal</span>
              <span className='text-primary'>.in</span>
            </div>
          </div>

          <nav className='flex flex-col gap-4'>
            {navLinks.map((navLink, idx) => {
              const isActive = currentPath === navLink.path;
              return (
                <button
                  key={idx}
                  className={`text-center px-4 h-[40px] rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-background'
                      : 'bg-card bg-opacity-45 text-white cursor-pointer'
                  }`}
                  onClick={() => navigateToTab(navLink)}
                >
                  <span className='text-sm font-semibold'>{navLink.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
