import firebase from '../lib/firebase'
import 'firebase/storage'
import { FC, createContext, useEffect, useState } from 'react'

type FirebaseContextProps = {
  currentFirebase: firebase.app.App | null | undefined
}

const FirebaseContext = createContext<FirebaseContextProps>({ currentFirebase: firebase.app() })

const FirebaseProvider: FC = ({ children }) => {
  const [currentFirebase, setCurrentFirebase] = useState(firebase.app())

  useEffect(() => {
    firebase && setCurrentFirebase(firebase.app())
  })

  return (
    <FirebaseContext.Provider value={{ currentFirebase: currentFirebase }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContext, FirebaseProvider }
