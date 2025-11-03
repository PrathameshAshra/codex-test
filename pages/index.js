import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({ timezone }) {
  return (
    <div id="top">
      <Head>
        <title>DEVLOPMENT COPNSITLACYU | Software Consulting</title>
        <meta
          name="description"
          content="SSR marketing site for DEVLOPMENT COPNSITLACYU—partnering with teams to ship robust software faster."
        />
      </Head>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
        <section className="section section--surface">
          <div className="timezone">
            <span className="eyebrow">Working hours</span>
            <h2>We&apos;re currently operating in {timezone}.</h2>
            <p>
              Our globally distributed consultants collaborate asynchronously and schedule live sessions aligned with your team&apos;s
              preferred timezone.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  return {
    props: {
      timezone: timeZone
    }
  };
}
