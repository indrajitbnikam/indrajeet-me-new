import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Projects from '../../containers/projects';
import SectionLayout from '../../layouts/section-layout';
import { getAllProjects } from '../../services/api';

const ProjectsPage: NextPage = ({ projects }: any) => {
  return (
    <>
      <Head>
        <title>Indrajeet Nikam - Projects</title>
        <meta name="description" content="Indrajeet Nikam - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionLayout title="All" highlightedTitle="Projects">
        <Projects projects={projects} showAll />
      </SectionLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;
