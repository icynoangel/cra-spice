## Tech Stack

- React https://reactjs.org/
- Redux https://redux.js.org/
- redux-requests https://www.npmjs.com/package/redux-requests
- fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- react-intl https://github.com/formatjs/react-intl
- react-router https://reacttraining.com/react-router/web/guides/quick-start
- classnames https://github.com/JedWatson/classnames
- sass https://sass-lang.com/
- BEM http://getbem.com/

### Unit testing

- Jest https://jestjs.io/
- Enzyme https://airbnb.io/enzyme/
- enzyme-to-json https://www.npmjs.com/package/enzyme-to-json
- fetch-mock https://www.npmjs.com/package/fetch-mock
- redux-mock-store https://github.com/dmitry-zaets/redux-mock-store

Project is generated with CRA (create-react-app).


## Install steps

### Install nvm (https://github.com/nvm-sh/nvm)

`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

### Install node 10.16.1

`nvm install 10.16.1`
`nvm use 10.16.1`
`nvm alias default 10.16.1`

### Install yarn to speed up package instalation

`npm install -g yarn`

### Install packages

`yarn`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn dev`

Also starts node server that at this point only provides Intl messages

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:update`

Update tests snapshots

### `yarn coverage`

Generate unit tests coverage

### `yarn eslint`

Run linter on source files

### `yarn beautify`

Run prettier on source files

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## How to run app in production mode

### Build app 

`yarn build`

### Switch to root

`sudo -i`

### Install nvm and node specified at the top of this Readme file

### Switch to project folder

### Run server in production mode

`yarn server`

Open [http://localhost](http://localhost) to view it in the browser.

