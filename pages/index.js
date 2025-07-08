import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página de Servicios</title>
        <meta name="description" content="Servicios de mantenimiento, TIC y automatización" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
