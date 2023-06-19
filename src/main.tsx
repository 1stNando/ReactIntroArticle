import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
// We generally will not be touching any code in this file.
// Our main ts/js React code will be located in the App.tsx
