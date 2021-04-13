import { createMuiTheme } from '@material-ui/core'
import orange from '@material-ui/core/colors/orange'
import brown from '@material-ui/core/colors/brown'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

export const fireTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
      light: orange[100],
      dark: orange[800],
    }
  }
})

export const rockTheme = createMuiTheme({
  palette: {
    primary: {
      main: brown[400],
      light: brown[100],
      dark: brown[800],
    }
  }
})

export const psychicTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[400],
      light: red[100],
      dark: red[800],
    }
  }
})

export const waterTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400],
      light: blue[100],
      dark: blue[800],
    }
  }
})

export const grassTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
      light: green[100],
      dark: green[800],
    }
  }
})
