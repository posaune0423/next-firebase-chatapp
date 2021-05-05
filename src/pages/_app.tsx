import Head from 'next/head'
import { AuthProvider } from '../components/Auth'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles' // 追加
import { theme } from '../lib/theme' // 追加

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&family=Noto+Sans+JP:wght@300&family=Open+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </AuthProvider>
    </>
  )
}
