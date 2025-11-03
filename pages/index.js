import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({ timezone }) {
  return (
    <div id="top">
      <Head>
        <title>Navis Temlis · Venture design studio for emerging brands</title>
        <meta
          name="description"
          content="Navis Temlis is a boutique venture design studio crafting visual identities, digital experiences, and launch campaigns for founders bringing soulful brands to market."
        />
      </Head>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Process />
        <Showcase />
        <Contact />
        <section className="section section--surface">
          <div className="timezone">
            <span className="eyebrow">Working hours</span>
            <h2>We&apos;re currently sketching moodboards in {timezone}.</h2>
            <p>
              Studio calls happen twice weekly while async updates flow daily in Notion, Figma, and shared journals—wherever you are in the world.
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
