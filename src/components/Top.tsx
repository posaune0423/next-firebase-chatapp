import Head from 'next/head'
import { LogIn } from '../components/Buttons'
import TopStyles from '../styles/components/top.module.css'

export default function Top() {
  return (
    <div className={TopStyles.top}>
      <Head>
        <title>Curabitur | Login</title>
      </Head>
      <h2>Curabitur</h2>
      <p>Next n firebase realtime chat app</p>
      <div className={TopStyles.login}>
        <LogIn />
      </div>
    </div>
  )
}
