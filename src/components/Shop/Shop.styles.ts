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
    height: 'inherit',
    overflow: 'hidden',
    display: 'flex',
  }
}))

export default useStyles
