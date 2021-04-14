import { PokemonDetail } from './components/PokemonItem/types'

export type Pokemon = {
  pokemon: PokemonItem
}

export type PokemonItem = {
  name: string
  url: string
}

export type PokemonType = 'water' | 'fire' | 'grass' | 'rock' | 'psychic'

export type CartItem = {
  pokemon: PokemonDetail
  quantity: number
}
