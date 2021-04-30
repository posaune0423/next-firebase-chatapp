import React, { useRef, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from '../lib/firebase'
import 'firebase/storage'
import ChatMessage from './ChatMessage'
import MessageBox from './MessageBox'
import chatroomStyles from '../styles/components/chatroom.module.css'

export default function ChatRoom() {
  const firestore = firebase.firestore()
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(100)
  const [messages] = useCollectionData(query, { idField: 'id' })
  const dummy = useRef()

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
        <MessageBox />
      </div>
    </>
  )
}
