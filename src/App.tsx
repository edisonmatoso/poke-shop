import { Provider } from 'use-http'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shop from './components/Shop'
import Options from './components/Options'

const App = () => {
  return (
    <Provider url="https://pokeapi.co/api/v2">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/fire">
              <Shop type="fire" />
            </Route>
            <Route path="/rock">
              <Shop type="rock" />
            </Route>
            <Route path="/psychic">
              <Shop type="psychic" />
            </Route>
            <Route path="/water">
              <Shop type="water" />
            </Route>
            <Route path="/grass">
              <Shop type="grass" />
            </Route>
            <Route path="/">
              <Options />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
