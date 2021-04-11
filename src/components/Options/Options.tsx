import { Avatar, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import iconsPath from '../../iconsPath'
import useStyles from './Options.styles'

const Options = () => {
  const classes = useStyles()

  return (
    <div className={classes.optionsRoot}>
      <Typography>Choose your pokemon type store</Typography>
      <div className={classes.buttonsContainer}>
        <Button
          component={Link}
          className={classes.button}
          to="/fire"
          aria-label="fire"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}${iconsPath.fire}`}
            alt="fire icon"
          />
        </Button>
        <Button
          component={Link}
          className={classes.button}
          to="/rock"
          aria-label="rock"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}${iconsPath.rock}`}
            alt="rock icon"
          />
        </Button>
        <Button
          component={Link}
          className={classes.button}
          to="/psychic"
          aria-label="psychic"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}${iconsPath.psychic}`}
            alt="psychic icon"
          />
        </Button>
        <Button
          component={Link}
          className={classes.button}
          to="/water"
          aria-label="water"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}${iconsPath.water}`}
            alt="water icon"
          />
        </Button>
        <Button
          component={Link}
          className={classes.button}
          to="/grass"
          aria-label="grass"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}${iconsPath.grass}`}
            alt="grass icon"
          />
        </Button>
      </div>
    </div>
  )
}

export default Options
