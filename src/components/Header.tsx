import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PolicyIcon from '@material-ui/icons/Policy'
import { LogOut } from '../components/Buttons'
import headerStyle from '../styles/components/header.module.css'

export default function Header(): JSX.Element {
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
            <a href="/mypage/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <AccountCircleIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              mypage
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="/policy/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <PolicyIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              privacy policy
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://github.com/posaune0423/next-firebase-chatapp"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '1rem' }} />
              source code
            </a>
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="span" color="textPrimary" className={headerStyle.title}>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Curabitur
          </a>
        </Typography>
        <LogOut />
      </Toolbar>
    </AppBar>
  )
}
