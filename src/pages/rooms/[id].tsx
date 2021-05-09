import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AuthContext } from '../../components/Auth'
import ChatRoom from '../../components/ChatRoom'
import { FirebaseProvider } from '../../components/Firebase'
import Header from '../../components/Header'
import indexStyles from '../../styles/components/index.module.css'
import utilsStyles from '../../styles/utils.module.css'

export default function Room(): JSX.Element {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()

  const [id, setId] = useState<string>()

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id))
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
      <div className={utilsStyles.progress}>
        <CircularProgress style={{ width: '60px', height: '60px' }} />
      </div>
    )
  }
}
