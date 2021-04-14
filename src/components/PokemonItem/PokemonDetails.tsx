import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useStyles from './PokemonDetails.styles'
import { PokemonDetail } from './types'

type PokemonDetailsProps = {
  pokemon: PokemonDetail
  open: boolean
  handleCloseModal: () => void
  handleAddCart: (pokemon: PokemonDetail) => void
}

const PokemonDetails = ({
  pokemon,
  open,
  handleCloseModal,
  handleAddCart,
}: PokemonDetailsProps) => {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="pokemon-detail-title"
    >
      <DialogTitle id="pokemon-detail-title">{pokemon.name}</DialogTitle>
      <DialogContent>
        <div className={classes.imagesContainer}>
          <img src={pokemon.imageFront} alt={`${pokemon.name} front`} />
          <img src={pokemon.imageBack} alt={`${pokemon.name} back`} />
        </div>

        <TableContainer component={Paper}>
          <Table aria-label={`${pokemon.name} stats`}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                {pokemon.stats.map(({ name }) => (
                  <TableCell key={name}>{name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {pokemon.stats.map(({ value }) => (
                  <TableCell key={value}>{value}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Tooltip title="Add to cart">
          <IconButton onClick={() => handleAddCart(pokemon)}>
            <AddShoppingCartIcon color="primary" />
          </IconButton>
        </Tooltip>
      </DialogActions>
    </Dialog>
  )
}

export default PokemonDetails
