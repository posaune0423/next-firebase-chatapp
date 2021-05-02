import firebase from '../lib/firebase'
import 'firebase/storage'
import { createContext, useEffect, useState } from 'react'

const FirebaseContext = createContext(firebase)

const FirebaseProvider = ({ children }) => {
  const [currentFirebase, setCurrentFirebase] = useState(firebase)

  useEffect(() => {
    firebase && setCurrentFirebase(firebase)
  })

  return <FirebaseContext.Provider value={{ currentFirebase }}>{children}</FirebaseContext.Provider>
}

export { FirebaseContext, FirebaseProvider }
