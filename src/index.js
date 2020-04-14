import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
