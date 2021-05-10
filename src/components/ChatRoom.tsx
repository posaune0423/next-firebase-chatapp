import { useRef, useEffect, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { FirebaseContext } from '../components/Firebase'
import ChatMessage from './ChatMessage'
import MessageBox from './MessageBox'
import chatroomStyles from '../styles/components/chatroom.module.css'

type PropsType = {
  roomId: string
}

export default function ChatRoom(props: PropsType): JSX.Element {
  const roomId = props.roomId
  const { currentFirebase } = useContext(FirebaseContext)

  const firestore = currentFirebase.firestore()
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.where('roomId', '==', roomId).orderBy('createdAt').limit(100)
  const [messages] = useCollectionData(query, { idField: 'id' })
  const dummy = useRef<HTMLElement>(null)

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      <main className={chatroomStyles.main}>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <div>
        <MessageBox roomId={roomId} />
      </div>
    </>
  )
}
