import usePokemon from '../../hooks/usePokemon'
import { PokemonType } from '../../types'

type ShopProps = {
  type: PokemonType
}

const Shop = ({ type }: ShopProps) => {
  const { pokemonList, loading } = usePokemon({ type })

  return (
    <div>
      {loading && 'Loading...'}
      {pokemonList?.map(({ pokemon }) => (
        <li key={pokemon.name}>
          <ul>{pokemon.name}</ul>
        </li>
      ))}
    </div>
  )
}

export default Shop
