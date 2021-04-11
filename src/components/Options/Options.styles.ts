import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  optionsRoot: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  button: {
    boxShadow: 'none',
    width: 100,
    position: 'relative',
    margin: theme.spacing(1),

    '&::before': {
      content: 'attr(aria-label)',
      position: 'absolute',
      top: 40,
      left: theme.spacing(1),
      opacity: 0,
      transition: 'top .10s',
      fontWeight: 'bold'
    },
    '&:hover::before': {
      top: 60,
      opacity: 1
    },

    [theme.breakpoints.down('sm')]: {
      '&::before': {
        left: 100,
        transition: 'left .10s',
      },
      '&:hover::before': {
        top: 15,
        left: 120,
      },

    }
  }
}))

export default useStyles
