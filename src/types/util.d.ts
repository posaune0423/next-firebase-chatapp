interface AuthContextProps {
  currentUser: firebase.User | null | undefined
}

interface FirebaseContextProps {
  currentFirebase: firebase.app.App | null | undefined
}

interface File {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export { AuthContextProps, FirebaseContextProps, File }
