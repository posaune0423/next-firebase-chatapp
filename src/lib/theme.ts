import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  // #1
  palette: {
    primary: {
      light: '#69a1ff',
      main: '#1a73e8',
      dark: '#0049b5',
      contrastText: '#fff'
    },
    // secondary: {
    //   light: '#8c9096',
    //   main: '#5f6368',
    //   dark: '#35393e',
    //   contrastText: '#454545'
    // }
  }
})
