import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { HelpText, Input, Textarea } from './styles';

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(() => {
    const form = document.getElementsByName('contact')[0] as HTMLFormElement;
    form.submit();
  }, []);

  return (
    <form
      className="flex flex-col pl-6 mx-auto lg:px-12 sm:pr-0"
      data-netlify="true"
      netlify-honeypot="true"
      name="contact"
      method="POST"
      action="/form-success"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="contact-name" className="sr-only">
        Name
      </label>
      <Input
        id="contact-name"
        type="text"
        name="name"
        placeholder="Name"
        error={!!errors.name}
        ref={register({ required: 'Please enter your name.' })}
      />
      {errors.name && <HelpText>{errors.name.message}</HelpText>}
      <label htmlFor="contact-subject" className="sr-only">
        Subject
      </label>
      <Input
        id="contact-subject"
        type="text"
        name="subject"
        placeholder="Subject"
        error={!!errors.subject}
        ref={register({ required: 'Please enter a subject' })}
      />
      {errors.subject && <HelpText>{errors.subject.message}</HelpText>}
      <label htmlFor="contact-email" className="sr-only">
        Email
      </label>
      <Input
        id="contact-email"
        type="email"
        name="email"
        placeholder="Email"
        error={errors.email}
        ref={register({ required: 'Please enter an email' })}
      />
      {errors.email && <HelpText>{errors.email.message}</HelpText>}
      <label htmlFor="contact-message" className="sr-only">
        Message
      </label>
      <Textarea
        id="contact-message"
        className="mt-4"
        rows={7}
        name="message"
        placeholder="Type your message here..."
        error={errors.message}
        ref={register({ required: 'Please enter a message' })}
      />
      {errors.message && <HelpText>{errors.message.message}</HelpText>}
      <button
        className="w-full py-4 mt-4 text-sm font-bold text-white transition-colors duration-300 bg-lochmara-700 hover:bg-black"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
