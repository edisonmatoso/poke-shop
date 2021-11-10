
# poke-shop

The app has five different shops, by pokemon type, using the same code-base. You can see the app running [here](https://lucid-noether-839b38.netlify.app/)

## Technical Description

The application had built using [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [react-router](https://reactrouter.com/web/guides/quick-start) and [Material-UI](https://material-ui.com/), the API used was [PokeAPI](https://pokeapi.co/).

To be possible to run the five shops using the same code I wrote a Context, where I built a data structure that allows distributing the fetched data to each of the stores.
The code organization was created thinking in [module colocation](https://kentcdodds.com/blog/colocation).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
