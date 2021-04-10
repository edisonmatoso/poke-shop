import { Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import iconsPath from '../../iconsPath'

const Options = () => {
  return (
    <div>
      <Button
        component={Link}
        variant="contained"
        to="/fire"
        startIcon={
          <Avatar src={`${process.env.PUBLIC_URL}${iconsPath.fire}`} />
        }
      >
        fire
      </Button>
      <Button
        component={Link}
        variant="contained"
        to="/rock"
        startIcon={
          <Avatar src={`${process.env.PUBLIC_URL}${iconsPath.rock}`} />
        }
      >
        rock
      </Button>
      <Button
        component={Link}
        variant="contained"
        to="/psychic"
        startIcon={
          <Avatar src={`${process.env.PUBLIC_URL}${iconsPath.psychic}`} />
        }
      >
        psychic
      </Button>
      <Button
        component={Link}
        variant="contained"
        to="/water"
        startIcon={
          <Avatar src={`${process.env.PUBLIC_URL}${iconsPath.water}`} />
        }
      >
        water
      </Button>
      <Button
        component={Link}
        variant="contained"
        to="/grass"
        startIcon={
          <Avatar src={`${process.env.PUBLIC_URL}${iconsPath.grass}`} />
        }
      >
        grass
      </Button>
    </div>
  )
}

export default Options
