import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  cartRoot: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between'
  },
  list: {
    overflow: 'auto'
  }
})

export default useStyles
