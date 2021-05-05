import Head from 'next/head'
import { useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { FirebaseProvider } from '../components/Firebase'
import ChatRoom from '../components/ChatRoom'
import Header from '../components/Header'
import Top from '../components/Top'
import indexStyles from '../styles/components/index.module.css'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return (
      <div>
        <Head>
          <title>Curabitur | Chat Room</title>
        </Head>
        <Header />

        <section className={indexStyles.appSection}>
          <FirebaseProvider>
            <ChatRoom />
          </FirebaseProvider>
        </section>
      </div>
    )
  } else {
    return <Top />
  }
}
