import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31rem] w-[31rem] rounded-full blur-3xl -z-10'></div>
        <div className='bg-[#dbd7fb] absolute top-[-6rem] left-[-35rem] h-[31rem] w-[50rem] rounded-full blur-3xl -z-10 sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]'>
          <button className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31rem] w-[31rem] rounded-full blur-3xl -z-10' />
          Random
        </div>
        {children}
      </body>
    </html>
  );
}
