import React from 'react'
import { CartItem } from '../../components/Cart/types'
import { Pokemon } from '../../types'

type PokemonContextType = {
  pokemonList: Pokemon[] | undefined
  setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>
  fetchedPokemon: Pokemon[] | undefined
  setFetchedPokemon: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

type PokemonProviderType = {
  children: React.ReactElement<any>
}

const defaultValues: PokemonContextType = {
  pokemonList: undefined,
  setPokemonList: () => {},
  fetchedPokemon: undefined,
  setFetchedPokemon: () => {},
  cart: [],
  setCart: () => {},
}

export const PokemonContext = React.createContext(defaultValues)

const PokemonProvider = ({ children }: PokemonProviderType) => {
  const storageCart = JSON.parse(window.localStorage.getItem('cart') ?? '[]')
  const hasCartItem = !!storageCart

  const initialCart = hasCartItem ? storageCart : []

  const [pokemonList, setPokemonList] =
    React.useState<PokemonContextType['pokemonList']>()
  const [fetchedPokemon, setFetchedPokemon] =
    React.useState<PokemonContextType['fetchedPokemon']>()
  const [cart, setCart] =
    React.useState<PokemonContextType['cart']>(initialCart)

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        fetchedPokemon,
        setFetchedPokemon,
        cart,
        setCart,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
