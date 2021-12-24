import type { NextPage } from 'next';
import Head from 'next/head';
import Blogs from '../components/blogs';
import Hero from '../components/hero';
import SectionLayout from '../components/section-layout';
import Skills from '../components/skills';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Indrajeet Nikam</title>
        <meta name="description" content="Indrajeet Nikam - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <SectionLayout title="My" highlightedTitle="Skills">
        <Skills />
      </SectionLayout>

      <SectionLayout title="My" highlightedTitle="Blogs">
        <Blogs />
      </SectionLayout>

      {/* <SectionLayout title="My" highlightedTitle="Projects">
        Projects
      </SectionLayout>

      <SectionLayout title="My" highlightedTitle="Contact">
        Contact
      </SectionLayout>

      <SectionLayout title="My" highlightedTitle="Journey">
        Journey
      </SectionLayout> */}
    </>
  );
};

export default Home;
