import { PokemonItem, PokemonType } from '../../types'

export type PokemonItemProps = {
  name: PokemonItem['name']
  url: PokemonItem['url']
  handleAddCart: (pokemon: PokemonDetail) => void
  type: PokemonType
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
