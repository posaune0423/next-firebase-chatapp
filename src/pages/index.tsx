import Head from 'next/head'
import { useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { FirebaseProvider } from '../components/Firebase'
import ChatRoom from '../components/ChatRoom'
import Header from '../components/Header'
import RoomList from '../components/RoomList'
import Top from '../components/Top'
import indexStyles from '../styles/components/index.module.css'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return (
      <RoomList />
    )
  } else {
    return <Top />
  }
}
