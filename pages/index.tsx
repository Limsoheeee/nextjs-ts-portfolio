import Head from "next/head";
import Layout from "../components/common/Layout";
import Hero from "../components/home/hero";
import Animation from "../components/home/animation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="Limsohee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
            <Animation />
          </div>
        </section>
      </Layout>
    </div>
  );
}
