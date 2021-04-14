import { ChangeEvent, useContext, useEffect } from 'react'
import useFetch from 'use-http'
import { PokemonContext } from '../context/PokemonProvider/PokemonProvider'
import { CartItem, Pokemon, PokemonDetail, PokemonType } from '../types'

type PokemonFetch = {
  pokemon: Pokemon[]
}

const usePokemon = ({ type }: {type: PokemonType}) => {
  const {
    pokemonList,
    setPokemonList,
    fetchedPokemon,
    setFetchedPokemon,
    cart,
    setCart
  } = useContext(PokemonContext)

  const {
    get, loading, error
  } = useFetch<PokemonFetch>(`/type/${type}`)

  useEffect(() => {
    setPokemonList(fetchedPokemon)
  }, [fetchedPokemon])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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

  const handleAddCart = (pokemon: PokemonDetail) => {
    const indexFound = cart.findIndex(({ pokemon: { name } }) => name === pokemon.name)

    if (indexFound > -1) {
      const itemFound = cart[indexFound]
      const changedItemFound = { ...itemFound, quantity: itemFound.quantity + 1 }

      const newCart = Object.assign([...cart], { [indexFound]: changedItemFound })

      setCart(newCart)
    } else {
      const newItem: CartItem = {
        pokemon,
        quantity: 1,
      }

      setCart([...cart, newItem])
    }
  }

  const handleRemoveCart = (pokemon: PokemonDetail) => {
    const indexFound = cart.findIndex(({ pokemon: { name } }) => name === pokemon.name)

    if (indexFound > -1 && cart[indexFound].quantity === 1) {
      const newCart = [...cart.slice(0, indexFound), ...cart.slice(indexFound + 1)]
      setCart(newCart)
    }

    if (indexFound > -1 && cart[indexFound].quantity > 1) {
      const itemFound = cart[indexFound]
      const changedItemFound = { ...itemFound, quantity: itemFound.quantity - 1 }

      const newCart = Object.assign([...cart], { [indexFound]: changedItemFound })

      setCart(newCart)
    }
  }

  const checkout = (type: PokemonType) => {
    const newCart = cart.filter(cartItem => cartItem.pokemon.type !== type)
    setCart(newCart)
  }

  return {
    cart,
    checkout,
    error,
    fetchPokemon,
    filterPokemonList,
    handleAddCart,
    handleRemoveCart,
    loading,
    pokemonList,
  }
}

export default usePokemon
