import { PokemonDetail, PokemonType } from '../../types'

export type CartProps = {
  cart: CartItem[]
  type: PokemonType
}

export type CartItem = {
  pokemon: PokemonDetail
  quantity: number
}
