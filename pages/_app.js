import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <body>
      <Component {...pageProps} />
    </body>
  )
}

export default MyApp
