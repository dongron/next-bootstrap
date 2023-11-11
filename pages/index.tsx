import Head from 'next/head';

import Hero from '../components/home/Hero';
import Services from '../components/home/Services';

import Layout from '../components/layout';
import WorkWith from '../components/home/WorkWith';
import LatestJobs from '../components/home/LatestJobs';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Software Recruitment</title>
        <meta name="description" content="Software Recruitment Company" />
      </Head>

      <main>
        <Hero />
        <WorkWith />
        <LatestJobs />
        <Services />
      </main>
    </Layout>
  );
}
