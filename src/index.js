import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
// import Header from '../src/components/Header'
// import Footer from '../src/components/Footer'

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
    {/* <header>
      <Header />
    </header>

    <footer>
      <Footer />
    </footer> */}
  </div>
, document.getElementById('root'))
registerServiceWorker()
