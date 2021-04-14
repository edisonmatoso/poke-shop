import { Button, Typography } from '@material-ui/core'
import usePokemon from '../../hooks/usePokemon'
import { CartItem as CartItemType, PokemonType } from '../../types'
import useStyles from './Cart.styles'
import CartItem from './CartItem'
import DoneIcon from '@material-ui/icons/Done'
import { useState } from 'react'
import ThanksModal from './ThanksModal'

type CartProps = {
  cart: CartItemType[]
  type: PokemonType
}

const Cart = ({ cart, type }: CartProps) => {
  const classes = useStyles()
  const { checkout, handleRemoveCart } = usePokemon({ type })
  const [openModal, setOpenModal] = useState(false)

  const currentCartItems = cart.filter(
    ({ pokemon: { type: cartItemType } }) => cartItemType === type
  )

  const total = currentCartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.pokemon.price * currentItem.quantity,
    0
  )

  const handleCheckout = () => {
    checkout(type)
    setOpenModal(true)
  }

  return (
    <>
      <div className={classes.cartRoot}>
        {currentCartItems.length ? (
          <>
            <div className={classes.list}>
              {currentCartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.pokemon.name}
                  item={cartItem}
                  handleRemoveCart={handleRemoveCart}
                />
              ))}
            </div>
            <Button
              fullWidth
              startIcon={<DoneIcon />}
              variant="contained"
              color="primary"
              onClick={handleCheckout}
            >
              ${total}
            </Button>
          </>
        ) : (
          <>
            <Typography variant="caption">The cart is empty</Typography>
          </>
        )}
      </div>
      <ThanksModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default Cart
