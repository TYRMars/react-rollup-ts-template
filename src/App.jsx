import React from 'react'
import './static/less/main.less'

class App extends React.Component { // eslint-disable-line
  render() {
    return (<div className="react-main">
      <h1>this is React-Builder</h1>
      <p className="react-p">you can use less</p>
      <p className="react-redux">you can use redux</p>
      <p className="react-redux">HMR loading</p>
    </div>) // eslint-disable-line
  }
}

export default App
