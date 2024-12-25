import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Provider from './provider';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: {
      url: '/favicon.ico',
    },
  },
  title: 'Shadman Afzal | Fullstack Developer',
  description:
    'Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.',
  authors: {
    name: 'Shadman Afzal',
  },
  openGraph: {
    title: 'Shadman Afzal | Fullstack Developer',
    description:
      'Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.',
    authors: 'Shadman Afzal',
    images: {
      url: `${process.env.DOMAIN}/images/homepage.png`,
    },
    url: process.env.DOMAIN,
    siteName: 'Shadman Afzal | Fullstack Developer',
  },
  twitter: {
    card: 'summary_large_image',
    images: {
      url: `${process.env.DOMAIN}/images/homepage.png`,
    },
    title: 'Shadman Afzal | Fullstack Developer',
    description:
      'Experienced Fullstack Developer specializing in crafting efficient and scalable web solutions using Node.js, React, AWS, and modern web technologies. Explore my portfolio to discover projects showcasing my expertise in backend systems, frontend designs, and cloud-based solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-background'>
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
