import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../components/Auth'
import { FirebaseProvider } from '../../components/Firebase'
import ChatRoom from '../../components/ChatRoom'
import Header from '../../components/Header'
import CircularProgress from '@material-ui/core/CircularProgress'
import indexStyles from '../../styles/components/index.module.css'

export default function Room(): JSX.Element {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const [id, setId] = useState<number>()

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(Number(router.query.id))
    }
  }, [router])

  if (currentUser) {
    return (
      <div>
        <Head>
          <title>Curabitur | Chat Room</title>
        </Head>
        <Header />

        <section className={indexStyles.appSection}>
          <FirebaseProvider>
            <ChatRoom roomId={id} />
          </FirebaseProvider>
        </section>
      </div>
    )
  } else {
    return (
      <div className={indexStyles.progress}>
        <CircularProgress style={{ width: '60px', height: '60px' }} />
      </div>
    )
  }
}
