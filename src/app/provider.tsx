import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { MenuProvider } from '@/state/menuContext';
import { ToastContainer } from 'react-toastify';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <ToastContainer
        hideProgressBar
        position='bottom-right'
        theme='colored'
        closeButton={false}
        icon={false}
        closeOnClick
        className='text-[15px] font-semibold'
      />
      <div className='bg-background min-h-screen font-primary'>
        <div className='relative container mx-auto'>
          <Header />
          <Navigation />
          {children}
        </div>
      </div>
    </MenuProvider>
  );
}
