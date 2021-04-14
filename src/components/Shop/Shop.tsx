import {
  Avatar,
  Dialog,
  IconButton,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useState } from 'react'
import { useHistory } from 'react-router'
import usePokemon from '../../hooks/usePokemon'
import iconsPath from '../../iconsPath'
import { PokemonType } from '../../types'
import Cart from '../Cart'
import PokemonList from '../PokemonList'
import useStyles from './Shop.styles'

type ShopProps = {
  type: PokemonType
}

const Shop = ({ type }: ShopProps) => {
  const { filterPokemonList, cart } = usePokemon({ type })
  const classes = useStyles()
  const [openMobileCart, setOpenMobileCart] = useState(false)
  const imgSrc = `${process.env.PUBLIC_URL}${iconsPath[type]}`
  const { goBack } = useHistory()
  const theme = useTheme()
  const isMobile = !useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <div className={classes.shopRoot}>
      <header className={classes.header}>
        <IconButton aria-label="return to options" onClick={goBack}>
          <ArrowBackIcon color="primary" />
        </IconButton>
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: <Avatar style={{ marginRight: 10 }} src={imgSrc} />,
          }}
          onChange={filterPokemonList}
          color="primary"
        />
      </header>
      <div className={classes.content}>
        {isMobile && (
          <IconButton
            className={classes.cartMobile}
            onClick={() => setOpenMobileCart(true)}
          >
            <ShoppingCartIcon color="primary" />
          </IconButton>
        )}
        <PokemonList type={type} />
        {!isMobile && (
          <div className={classes.cart}>
            <Cart cart={cart} type={type} />
          </div>
        )}
      </div>

      {isMobile && (
        <Dialog fullScreen open={openMobileCart}>
          <Toolbar>
            <IconButton
              aria-label="return to shop"
              onClick={() => setOpenMobileCart(false)}
              className={classes.backButtonCart}
            >
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Toolbar>
          <Cart cart={cart} type={type} />
        </Dialog>
      )}
    </div>
  )
}

export default Shop
