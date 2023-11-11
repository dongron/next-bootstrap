import Head from "next/head";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Software Recruitment</title>
        <meta name="description" content="Software Recruitment Company" />
      </Head>

      <main>
        <Hero />
        <Services />
      </main>
    </Layout>
  );
}
