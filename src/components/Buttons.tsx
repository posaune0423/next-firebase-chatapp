import FirebaseAuth from './FirebaseAuth'
import { Button } from '@material-ui/core'
import firebase from '../lib/firebase'
import { useRouter } from 'next/router'

const LogIn = (): JSX.Element => {
  return <FirebaseAuth />
}

const LogOut = (): JSX.Element => {
  const router = useRouter()

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('successfully logged out')
        router.push('/')
      })
      .catch((error) => {
        console.log(`An error occurred (${error})`)
      })
  }

  return (
    <>
      <Button variant="contained" color="default" onClick={signOut}>
        Logout
      </Button>
    </>
  )
}

export { LogIn, LogOut }
