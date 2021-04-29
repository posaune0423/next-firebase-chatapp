import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import firebase from '../lib/firebase'
import FirebaseAuth from '../components/FirebaseAuth'
import LogOut from '../components/LogOut'
import ChatRoom from '../components/ChatRoom'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import indexStyles from '../styles/components/index.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'rgba(0, 0, 0, 0.87)'
  }
}))

export default function Home() {
  const [user] = useAuthState(firebase.auth())
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (user) {
    // console.log(user)
    return (
      <div>
        <Head>
          <title>Test Next App</title>
        </Head>
        <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
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
              <MenuItem onClick={handleClose}>Coming</MenuItem>
              <MenuItem onClick={handleClose}>Soon</MenuItem>
            </Menu>
            <Typography variant="h6" color="default" className={classes.title}>
              Curabitur
            </Typography>
            <LogOut />
          </Toolbar>
        </AppBar>
        <section className={indexStyles.appSection}>
          <ChatRoom />
        </section>
      </div>
    )
  } else {
    return (
      <div className={indexStyles.top}>
        <Head>
          <title>Login Page</title>
        </Head>
        <h2>Curabitur</h2>
        <p>Next n firebase  realtime chat app</p>
        <div className={indexStyles.login}>
          <FirebaseAuth />
        </div>
      </div>
    )
  }
}
