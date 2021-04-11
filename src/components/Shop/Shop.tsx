import { useEffect } from 'react'
import usePokemon from '../../hooks/usePokemon'
import { PokemonType } from '../../types'

type ShopProps = {
  type: PokemonType
}

const Shop = ({ type }: ShopProps) => {
  const { pokemonList, loading, fetchPokemon } = usePokemon({ type })

  const loadPokemon = async () => {
    await fetchPokemon()
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div>
      {loading && 'Loading...'}
      {pokemonList?.map((pokemon) => (
        <li key={pokemon.name}>
          <ul>{pokemon.name}</ul>
        </li>
      ))}
    </div>
  )
}

export default Shop
