import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx' // eslint-disable-line
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(<AppContainer><Component/></AppContainer>, root) // eslint-disable-line
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default // eslint-disable-line
    render(NextApp)
  })
}
