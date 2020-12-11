import React from 'react';
import { Input, Textarea } from '../../styles';

export const ContactForm: React.FC = () => (
  <form
    className="flex flex-col pl-6 mx-auto lg:px-12 sm:pr-0"
    data-netlify="true"
    netlify-honeypot="true"
    name="contact"
    method="POST"
  >
    <Input type="hidden" name="form-name" value="contact" />
    <Input type="text" name="name" placeholder="Name" />
    <Input type="text" name="subject" placeholder="Subject" />
    <Input type="email" name="email" placeholder="Email" />
    <Textarea
      className="mt-4"
      rows={7}
      name="message"
      placeholder="Type your message here..."
    />
    <button
      className="w-full py-4 mt-4 text-sm text-white transition-colors duration-300 bg-lochmara-500 hover:bg-black"
      type="submit"
    >
      Submit
    </button>
  </form>
);
