import { FC, createContext, useEffect, useState } from 'react'
import 'firebase/storage'
import firebase from '../lib/firebase'
import { FirebaseContextProps } from '../types/util'

const FirebaseContext = createContext<FirebaseContextProps>({ currentFirebase: firebase.app() })

const FirebaseProvider: FC = ({ children }) => {
  const [currentFirebase, setCurrentFirebase] = useState(firebase.app())

  useEffect(() => {
    firebase && setCurrentFirebase(firebase.app())
  }, [])

  return (
    <FirebaseContext.Provider value={{ currentFirebase: currentFirebase }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContext, FirebaseProvider }
