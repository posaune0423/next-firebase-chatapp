import firebase from '../lib/firebase'
import { createContext, useEffect, useState } from 'react'

// type AuthContextProps = {
//   currentUser: firebase.User | null | undefined
// }

const AuthContext = createContext(undefined)

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // called when the login state changes
      setCurrentUser(user)
    })
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
