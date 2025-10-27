import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { MenuProvider } from '@/state/menuContext';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
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
