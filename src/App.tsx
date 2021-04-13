import { CachePolicies, Provider } from 'use-http'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shop from './components/Shop'
import Options from './components/Options'
import useStyles from './App.styles'
import PokemonProvider from './context/PokemonProvider'
import { ThemeProvider } from '@material-ui/styles'
import {
  fireTheme,
  grassTheme,
  psychicTheme,
  rockTheme,
  waterTheme,
} from './themes'

const App = () => {
  const classes = useStyles()

  return (
    <Provider
      url="https://pokeapi.co/api/v2"
      options={{ cachePolicy: CachePolicies.NO_CACHE }}
    >
      <PokemonProvider>
        <Router>
          <div className={classes.appRoot}>
            <Switch>
              <Route path="/fire">
                <ThemeProvider theme={fireTheme}>
                  <Shop type="fire" />
                </ThemeProvider>
              </Route>
              <Route path="/rock">
                <ThemeProvider theme={rockTheme}>
                  <Shop type="rock" />
                </ThemeProvider>
              </Route>
              <Route path="/psychic">
                <ThemeProvider theme={psychicTheme}>
                  <Shop type="psychic" />
                </ThemeProvider>
              </Route>
              <Route path="/water">
                <ThemeProvider theme={waterTheme}>
                  <Shop type="water" />
                </ThemeProvider>
              </Route>
              <Route path="/grass">
                <ThemeProvider theme={grassTheme}>
                  <Shop type="grass" />
                </ThemeProvider>
              </Route>
              <Route path="/">
                <Options />
              </Route>
            </Switch>
          </div>
        </Router>
      </PokemonProvider>
    </Provider>
  )
}

export default App
