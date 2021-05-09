import { useContext } from 'react'
import { AuthContext } from '../../components/Auth'
import RoomList from '../../components/RoomList'
import CircularProgress from '@material-ui/core/CircularProgress'
import utilsStyles from '../../styles/utils.module.css'

export default function Home(): JSX.Element {
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <RoomList />
  } else {
    return (
      <div className={utilsStyles.progress}>
        <CircularProgress style={{ width: '60px', height: '60px' }} />
      </div>
    )
  }
}
