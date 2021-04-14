import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  shopRoot: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    maxHeight: 100,
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing(1)}px 0`,

    '& > *:first-child': {
      marginRight: theme.spacing(1)
    }
  },
  content: {
    overflow: 'hidden',
    display: 'flex',
    position: 'relative'
  },
  cart: {
    flex: 0.3,
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  cartMobile: {
    position: 'absolute'
  },
  backButtonCart: {
    paddingLeft: 0
  }
}))

export default useStyles
