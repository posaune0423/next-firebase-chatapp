import { useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../lib/firebase'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PolicyIcon from '@material-ui/icons/Policy'
import ChatIcon from '@material-ui/icons/Chat'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import headerStyle from '../styles/components/header.module.css'

type PropsType = {
  currentRoom?: string
}

export default function Header(props: PropsType): JSX.Element {
  const currentRoom = props.currentRoom ? props.currentRoom : null
  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter()
  const open = Boolean(anchorEl)

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('successfully logged out')
        router.push('/')
      })
      .catch((error) => {
        console.log(`An error occurred (${error})`)
      })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="span" className={headerStyle.title}>
          {currentRoom ? <a href="/rooms/">{currentRoom}</a> : <a href="/">Curabitur</a>}
        </Typography>
        <IconButton
          edge="start"
          className={headerStyle.menuButton}
          color="default"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a href="/mypage/" className={headerStyle.a}>
              <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              mypage
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="/" className={headerStyle.a}>
              <ChatIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              Rooms
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="/policy/" className={headerStyle.a}>
              <PolicyIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              Privacy policy
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://github.com/posaune0423/next-firebase-chatapp"
              className={headerStyle.a}
            >
              <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              Source code
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <span className={headerStyle.a} onClick={signOut}>
              <ExitToAppIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              Logout
            </span>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
