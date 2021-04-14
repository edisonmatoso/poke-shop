import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useFetch from 'use-http'
import useStyles from './PokemonItem.styles'
import PokemonDetails from './PokemonDetails'
import {
  PokemonDetail,
  PokemonItem as PokemonItemType,
  PokemonItemFetch,
  PokemonType,
} from '../../types'

type PokemonItemProps = {
  name: PokemonItemType['name']
  url: PokemonItemType['url']
  handleAddCart: (pokemon: PokemonDetail) => void
  type: PokemonType
}

const PokemonItem = ({ name, url, handleAddCart, type }: PokemonItemProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonDetail>()
  const { get } = useFetch(url)
  const classes = useStyles()
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

  const price = name.length * 52

  const fetchItem = async () => {
    const data: PokemonItemFetch | undefined = await get()

    if (data) {
      const formattedStats = data.stats.map((stats) => {
        return {
          name: stats.stat.name,
          value: stats.base_stat,
        }
      })

      const pokemonObj: PokemonDetail = {
        name: capitalizedName,
        imageFront: data.sprites.front_default,
        imageBack: data.sprites.back_default,
        stats: formattedStats,
        price: price,
        type: type,
      }

      setPokemon(pokemonObj)
    }
  }

  useEffect(() => {
    fetchItem()
  }, [])

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <>
      {pokemon && (
        <>
          <Card className={classes.itemRoot}>
            <CardMedia style={{ height: 250 }} image={pokemon?.imageFront} />
            <CardContent>
              <div className={classes.infos}>
                <Typography>{pokemon.name}</Typography>
                <IconButton onClick={handleOpenModal} aria-label="See details">
                  <FullscreenIcon color="primary" />
                </IconButton>
              </div>
              <div className={classes.shop}>
                <Typography variant="caption">${pokemon.price}</Typography>
                <IconButton onClick={() => handleAddCart(pokemon)}>
                  <AddShoppingCartIcon color="primary" />
                </IconButton>
              </div>
            </CardContent>
          </Card>

          <PokemonDetails
            pokemon={pokemon}
            open={openModal}
            handleCloseModal={handleCloseModal}
            handleAddCart={handleAddCart}
          />
        </>
      )}
    </>
  )
}

export default PokemonItem
