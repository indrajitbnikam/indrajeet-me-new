import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Blogs from '../../containers/blogs';
import { BlogInfo } from '../../containers/blogs/types';
import SectionLayout from '../../layouts/section-layout';
import { getAllBlogs } from '../../services/api';

const BlogsPage: NextPage = ({ importantBlogs, casualBlogs }: any) => {
  return (
    <>
      <Head>
        <title>Indrajeet Nikam - Blogs</title>
        <meta name='description' content='Indrajeet Nikam - Blogs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SectionLayout title='Important' highlightedTitle='Blogs'>
        <Blogs blogs={importantBlogs} showAll />
      </SectionLayout>

      <SectionLayout title='Casual' highlightedTitle='Blogs'>
        <Blogs blogs={casualBlogs} showAll />
      </SectionLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await getAllBlogs();

  let importantBlogs: BlogInfo[] = [];
  let casualBlogs: BlogInfo[] = [];

  (blogs as BlogInfo[]).forEach((blog) => {
    if (blog.type === 'important') importantBlogs.push(blog);
    if (blog.type === 'casual') casualBlogs.push(blog);
  });

  return {
    props: {
      importantBlogs,
      casualBlogs,
    },
  };
};

export default BlogsPage;
