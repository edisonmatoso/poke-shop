export type Pokemon = {
  pokemon: PokemonItem
}

export type PokemonItem = {
  name: string
  url: string
}

export type PokemonType = 'water' | 'fire' | 'grass' | 'rock' | 'psychic'
