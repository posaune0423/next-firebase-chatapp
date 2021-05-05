import firebase from '../lib/firebase'
import { AuthContextProps } from '../types/util'
import { FC, createContext, useEffect, useState } from 'react'

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // called when login status change
      setCurrentUser(user)
      if (user) {
        firebase.firestore().collection('users').doc(user.uid).set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        })
      }
    })
  })
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
