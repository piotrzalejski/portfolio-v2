'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMsg } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  message: z.string({
    invalid_type_error: 'Invvalid Message',
  }),
});

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (validatedFields.success) {
    const sender = validatedFields.data.email;
    const message = validatedFields.data.message;

    let data;
    try {
      data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        subject: 'Message from contact form',
        to: ['pz106p@gmail.com'],
        reply_to: sender,
        react: React.createElement(ContactFormEmail, { message, sender }),
      });

      if (data.error) {
        throw new Error(data.error.message);
      }

      //console.log(data);
      return {
        data,
      };
    } catch (error: unknown) {
      //console.log('error: ', error);
      return {
        error: getErrorMsg(error),
      };
    }
  } else {
    console.log('Validation Failed: ', validatedFields.error.errors);
  }
};
