import { useState, useContext } from 'react'
import { FirebaseContext } from '../components/Firebase'
import SendIcon from '@material-ui/icons/Send'
import ImageIcon from '@material-ui/icons/Image'
import chatroomStyles from '../styles/components/chatroom.module.css'

export default function MessageBox() {
  const { currentFirebase } = useContext(FirebaseContext)
  const [formValue, setFormValue] = useState('')
  const [fileFormData, setfileFormData] = useState('')

  const firestore = currentFirebase.firestore()
  const auth = currentFirebase.auth()
  const hasImage = fileFormData ? true : false
  const messagesRef = firestore.collection('messages')
  const storageRef = currentFirebase.storage().ref()

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser
    await messagesRef.add({
      text: formValue,
      createdAt: currentFirebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      attachment: fileFormData ? fileFormData.name : null
    })

    setFormValue('')
    setfileFormData('')
  }

  const saveImage = (file) => {
    const fileRef = storageRef.child(file.name)
    fileRef.put(file)
  }

  const setImage = (e) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    setfileFormData(file)
    saveImage(file)
  }

  const clickInput = () => {
    document.getElementById('image_input').click()
  }

  return (
    <form onSubmit={sendMessage} className={chatroomStyles.form}>
      <div className={chatroomStyles.image}>
        <ImageIcon color={hasImage ? 'disabled' : 'primary'} onClick={clickInput} />
        <input
          type="file"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          id="image_input"
          value=""
          onChange={(e) => setImage(e)}
        />
      </div>
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Enter a message"
        className={chatroomStyles.input}
      />

      <button
        type="submit"
        disabled={!formValue && !fileFormData}
        className={chatroomStyles.button}
      >
        <SendIcon color={formValue || fileFormData ? 'primary' : 'disabled'} />
      </button>
    </form>
  )
}
