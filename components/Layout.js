import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

export default function IndexPage({children}) { 
  return (
    <>
      <Head>
        <title>Sprk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Sprk" />
        <meta name="og:image" content="/og-image.png" />
      </Head>
      <div className="relative min-h-screen">
        <Nav />
        {children}
        <Footer/>
      </div>
    </>
  )
}