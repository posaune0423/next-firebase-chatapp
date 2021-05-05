import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
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
            <a
              href="https://github.com/posaune0423/next-firebase-chatapp"
              style={{ color: 'inherit' }}
            >
              <GitHubIcon />
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="https://www.linkedin.com/in/posaune0423/" style={{ color: 'inherit' }}>
              <LinkedInIcon />
            </a>
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="span" color="textPrimary" className={headerStyle.title}>
          Curabitur
        </Typography>
        <LogOut />
      </Toolbar>
    </AppBar>
  )
}
