import Head from 'next/head'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import firebase from '../lib/firebase'
import Header from '../components/Header'
import RoomCard from '../components/RoomCard'
import roomsStyles from '../styles/components/rooms.module.css'
import utilsStyles from '../styles/utils.module.css'

export default function Rooms(): JSX.Element {
  const query = firebase.firestore().collection('rooms')
  const [rooms, loading] = useCollectionData(query, { idField: 'id' })

  if (loading)
    return (
      <div className={utilsStyles.progress}>
        <CircularProgress />
      </div>
    )

  return (
    <div className={roomsStyles.root}>
      <Head>
        <title>Curabitur | Rooms</title>
      </Head>
      <Header />
      <div className={roomsStyles.body}>
        <h2 style={{ marginLeft: '1rem' }}>Current Rooms</h2>
        <div className={roomsStyles.list}>
          <List component="nav" aria-label="secondary mailbox folder">
            {rooms && rooms.map((room) => <RoomCard room={room} key={room.id} />)}
          </List>
        </div>
      </div>
    </div>
  )
}
