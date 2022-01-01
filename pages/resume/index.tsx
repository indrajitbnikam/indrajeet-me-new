import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Journey from '../../containers/journey';
import SectionLayout from '../../layouts/section-layout';
import { getJourney, getResume } from '../../services/api';
import { saveAs } from 'file-saver';
import { FiDownloadCloud } from 'react-icons/fi';

const ResumePage: NextPage = ({ resumeUrl, journey }: any) => {
  const downloadResume = () => {
    saveAs(resumeUrl, 'Indrajeet-nikam_Resume.pdf');
  };

  return (
    <>
      <Head>
        <title>Indrajeet Nikam - Projects</title>
        <meta name="description" content="Indrajeet Nikam - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1200px] mx-auto flex justify-start px-5 pt-8">
        <button
          className="flex items-center text-xl rounded-lg px-6 py-2 border border-transparent bg-sky-200 text-sky-600 hover:bg-[#fffdf8b0] hover:border-sky-600 dark:bg-[#e4cf59] dark:text-gray-800 dark:hover:text-[#e4cf59] dark:hover:border-[#e4cf59] dark:hover:bg-[#fffdf81a] transition-all animate-bounce animate-bounce"
          onClick={() => downloadResume()}
        >
          <span className="mr-4">
            <FiDownloadCloud />
          </span>
          <span>Download Resume</span>
        </button>
      </div>

      <SectionLayout title="My" highlightedTitle="Journey">
        <Journey journey={journey} />
      </SectionLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const [resumeUrl, journey] = await Promise.all([getResume(), getJourney()]);

  return {
    props: {
      resumeUrl: resumeUrl.url,
      journey,
    },
  };
};

export default ResumePage;
