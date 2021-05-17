import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../components/Auth'
import Top from '../components/Top'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()

  if (currentUser) {
    router.push('/rooms/')
    return <></>
  } else {
    return <Top />
  }
}
