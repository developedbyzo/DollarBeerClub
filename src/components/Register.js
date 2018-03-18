import React, {Component} from 'react'
import {Row, Input, Button, Icon} from 'react-materialize'
import '../styles/Register.css'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      valid: true
    }
  }

  onSubmit (e) {
    e.preventDefault()
    this.passwordValidate()
  }

  fName = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }

  lName = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  eMail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  userName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  passWord = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  confirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  passwordValidate (e) {
    this.state.password === this.state.confirmPassword ? this.setState({valid: true}) : this.setState({valid: false})
  }

  render () {
    return (
      <div className='bgImg'>
        <div className='container'>
          <div className='border' style={{padding: 10}}>
            <div className='container' style={{width: 450, height: 500}}>
              <Row className='#f5f5f5 grey lighten-4' style={{padding: 30}}>
                <Input type='text' name='firstname' placeholder='First' s={6} label='First Name' required />
                <Input type='text' name='lastname' placeholder='Last' s={6} label='Last Name' required />
                <Input type='email' name='email' label='Email' s={12} required />
                <Input type='text' name='username' placeholder='Username' s={12} label='User Name' required />
                <Input type='password' name='password' value={this.state.password} onChange={(e) => { this.passWord(e) }} label='Password' s={12} required />
                <Input type='password' name='password' value={this.state.confirmPassword} onChange={(e) => { this.confirmPassword(e) }} label='Confirm Password' s={12} required />
                <Button waves='light' className='reg-button right' onClick={(e) => { this.onSubmit(e) }} type='submit'>Register<Icon right>check</Icon></Button>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
