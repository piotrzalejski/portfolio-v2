import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  sender: string;
};

export default function ContactFormEmail({
  message,
  sender,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview> News Message from your portfollio site</Preview>
      <Tailwind>
        <Body className='bg-[#f4f9fc] text-black'>
          <Container>
            <Section className='bg-white border border-teal-950 my-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
