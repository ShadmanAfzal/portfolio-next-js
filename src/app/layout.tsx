import './globals.css';
import { MenuProvider } from '@/state/menuContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shadman Afzal | Fullstack Developer',
  description:
    'Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.',
  authors: {
    name: 'Shadman Afzal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <meta property='og:title' content='Shadman Afzal | Fullstack Developer' />
      <meta
        property='og:description'
        content='Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.'
      />
      <meta
        property='og:image'
        content={`${process.env.DOMAIN}/images/homepage.png`}
      />
      <meta property='og:url' content={process.env.DOMAIN} />
      <meta property='og:type' content='website' />
      <meta
        property='og:site_name'
        content='Shadman Afzal | Fullstack Developer'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Shadman Afzal | Fullstack Developer'
      />
      <meta
        name='twitter:description'
        content='Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.'
      />
      <meta
        name='twitter:image'
        content={`${process.env.DOMAIN}/images/homepage.png`}
      />
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
