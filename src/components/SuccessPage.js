import React, {Component} from 'react'
import { Card, Col } from 'react-materialize'
import '../styles/SuccessPage.css'

class SuccessPage extends Component {
  render () {
    return (
      <div className='bgImg'>
        <div className='receipt-container' style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 300, fontSize: 40}}>
          <Card className='bg_color' actions={[<a href='/'>Back to Shopping</a>]}>
            <h3>Order Summary</h3>
            <div className='individual-item'>
              <p>Order Number: #90000383838</p>
              <p>Item: Almanac Golden Gates Gose</p>
              <p>Quantity: 5</p>
              <p>Shipping Method: UPS Ground</p>
              <p>Shipping cost: $7.99</p>
              <p>Total: $45.14</p>
            </div>
            <div className='total-order'>
              <p>Order Total: $45.14</p>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default SuccessPage
