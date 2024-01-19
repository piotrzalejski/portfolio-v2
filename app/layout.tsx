import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

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
    <html lang='en'>
      <body className={`${inter.className} text-gray-950 relative h-[5000px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
