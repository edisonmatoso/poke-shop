import { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import useFetch from 'use-http'
import useStyles from './PokemonItem.styles'
import { PokemonDetails } from './components'
import { PokemonDetail, PokemonItemFetch, PokemonItemProps } from './types'

const PokemonItem = ({ name, url }: PokemonItemProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonDetail>()
  const { get } = useFetch(url)
  const classes = useStyles()
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

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
      }

      setPokemon(pokemonObj)
    }
  }

  useEffect(() => {
    fetchItem()
  }, [])

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const getPrice = useCallback(() => {
    return (Math.random() * 100).toFixed(2)
  }, [name, url])

  const price = getPrice()

  return (
    <>
      {pokemon && (
        <>
          <Card className={classes.itemRoot}>
            <CardMedia style={{ height: 250 }} image={pokemon?.imageFront} />
            <CardContent>
              <div className={classes.contentPrimary}>
                <Typography>{pokemon.name}</Typography>
                <IconButton onClick={handleOpenModal}>
                  <FullscreenIcon color="primary" />
                </IconButton>
              </div>
              <Typography variant="caption">${price}</Typography>
            </CardContent>
          </Card>

          <PokemonDetails
            pokemon={pokemon}
            open={openModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )}
    </>
  )
}

export default PokemonItem
