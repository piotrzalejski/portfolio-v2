'use client';

import useSectionInView from '@/lib/hooks';
import SectionHeading from './Section-Heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='relative h-12 w-32 bg-custom-teal hover:bg-custom-teal-dark rounded-full text-white active:scale-95 transition outline-none hover:scale-105 disabled:scale-100 disabled:bg-opacity-65 items-center justify-center dark:bg-[#f97316] dark:text-[#1a202c] dark:hover:bg-[#f97316]/80'
      disabled={pending}
    >
      {pending ? (
        <div className='flex items-center justify-center'>
          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
        </div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='scroll-mt-28 mb-20 w-[min(100%,38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading='Contact Me' />
      <form
        className='flex flex-col mt-10'
        action={async (formData) => {
          //@ts-ignore
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          } else if (data && data.error) {
            toast.error(data.error);
            return;
          } else {
            toast.success('Email Sent successfully');
          }
        }}
      >
        <input
          placeholder='Your email'
          type='email'
          name='email'
          required
          maxLength={200}
          className='h-14 rounded-lg border border-black/10 px-4 dark:text-black dark:bg-white/75 dark:focus:bg-white dark:outline-none'
        />
        <textarea
          className='h-52 rounded-lg my-3 p-4 dark:text-black dark:bg-white/75 dark:focus:bg-white dark:outline-none'
          name='message'
          placeholder='Your message...'
          maxLength={500}
        />
        <div className='text-center'>
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
