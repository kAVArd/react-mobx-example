import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import appStore from './stores/appStore'

ReactDOM.render(<App store={appStore} />, document.getElementById('root'))
