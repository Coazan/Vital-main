import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginApp from './LoginApp.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './storage/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginApp />
    </Provider>
  </React.StrictMode>,
)
