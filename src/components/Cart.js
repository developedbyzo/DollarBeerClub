import React, {Component} from 'react'

class Cart extends Component {
  render () {
    return (
      <div>
        <section><h3>Your Shopping Cart</h3></section>
        <section>{/* Picture of item to the left
                          Item Name
                          Price and quantity
                          Product Total
                          Subtotal */}</section>
        <button>Continue Browsing</button>
        <button>Checkout</button>
      </div>
    )
  }
}

export default Cart
