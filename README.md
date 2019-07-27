
## Install steps

### Install nvm (https://github.com/nvm-sh/nvm)

`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

### Install node 8.16.0 which comes with npm 6.4.1

`nvm install 8.16.0`
`nvm use 8.16.0`
`nvm alias default 8.16.0`

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

