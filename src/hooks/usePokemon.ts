import useFetch from 'use-http'
import { Pokemon, PokemonType } from '../types'

type PokemonFetch = {
  pokemon: Pokemon[]
}

const usePokemon = ({ type }: {type: PokemonType}) => {
  const {
    data,
    loading
  } = useFetch<PokemonFetch>(`/type/${type}`, [])

  return {
    pokemonList: data?.pokemon,
    loading
  }
}

export default usePokemon
