import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import privacyStyles from '../styles/components/privacy.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={privacyStyles.root}>
      <Head>
        <title>Curabitur | Privacy Policy</title>
      </Head>
      <Header />
      <div className={privacyStyles.body}>
        <Container maxWidth="sm" className={privacyStyles.container}>
          <h2>Privacy Policy</h2>
          <p>
            Explains what information we collect and why, how we use it, and how to review and
            update it.
          </p>
          <h2>Terms of Service</h2>
          <p>
            This service records your registered Google account information in the Firestore
            database. As this is an application for <a href="https://reactjs.org/">React</a> and
            <a href="https://firebase.google.com/docs/firestore"> Firebase </a>
            study, there is no secondary use of this information. If you need to delete your data,
            please contact us at <a href="https://github.com/posaune0423">this Github account</a>.
          </p>
        </Container>
      </div>
    </div>
  )
}
