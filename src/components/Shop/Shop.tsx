import { Avatar, IconButton, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
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
  const imgSrc = `${process.env.PUBLIC_URL}${iconsPath[type]}`
  const { goBack } = useHistory()

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
        <PokemonList type={type} />
        <div className={classes.cart}>
          <Cart cart={cart} type={type} />
        </div>
      </div>
    </div>
  )
}

export default Shop
