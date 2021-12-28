import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Blogs from '../../containers/blogs';
import SectionLayout from '../../layouts/section-layout';
import { getAllBlogs } from '../../services/api';

const BlogsPage: NextPage = ({ blogs }: any) => {
  return (
    <>
      <Head>
        <title>Indrajeet Nikam - Blogs</title>
        <meta name="description" content="Indrajeet Nikam - Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionLayout title="All" highlightedTitle="Blogs">
        <Blogs blogs={blogs} showAll />
      </SectionLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

export default BlogsPage;
