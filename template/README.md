## Usage 
``` 
npx create-react-app myAppName --template redux-thunk 
```

## This is template app containing the next packages

    - "node-sass": "^4.13.1",
    - "prettier": "^2.0.2",
    - "react": "^16.13.1",
    - "react-dom": "^16.13.1",
    - "react-redux": "^7.2.0",
    - "react-router-dom": "^5.1.2",
    - "react-scripts": "3.4.1",
    - "redux": "^4.0.5",
    - "redux-persist": "^6.0.0",
    - "redux-thunk": "^2.3.0"

## The structure is the next 
```
.
├── gitignore
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── index.js
    ├── index.scss
    ├── logo.svg
    ├── redux
    │   ├── actions
    │   │   ├── homePage.js           <-------- Here are some example actions
    │   │   └── statusActions.js      <-------- Here we should handle how many api calls we have
    │   ├── configureStore.js         <-------- This is where the magic occurs 
    │   ├── constants
    │   │   └── index.js              <-------- Here we should define some contstants to use around
    │   ├── reducer
    │   │   ├── index.js
    │   │   └── reducers
    │   │       └── homePage.js       <-------- Here we reduce the data we get from the actions
    │   ├── reducers.js
    │   ├── state.js                  <-------- Here we have the initial State
    │   └── states
    │       └── homePage.js
    ├── router
    │   ├── App.js
    │   └── routes
    │       ├── HomePage.jsx
    │       ├── index.js
    │       └── routes.js              <-------- Here we setup our routes
    ├── serviceWorker.js
    └── setupTests.js

```
## Run npm i && npm start to start using it

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
