// Need to add react-router-dom
import uuid from 'uuid'
import React, {Component} from 'react'
// import Shipping from './Shipping'
import Billing from './Billing'
import ShoppingCartItem from './ShoppingCartItem'
// import Cart from './Cart'
import { queryCart, queryBrewery } from './Utils'
import { Button } from 'react-materialize'
import {Link} from 'react-router-dom'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cartItems: [],
      orderTotal: 0,
      orderNumber: uuid.v4(),
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg'
    }
  }

  // componentWillMount () {
  //   let incomingItems = getCart()
  //   this.setState = ({cartItems: incomingItems})
  //   console.log(incomingItems)
  // }

  calculateTotal () {
    // let newTotal = 0
    // this.state.cartItems.forEach((beer) => {
    //   newTotal += beer.bQt * beer.bPrice
    // //   console.log(newTotal)
    // })
    let newTotal = this.state.cartItems.reduce((sum, beer) => {
      return sum += beer.qnt * beer.price
    }, 0)
    this.setState(
      prevState => ({ orderTotal: newTotal }),
      () => console.log(this.state.orderTotal, newTotal)
    )
  }

  componentDidMount () {
    console.log(this.state.orderTotal)
    queryCart().then((res) => {
      this.setState({
        cartItems: res
      })
    })
    this.calculateTotal()
  }

  updateQuantity (e, currentIndex, newQt) {
    this.setState({
      cartItems: this.state.cartItems.map((item, idx) => {
        if (idx === currentIndex) item.qnt = newQt
        return item
      })
    }), () => console.log(this.state.orderTotal, currentIndex, newQt)
    this.calculateTotal()
  }

  //
  render () {
    console.log(this.state.cartItems)
    let beers = this.state.cartItems.map((beer, index) => {
      return (
        <ShoppingCartItem dummy={this.state.dummyPic} onUpdate={this.updateQuantity.bind(this)} beer={beer} key={index} index={index} />
      )
    })
    return (
      <div>
        <div>{beers}</div>
        <h1>Order Total: ${this.state.orderTotal}</h1>
        <div className='row'>
          <Link to='/success'><Button className='red hoverable col s12 m2 offset-m5' waves='light' style={{display: 'inline'}} >Submit Order</Button></Link>
          {/* <Shipping /> */}
        </div>
      </div>
    )
  }
}

export default ShoppingCart
