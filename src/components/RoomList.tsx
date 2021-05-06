import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
// import Divider from '@material-ui/core/Divider'
// import InboxIcon from '@material-ui/icons/Inbox'
import Header from '../components/Header'
import roomsStyles from '../styles/components/rooms.module.css'

const rooms = [
  {
    id: 1,
    name: 'Chat Room 1',
    latest_message: 'laest message here',
    thumbnail: 'https://wired.jp/app/uploads/2018/01/GettyImages-522585140_w1920.webp'
  },
  {
    id: 2,
    name: 'Chat Room 2',
    latest_message: 'laest message here',
    thumbnail: 'https://wired.jp/app/uploads/2018/01/GettyImages-522585140_w1920.webp'
  },
  {
    id: 3,
    name: 'Chat Room 3',
    latest_message: 'laest message here',
    thumbnail: 'https://wired.jp/app/uploads/2018/01/GettyImages-522585140_w1920.webp'
  },
  {
    id: 4,
    name: 'Chat Room 4',
    latest_message: 'laest message here',
    thumbnail: 'https://wired.jp/app/uploads/2018/01/GettyImages-522585140_w1920.webp'
  },
  {
    id: 5,
    name: 'Chat Room 5',
    latest_message: 'laest message here',
    thumbnail: 'https://wired.jp/app/uploads/2018/01/GettyImages-522585140_w1920.webp'
  }
]

export default function Rooms(): JSX.Element {
  return (
    <div className={roomsStyles.root}>
      <Head>
        <title>Curabitur | Rooms</title>
      </Head>
      <Header />
      <div className={roomsStyles.body}>
        <h2>Current Rooms</h2>
        <div className={roomsStyles.list}>
          <List component="nav" aria-label="secondary mailbox folder">
            {rooms.map((room) => (
              <a
                href={`rooms/${room.id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
                key={room.id}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar src="https://tcd-theme.com/wp-content/uploads/2020/05/54d363afee1cc7ec6f21390fba59744e.jpg" />
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
