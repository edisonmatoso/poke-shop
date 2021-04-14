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

export type PokemonItemFetch = {
  sprites: {
    front_default: string
    back_default: string
  }
  stats: StatusFetch[]
}

type StatusFetch = {
  base_stat: number
  stat: { name: string }
}

export type PokemonDetail = {
  name: string
  imageFront: string
  imageBack: string
  stats: Stats[]
  price: number
  type: PokemonType
}

export type Stats = {
  name: string
  value: number
}
