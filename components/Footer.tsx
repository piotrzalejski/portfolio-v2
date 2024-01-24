export default function Footer() {
  return (
    <footer className='text-center mb-10 px-4 text-gray-500 w-full'>
      <small className='mb-2 block text-xs'>
        &copy; 2024 Piotr Zalejski. All rights reserved
      </small>
      <p className='mb-2 text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeSript, Tailwind,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
