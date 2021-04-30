import Head from 'next/head'
import '../styles/global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&family=Noto+Sans+JP:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
