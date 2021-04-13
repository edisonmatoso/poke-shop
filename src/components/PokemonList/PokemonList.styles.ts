import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  listRoot: {
    height: '100%',
    overflow: 'auto',
    flex: 1
  },
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    flex: 1,
  },
  itemContainer: {
    boxSizing: 'border-box',
    padding: 5,
    width: '25%',
    display: 'flex',
    flex: 'none',

    [theme.breakpoints.down('md')]: {
      width: '33%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  }
}))

export default useStyles
