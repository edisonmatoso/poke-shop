import { Typography } from '@material-ui/core'
import usePokemon from '../../hooks/usePokemon'
import { CartItem as CartItemType, PokemonType } from '../../types'
import useStyles from './Cart.styles'
import CartItem from './CartItem'

type CartProps = {
  cart: CartItemType[]
  type: PokemonType
}

const Cart = ({ cart, type }: CartProps) => {
  const classes = useStyles()
  const { handleRemoveCart } = usePokemon({ type })

  const currentCartItems = cart.filter(
    ({ pokemon: { type: cartItemType } }) => cartItemType === type
  )

  return (
    <div className={classes.cartRoot}>
      {currentCartItems.length ? (
        <>
          {currentCartItems.map((cartItem) => (
            <CartItem
              key={cartItem.pokemon.name}
              item={cartItem}
              handleRemoveCart={handleRemoveCart}
            />
          ))}
        </>
      ) : (
        <>
          <Typography variant="caption">The cart is empty</Typography>
        </>
      )}
    </div>
  )
}

export default Cart
