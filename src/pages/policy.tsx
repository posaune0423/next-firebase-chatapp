import Head from 'next/head'
import { useContext } from 'react'
import { AuthContext } from '../components/Auth'
// import { FirebaseProvider } from '../components/Firebase'
// import ChatRoom from '../components/ChatRoom'
// import { LogIn } from '../components/Buttons'
import Header from '../components/Header'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)

  return (
    <div style={{ marginTop: '56px' }}>
      <Head>
        <title>Curabitur | Privacy Policy</title>
      </Head>
      <Header />
      <h1>Privacy Policy</h1>
    </div>
  )
}
