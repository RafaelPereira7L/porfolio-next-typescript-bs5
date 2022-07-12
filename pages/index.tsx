import Head from 'next/head'
import { useEffect } from 'react'
import bootstrap from 'bootstrap'
import Aos from 'aos'
import Script from 'next/script'
import Navbar from '../components/navbar'
import Perfil from '../components/perfil'
import Projetos from '../components/projetos'
import Footer from '../components/footer'
import Repositorios from '../components/repositorios'
import Stacks from '../components/stacks'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  return (
    <>
      <Head>
        <title>Portfólio - Rafael H. Pereira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Portfólio" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          
      </Head>
      <Navbar/>
      <Perfil/>
      <Stacks/>
      <Projetos/>
      <Repositorios/>
      <Footer/>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
</>

  )
}

export default Home
