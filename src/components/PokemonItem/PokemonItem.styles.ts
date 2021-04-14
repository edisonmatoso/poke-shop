import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  itemRoot: {
    width: '100%',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    textTransform: 'capitalize',
  },
  infos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}))

export default useStyles
