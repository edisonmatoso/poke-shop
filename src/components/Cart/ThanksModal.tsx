import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import { useHistory } from 'react-router'

type ThanksModalProps = {
  open: boolean
  onClose: () => void
}

const ThanksModal = ({ open, onClose }: ThanksModalProps) => {
  const { push } = useHistory()
  const randomNumber = (Math.random() * 10).toFixed(0)

  return (
    <Dialog open={open} aria-labelledby="thanks-modal-title" onClose={onClose}>
      <DialogTitle id="thanks-modal-title">Thanks for your buying </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>See you in next time</Typography>
          <br />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`}
            alt="random pokemon"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => push('/')}>
          choose other types of pokemon
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ThanksModal
