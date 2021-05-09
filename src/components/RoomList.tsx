import Head from 'next/head'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import firebase from '../lib/firebase'
import Header from '../components/Header'
import roomsStyles from '../styles/components/rooms.module.css'

export default function Rooms(): JSX.Element {
  const query = firebase.firestore().collection('rooms')
  const [rooms, loading] = useCollectionData(query, { idField: 'id' })

  if (loading)
    return (
      <div className={roomsStyles.progress}>
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
            {rooms &&
              rooms.map((room) => (
                <a
                  href={`rooms/${room.id}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  key={room.id}
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar src={room.thumbnail} />
                    </ListItemAvatar>
                    <ListItemText primary={room.name} secondary={room.latest_message} />
                  </ListItem>
                </a>
              ))}
          </List>
        </div>
      </div>
    </div>
  )
}
