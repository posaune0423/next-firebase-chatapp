import { useState, useEffect, useContext } from 'react'
import firebase from '../lib/firebase'
import { FirebaseContext } from '../components/Firebase'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

type Props = {
  room: firebase.firestore.DocumentData
}

export default function roomCard(props: Props): JSX.Element {
  const room = props.room
  const { currentFirebase } = useContext(FirebaseContext)
  const [latestMessage, setlatestMessage] = useState('')

  const getLatestMessage = (roomId) => {
    currentFirebase
      .firestore()
      .collection('messages')
      .where('roomId', '==', roomId)
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()
      .then((snapshot) => {
        setlatestMessage(snapshot.docs[0].data().text)
      })
  }

  useEffect(() => {
    room && getLatestMessage(room.id)
  }, [])

  return (
    <a href={`rooms/${room.id}`} style={{ color: 'inherit', textDecoration: 'none' }} key={room.id}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar src={room.thumbnail} />
        </ListItemAvatar>
        <ListItemText primary={room.name} secondary={latestMessage} />
      </ListItem>
    </a>
  )
}
