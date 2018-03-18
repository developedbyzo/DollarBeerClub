import React, { Component } from 'react'
import { Card, Button, Row, Input } from 'react-materialize'
import '../styles/Billing.css'
// probably need Router to switch to next page in process

class Billing extends Component {
  constructor (props) {
    super(props)
    this.state = {
         // make sure these match mongoose schema & form name attrs
      creditCard: '',
      expiration: '',
      cvc: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  // will need a handleSubmit functino bound to the state and passed to button
  // as onSubmit

  render () {
    return (
      <div className='bgImg'>
        <div className='billing-container' style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 300, fontSize: 20}}>
          <Card className='bg_color' actions={[<a style={{color: 'black'}} href='#'>Go Back</a>]}>
            <h3 className='black-text'>Billing Info</h3>
            <Row>
              <Input onChange={this.handleChange} type='text' name='creditCard' placeholder='Credit Card Number' />
              <Input onChange={this.handleChange} type='text' name='expiration' placeholder='Expiration Date MM/YY' />
              <Input onChange={this.handleChange} type='text' name='cvc' placeholder='CVC' />
              <Button className='#00695c teal darken-3' style={{marginTop: 30}}type='submit'>Submit Payment</Button>
            </Row>
          </Card>
        </div>
      </div>
    )
  }
}

export default Billing
