import type { Metadata } from 'next';
import './globals.css';
import { MenuProvider } from '@/state/menuContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Shadman Afzal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className='bg-background'>
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
        <Analytics />
      </body>
    </html>
  );
}
