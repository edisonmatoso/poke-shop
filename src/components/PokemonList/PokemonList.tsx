import usePokemon from '../../hooks/usePokemon'
import { useEffect } from 'react'
import { PokemonType } from '../../types'
import PokemonItem from '../PokemonItem'
import useStyles from './PokemonList.styles'

type PokemonListProps = {
  type: PokemonType
}

// export const ItemContainer: ComponentType<GridItem> = styled('li')({
//   boxSizing: 'border-box',
//   padding: 5,
//   width: '25%',
//   background: '#f5f5f5',
//   display: 'flex',
//   flex: 'none',
//   alignContent: 'stretch',
// })

// const ListContainer = styled('ul')({
// display: 'flex',
// flexWrap: 'wrap',
// padding: 0,
// flex: 1,
// })

const PokemonList = ({ type }: PokemonListProps) => {
  const classes = useStyles()
  const { pokemonList, loading, fetchPokemon } = usePokemon({ type })
  const loadPokemon = async () => {
    await fetchPokemon()
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div style={{ height: '100%', overflow: 'auto' }}>
      {loading && 'Loading...'}
      {pokemonList?.length ? (
        <>
          {/*
            Having a problem with the virtualized list.
            The pokemon image doesn't change when the list is filtered.

            <VirtuosoGrid
            totalCount={pokemonList?.length}
            overscan={200}
            components={{
              Item: ItemContainer,
              List: ListContainer,
              ScrollSeekPlaceholder: SkeletonItem,
            }}
            itemContent={(index) => {
              const { pokemon } = pokemonList[index]
              return <PokemonItem name={pokemon.name} url={pokemon.url} />
            }}
            style={{ height: '100%', width: '100%' }}
            scrollSeekConfiguration={{
              enter: (velocity) => Math.abs(velocity) > 200,
              exit: (velocity) => Math.abs(velocity) < 30,
            }}
          /> */}
          <ul className={classes.listContainer}>
            {pokemonList.map(({ pokemon }, index) => (
              <li key={pokemon.name} className={classes.itemContainer}>
                <PokemonItem name={pokemon.name} url={pokemon.url} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

export default PokemonList
