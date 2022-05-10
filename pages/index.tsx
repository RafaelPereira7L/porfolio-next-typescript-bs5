import Head from 'next/head'
import bootstrap from 'bootstrap'
import Script from 'next/script'
import Navbar from './contents/navbar'
import Perfil from './contents/perfil'
import Projetos from './contents/projetos'
import Footer from './contents/footer'
import Repositorios from './contents/repositorios'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfólio Rafael H. Pereira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Portfólio" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"/>
      </Head>
      <Navbar/>
      <Perfil/>
      <Projetos/>
      <Repositorios/>
      <Footer/>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
</>

  )
}

export default Home
