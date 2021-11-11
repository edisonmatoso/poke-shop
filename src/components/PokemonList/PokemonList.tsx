import usePokemon from '../../hooks/usePokemon'
import { useEffect } from 'react'
import { PokemonType } from '../../types'
import PokemonItem from '../PokemonItem'
import useStyles from './PokemonList.styles'

type PokemonListProps = {
  type: PokemonType
}

const PokemonList = ({ type }: PokemonListProps) => {
  const classes = useStyles()
  const { pokemonList, loading, fetchPokemon, handleAddCart } = usePokemon({
    type,
  })
  const loadPokemon = async () => {
    await fetchPokemon()
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  pokemonList?.forEach((pokemon) => !!pokemon !== true && console.log('vazio'))

  return (
    <div className={classes.listRoot}>
      {loading && 'Loading...'}
      {pokemonList?.length ? (
        <ul className={classes.listContainer}>
          {pokemonList.map(({ pokemon }) => (
            <li key={pokemon.url} className={classes.itemContainer}>
              <PokemonItem
                name={pokemon.name}
                url={pokemon.url}
                handleAddCart={handleAddCart}
                type={type}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default PokemonList
