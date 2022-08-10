import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import Script from 'next/script';
import Navbar from '../components/navbar';
import Perfil from '../components/perfil';
import Projetos from '../components/projetos';
import Footer from '../components/footer';
import Stacks from '../components/stacks';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio - Rafael H. Pereira</title>
        <meta name="description" content="Portfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Perfil />
      <Stacks />
      <Projetos />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
};

export default Home;
