import { useContext } from 'react'
import { AuthContext } from '../components/Auth'
import RoomList from '../components/RoomList'
import Top from '../components/Top'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <RoomList />
  } else {
    return <Top />
  }
}
