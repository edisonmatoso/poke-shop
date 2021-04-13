import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  cartButton: {
    cursor: 'pointer'
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  tableHead: {
    backgroundColor: theme.palette.primary.light
  }
}))

export default useStyles
