import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  tableHead: {
    backgroundColor: theme.palette.primary.light
  },
}))

export default useStyles
