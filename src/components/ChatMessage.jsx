import { useEffect, useState } from 'react'
import Image from 'next/image'
import firebase from '../lib/firebase'
import 'firebase/storage'
import { Avatar } from '@material-ui/core'
import chatmessageStyles from '../styles/components/chatmessage.module.css'

export default function ChatMessage(props) {
  const { text, uid, photoURL, attachment } = props.message
  const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received'
  const [fetchedImage, setfetchedImage] = useState('/images/empty.jpg')

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

  useEffect(() => {
    attachment && getImage(attachment)
  })

  return (
    <>
      <div className={`message ${messageClass}`}>
        <Avatar
          src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
          className={chatmessageStyles.img}
        />
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
