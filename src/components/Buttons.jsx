import FirebaseAuth from './FirebaseAuth'
import { Button } from '@material-ui/core'
import firebase from '../lib/firebase'

const LogIn = () => {
  return <FirebaseAuth />
}

const LogOut = () => {
  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('successfully logged out')
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
