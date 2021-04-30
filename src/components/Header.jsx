import Link from 'next/link'
import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LogOut from '../components/LogOut'

export default function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }))

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
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
          <MenuItem onClick={handleClose}><Link href="https://github.com/posaune0423/next-firebase-chatapp" color="inherit"><GitHubIcon /></Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="https://www.linkedin.com/in/posaune0423/" color="inherit"><LinkedInIcon /></Link></MenuItem>
        </Menu>
        <Typography variant="h6" component="span" color="textPrimary" className={classes.title}>
          Curabitur
        </Typography>
        <LogOut />
      </Toolbar>
    </AppBar>
  )
}
