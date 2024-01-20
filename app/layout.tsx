import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Piotr | Personal Porfolio',
  description:
    'Piotr is a detail-oriented QA engineer transitioning into Fullstack Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} relative h-[5000px] pt-28 sm:pt-36`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
