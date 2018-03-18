import React, { Component } from 'react'
import Header from '../src/components/Header'
import Footers from '../src/components/Footer'
// import Landing from '../src/components/Landing'
// import ShoppingCart from '../src/components/ShoppingCart'
// import Billing from '../src/components/Billing'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {/* <Landing /> */}
        </main>
        <footer>
          <Footers />
        </footer>
      </div>
    )
  }
}

export default App
