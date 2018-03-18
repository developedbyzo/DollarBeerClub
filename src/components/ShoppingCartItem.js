import React, { Component } from 'react'
import { CardTitle, Card, Button, Input } from 'react-materialize'
import '../styles/ShoppingCartItem.css'
import ToggleDisplay from 'react-toggle-display'
import { deleteItemFromCart, updateCartItemQuantity } from './Utils'

class ShoppingCartItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false,
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  clearText = () => {
    this.state.inputValue.setNativeProps({inputValue: ''});
  }

// set value of input to this.state.inputValue
// make function to handle change of state of the inputValue
// create function in ShoppingCart to update item quantity
// pass down function from shopping cart
// call function in handleUpdateClick
// call axios request to modify DB

  handleClick () {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleRemoveFromCart = (e, id) => {
    // e.preventDefault()
    deleteItemFromCart(id)
    // this.setState({isRemoved: true})
    this.setState(this.state)
  }

  handleUpdateClick (e, id) {
    this.setState({
      show: !this.state.show
    })
    this.props.onUpdate(e, this.props.index, this.state.inputValue)
    updateCartItemQuantity(this.state.inputValue, id)
  }

  render () {
    let itemName = this.props.beer.name
    let itemImg = this.props.beer
    let itemPrice = this.props.beer.price
    let itemQuantity = this.props.beer.qnt
    let itemId = this.props.beer.id

    return (
      <div className='item-container'>
        {/* <div className='row'>  */}
          <Card
            className='card hoverable col s12 m4'
            header={<CardTitle reveal image={itemImg.labels ? itemImg.labels.medium : this.props.dummy}
              waves='light' />}
            title={<h5
              className=''
              style={{fontSize: 20}}> {itemName}   |   Quantity: {itemQuantity}   |   Subtotal: ${itemPrice * itemQuantity}</h5>}>
            <ToggleDisplay show={this.state.show}>
              <Input type='number' onChange={this.handleChange} />
              <Button onClick={e => this.handleUpdateClick(e, itemId)} type='submit' >Change Quantity</Button>
            </ToggleDisplay>
            <Button onClick={() => this.handleClick()} floating className='red hoverable halfway-fab' waves='light' value='update order' style={{position: 'absolute', bottom: 90, right: 8}} >Update Order</Button>
            <Button onPress={this.clearText} onClick={(e) => this.handleRemoveFromCart(e, itemId)} className='red hoverable' waves='light' style={{position: 'absolute', top: 50, left: 8}} >Remove from Cart</Button>
          </Card>
        </div>

      // </div>
    )
  }
}

export default ShoppingCartItem
