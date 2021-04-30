import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '../lib/firebase'
import FirebaseAuth from '../components/FirebaseAuth'
import ChatRoom from '../components/ChatRoom'
import Header from '../components/Header'
import indexStyles from '../styles/components/index.module.css'

export default function Home() {
  const [user] = useAuthState(firebase.auth())

  if (user) {
    return (
      <div>
        <Head>
          <title>Curabitur | Chat Room</title>
        </Head>
        <Header />

        <section className={indexStyles.appSection}>
          <ChatRoom />
        </section>
      </div>
    )
  } else {
    return (
      <div className={indexStyles.top}>
        <Head>
          <title>Curabitur | Login</title>
        </Head>
        <h2>Curabitur</h2>
        <p>Next n firebase realtime chat app</p>
        <div className={indexStyles.login}>
          <FirebaseAuth />
        </div>
      </div>
    )
  }
}
