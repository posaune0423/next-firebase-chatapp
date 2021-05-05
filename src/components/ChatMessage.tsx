import { useEffect, useState } from 'react'
import Image from 'next/image'
import firebase from '../lib/firebase'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import chatmessageStyles from '../styles/components/chatmessage.module.css'

export default function ChatMessage(props: firebase.firestore.DocumentData): JSX.Element {
  const { text, uid, photoURL, attachment } = props.message
  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received'
  const [fetchedImage, setfetchedImage] = useState('/images/empty.jpg')
  const [senderData, setSenderData] = useState(undefined)

  const getImage = (filename) => {
    const fileRef = firebase.storage().ref(filename)
    fileRef
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
    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setSenderData(doc.data())
        // console.log(doc.data())
      })
  }

  useEffect(() => {
    attachment && getImage(attachment)
  })

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top: '20vh',
      bottom: '20vh',
      right: '10vw',
      left: '10vw',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #232323',
      borderRadius: '1rem',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 3, 3)
    }
  }))
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    getUser(uid)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
          <div className={classes.paper}>
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
