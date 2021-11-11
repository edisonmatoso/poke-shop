import { IconButton, Typography } from '@material-ui/core'
import { useState } from 'react'
import { PokemonDetail } from '../../types'
import useStyles from './CartItem.styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { CartItem as CartItemType } from './types'

type CartItemProps = {
  item: CartItemType
  handleRemoveCart: (pokemon: PokemonDetail) => void
}

const CartItem = ({ item, handleRemoveCart }: CartItemProps) => {
  const [hovered, setHovered] = useState(false)
  const classes = useStyles()

  return (
    <div
      key={item.pokemon.name}
      className={classes.item}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.pokemon.imageFront} alt={item.pokemon.name} />
      <div className={classes.details}>
        <Typography variant="caption">{item.pokemon.name}</Typography>
        <Typography variant="caption">${item.pokemon.price}</Typography>
        <Typography variant="caption">x{item.quantity}</Typography>
      </div>
      {hovered && (
        <IconButton onClick={() => handleRemoveCart(item.pokemon)}>
          <DeleteIcon color="primary" />
        </IconButton>
      )}
    </div>
  )
}

export default CartItem
