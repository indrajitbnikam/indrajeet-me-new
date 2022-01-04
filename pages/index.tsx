import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Blogs from '../containers/blogs';
import Hero from '../containers/hero';
import Projects from '../containers/projects';
import SectionLayout from '../layouts/section-layout';
import Skills from '../containers/skills';
import { getFirstNBlogs, getFirstNProjects, getResume } from '../services/api';

const Home: NextPage = ({ projects }: any) => {
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

      <SectionLayout title="My" highlightedTitle="Projects">
        <Projects projects={projects} />
      </SectionLayout>

      {/* <SectionLayout title="My" highlightedTitle="Blogs">
        <Blogs blogs={blogs} />
      </SectionLayout> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getFirstNProjects();

  return {
    props: {
      projects,
    },
  };
};

export default Home;
