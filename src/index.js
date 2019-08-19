import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import appStore from './stores/appStore'
import userStore from './stores/userStore'

ReactDOM.render(<App appStore={appStore} userStore={userStore} />, document.getElementById('root'))
