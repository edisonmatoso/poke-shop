import React from 'react'
import { Pokemon } from '../../types'

type PokemonContextType = {
  pokemonList: Pokemon[] | undefined
  setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>
  fetchedPokemon: Pokemon[] | undefined
  setFetchedPokemon: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>
}

type PokemonProviderType = {
  children: React.ReactElement<any>
}

const defaultValues: PokemonContextType = {
  pokemonList: undefined,
  setPokemonList: () => {},
  fetchedPokemon: undefined,
  setFetchedPokemon: () => {},
}

export const PokemonContext = React.createContext(defaultValues)

const PokemonProvider = ({ children }: PokemonProviderType) => {
  const [pokemonList, setPokemonList] = React.useState<
    PokemonContextType['pokemonList']
  >()
  const [fetchedPokemon, setFetchedPokemon] = React.useState<
    PokemonContextType['fetchedPokemon']
  >()

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, fetchedPokemon, setFetchedPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
