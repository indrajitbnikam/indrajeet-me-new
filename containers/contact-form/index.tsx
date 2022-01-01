import React, { useRef, useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { Field, Form, Formik } from 'formik';

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (values: any, _: any) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE as string,
        values,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={{
        from_name: '',
        from_email: '',
        message: '',
      }}
      onSubmit={sendEmail}
    >
      <Form className="m-auto max-w-[800px] flex flex-col items-start">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-8">
            <label
              htmlFor="from_name"
              className="leading-7 text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              Name
            </label>
            <Field
              type="text"
              id="from_name"
              name="from_name"
              className="w-full mt-2 bg-[#fffdf8b0] dark:bg-[#fffdf81a] rounded border border-gray-300 dark:border-transparent focus:border-sky-400 dark:focus:border-[#e4cf59] text-base outline-none text-gray-800 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="from_email"
              className="leading-7 text-lg mb-4 text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <Field
              type="email"
              id="from_email"
              name="from_email"
              className="w-full mt-2 bg-[#fffdf8b0] dark:bg-[#fffdf81a] rounded border border-gray-300 dark:border-transparent focus:border-sky-400 dark:focus:border-[#e4cf59] text-base outline-none text-gray-800 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="message"
            className="leading-7 text-lg text-gray-600 dark:text-gray-300"
          >
            Message
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            className="h-32 w-full mt-2 bg-[#fffdf8b0] dark:bg-[#fffdf81a] rounded border border-gray-300 dark:border-transparent focus:border-sky-400 dark:focus:border-[#e4cf59] text-base outline-none text-gray-800 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></Field>
        </div>
        <div className="self-center">
          <button
            className="flex items-center text-xl rounded-lg px-6 py-2 disabled:bg-gray-200 disabled:text-gray-600 disabled:dark:bg-gray-200 disabled:dark:text-gray-600 disabled:hover:border-transparent disabled:cursor-not-allowed border border-transparent bg-sky-200 text-sky-600 hover:bg-[#fffdf8b0] hover:border-sky-600 dark:bg-[#e4cf59] dark:text-gray-800 dark:hover:text-[#e4cf59] dark:hover:border-[#e4cf59] dark:hover:bg-[#fffdf81a] transition-all"
            disabled={sent || loading}
          >
            {!sent ? (
              <>
                <span className="mr-4">
                  <RiMailSendLine />
                </span>
                <span>Reach out</span>
              </>
            ) : (
              <span>Email sent successfully!</span>
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
