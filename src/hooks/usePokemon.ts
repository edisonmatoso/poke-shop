import { useContext } from 'react'
import useFetch from 'use-http'
import { PokemonContext } from '../context/PokemonProvider/PokemonProvider'
import { Pokemon, PokemonType } from '../types'

type PokemonFetch = {
  pokemon: Pokemon[]
}

const usePokemon = ({ type }: {type: PokemonType}) => {
  const { pokemonList, setPokemonList } = useContext(PokemonContext)
  const {
    get, loading, error
  } = useFetch<PokemonFetch>(`/type/${type}`)

  const fetchPokemon = async () => {
    const { pokemon } = await get()
    setPokemonList(pokemon)
  }

  return {
    error,
    fetchPokemon,
    loading,
    pokemonList,
  }
}

export default usePokemon
