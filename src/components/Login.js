import React, {Component} from 'react'
import { Card, Button, Row, Input } from 'react-materialize'
import '../styles/Login.css'
import Billing from './Billing'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
            <div className='bgImg'>
                <div className='container'>
                    <div className='border' style={{padding: 10}}>
                        <div className='container' style={{width: 450, height: 500}}>
                            <Row className='#f5f5f5 grey lighten-4' style={{padding: 30}}>
                                <Input onChange = {this.handleChange} className='#ffca28' type="text" name="email" placeholder="Email" s={12} />
                                <Input onChange = {this.handleChange} type="password" name="password" placeholder="Password" s={12} />
                                <Button waves='light' className='login-button right' type="submit">Login</Button>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
