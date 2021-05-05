import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../components/Auth'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Avatar, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { FirebaseContext } from '../components/Firebase'
import Header from '../components/Header'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)
  const { currentFirebase } = useContext(FirebaseContext)
  const [userInfo, setUserInfo] = useState(undefined)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (currentUser) {
      currentFirebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          setUserInfo(doc.data())
          setValue(doc.data().bio)
          console.log(doc.data())
        })
    }
  }, [currentUser])

  const submitForm = () => {
    currentFirebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .update({
        bio: value
      })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (currentUser) {
    return (
      <div style={{ marginTop: '56px' }}>
        <Head>
          <title>Curabitur | My Page</title>
        </Head>
        <Header />
        <div style={{ paddingTop: '2rem' }}>
          <Avatar
            style={{ height: '70px', width: '70px', margin: '0 auto' }}
            src={
              userInfo ? userInfo.photoURL : 'https://api.adorable.io/avatars/23/abott@adorable.png'
            }
          />
          <h2 id="simple-modal-title" style={{ textAlign: 'center' }}>
            {userInfo && userInfo.displayName}
          </h2>
          <p id="simple-modal-description" style={{ fontSize: '12px', textAlign: 'center' }}>
            {userInfo && userInfo.email}
          </p>
          <div style={{ padding: '20px' }}>
            <div style={{ margin: '0 auto' }}>
              <TextField
                label="Bio"
                multiline
                rows={4}
                value={value}
                style={{ width: '100%' }}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem', float: 'right' }}
                onClick={submitForm}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ textAlign: 'center', padding: '42vh 0' }}>
        <CircularProgress style={{ width: '60px', height: '60px' }} />
      </div>
    )
  }
}
