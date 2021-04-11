import React from 'react'
import { PokemonItem } from '../../types'

type PokemonContextType = {
  pokemonList: PokemonItem[] | undefined
  setPokemonList: React.Dispatch<
    React.SetStateAction<PokemonItem[] | undefined>
  >
}

type PokemonProviderType = {
  children: React.ReactElement<any>
}

const defaultValues: PokemonContextType = {
  pokemonList: undefined,
  setPokemonList: () => {},
}

export const PokemonContext = React.createContext(defaultValues)

const PokemonProvider = ({ children }: PokemonProviderType) => {
  const [pokemonList, setPokemonList] = React.useState<
    PokemonContextType['pokemonList']
  >()

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
