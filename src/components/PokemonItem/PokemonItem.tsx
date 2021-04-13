/* eslint-disable camelcase */
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import useFetch from 'use-http'
import { PokemonItem as PokemonItemType } from '../../types'
import useStyles from './PokemonItem.styles'

type PokemonItemProps = {
  name: PokemonItemType['name']
  url: PokemonItemType['url']
}

type PokemonItemFetch = {
  sprites: {
    front_default: string
  }
}

const PokemonItem = ({ name, url }: PokemonItemProps) => {
  const { get } = useFetch<PokemonItemFetch>(url)
  const [imgSrc, setImgSrc] = useState<string>()
  const classes = useStyles()

  const fetchItem = async () => {
    const data = await get()
    setImgSrc(data?.sprites.front_default)
  }

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <Card className={classes.itemRoot}>
      <CardMedia style={{ height: 250 }} image={imgSrc} />
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  )
}

export default PokemonItem
