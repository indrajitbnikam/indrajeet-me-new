import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../../containers/contact-form';
import SectionLayout from '../../layouts/section-layout';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Indrajeet Nikam - Contact</title>
        <meta name="description" content="Indrajeet Nikam - Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionLayout title="Get in" highlightedTitle="Touch">
        <ContactForm />
      </SectionLayout>
    </>
  );
};

export default ContactPage;
