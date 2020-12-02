import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}


export default function IndexPage({children}) { 
  const [navOpen, setNavOpen] = useState(false)
  const [isSm, setIsSm] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)
  const { width } = useWindowSize()

  useEffect(() => {
    // nav is toggle-able on mobile only
    const isSmall = width && width < 768
    setIsSm(isSmall)
    setNavOpen(!isSmall)
  }, [width])

  return (
    <>
      <Head>
        <title>Sprk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Sprk" />
        <meta name="og:image" content="/og-image.png" />
      </Head>
      <div className={`relative min-h-screen max-w-screen overflow-x-hidden`} >
        <Nav toggleNav={toggleNav} navOpen={navOpen} isSm />
        <div className="nav-toggle">
          <button
            className="outline-none focus:outline-none"
            onClick={toggleNav}
          >
            {navOpen ? (
              <img src="/X.svg" />
            ) : (
              <img src="/MENU.svg" />
            )}
          </button>
        </div>
        <div className="children-wrap">
          {children}
        </div>
        <Footer/>
      </div>
    </>
  )
}