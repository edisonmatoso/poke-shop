import { ChangeEvent, useContext, useEffect } from 'react'
import useFetch from 'use-http'
import { PokemonContext } from '../context/PokemonProvider/PokemonProvider'
import { Pokemon, PokemonType } from '../types'

type PokemonFetch = {
  pokemon: Pokemon[]
}

const usePokemon = ({ type }: {type: PokemonType}) => {
  const { pokemonList, setPokemonList, fetchedPokemon, setFetchedPokemon } = useContext(PokemonContext)

  const {
    get, loading, error
  } = useFetch<PokemonFetch>(`/type/${type}`)

  useEffect(() => {
    setPokemonList(fetchedPokemon)
  }, [fetchedPokemon])

  const fetchPokemon = async () => {
    setFetchedPokemon(undefined)
    const { pokemon } = await get()
    setFetchedPokemon(pokemon)
  }

  const filterPokemonList = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    const filteredList = pokemonList?.filter(({ pokemon }) => pokemon.name.toLowerCase().includes(value))

    value.length !== 0 ? setPokemonList(filteredList) : setPokemonList(fetchedPokemon)
  }

  return {
    error,
    fetchPokemon,
    filterPokemonList,
    loading,
    pokemonList,
  }
}

export default usePokemon
