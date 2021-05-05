import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import firebase from '../lib/firebase'
import { FirebaseContext } from '../components/Firebase'
import { Avatar } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import chatmessageStyles from '../styles/components/chatmessage.module.css'

export default function ChatMessage(props: firebase.firestore.DocumentData): JSX.Element {
  const { currentFirebase } = useContext(FirebaseContext)
  const { text, uid, photoURL, attachment } = props.message
  const messageClass = uid === currentFirebase.auth().currentUser.uid ? 'sent' : 'received'
  const [fetchedImage, setfetchedImage] = useState('/images/empty.jpg')
  const [senderData, setSenderData] = useState(undefined)
  const [open, setOpen] = useState(false)

  const getImage = (filename) => {
    currentFirebase
      .storage()
      .ref(filename)
      .getDownloadURL()
      .then((path) => {
        // console.log(path)
        setfetchedImage(path)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getUser = (uid) => {
    currentFirebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setSenderData(doc.data())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleOpen = () => {
    getUser(uid)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    attachment && getImage(attachment)
  }, [])

  return (
    <>
      <div className={`message ${messageClass}`}>
        <Avatar
          src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
          className={chatmessageStyles.img}
          onClick={handleOpen}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={chatmessageStyles.modal}>
            <Avatar
              style={{ height: '70px', width: '70px', margin: '0 auto' }}
              src={
                senderData
                  ? senderData.photoURL
                  : 'https://api.adorable.io/avatars/23/abott@adorable.png'
              }
            />
            <h2 id="simple-modal-title" style={{ textAlign: 'center' }}>
              {senderData && senderData.displayName}
            </h2>
            <p id="simple-modal-description" style={{ fontSize: '12px', textAlign: 'center' }}>
              {senderData && senderData.email}
            </p>
            <h4>Bio</h4>
            <p>
            {senderData && senderData.bio}
            </p>
          </div>
        </Modal>
        <div className={chatmessageStyles.div}>
          {text}
          {text && <br />}
          {attachment && (
            <a href={fetchedImage}>
              <Image src={fetchedImage} objectFit="contain" width={150} height={80} />
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .message {
          display: flex;
          align-items: center;
        }

        .sent {
          flex-direction: row-reverse;
        }

        .sent > div {
          color: #23223;
          background: #e8e8e8;
          align-self: flex-end;
        }

        .received > div {
          color: black;
          background: #e8e8e8;
        }
      `}</style>
    </>
  )
}
