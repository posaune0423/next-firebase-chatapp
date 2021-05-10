import { useRef, useEffect, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { FirebaseContext } from '../components/Firebase'
import ChatMessage from './ChatMessage'
import MessageBox from './MessageBox'
import chatroomStyles from '../styles/components/chatroom.module.css'

type Props = {
  roomId: string
}

export default function ChatRoom(props: Props): JSX.Element {
  const roomId = props.roomId
  const { currentFirebase } = useContext(FirebaseContext)

  const query = currentFirebase
    .firestore()
    .collection('messages')
    .where('roomId', '==', roomId)
    .orderBy('createdAt')
    .limit(100)
  const [messages] = useCollectionData(query, { idField: 'id' })

  const windowHeight = window.parent.screen.height
  const dummy = useRef<HTMLElement>(null)

  useEffect(() => {
    const mainHeight = document.getElementById('main').getBoundingClientRect().height
    const space = Math.floor(windowHeight * 0.92 - 56)

    if (space < mainHeight) {
      dummy.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <>
      <main className={chatroomStyles.main} id="main">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <div>
        <MessageBox roomId={roomId} />
      </div>
    </>
  )
}
