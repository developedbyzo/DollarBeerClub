import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-materialize'
import '../styles/Landing.css'
import {Link} from 'react-router-dom'

class Welcome extends Component {
    render () {
        return(
            <div>
                {/* Using Parallax to add a seamless style */}
                <Parallax bgImage='https://images.unsplash.com/photo-1509762372-36de55acf406?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfaa0c61287ee72e79e586823274c48d&auto=format&fit=crop&w=1500&q=80' style={{height: 500}}>
                    <div>
                        <div className='white-text' style={{paddingLeft: 50, paddingRight: 50, paddingTop: 120, paddingBottom: 10, textAlign: 'center'}}>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        </div>
                        <div className='white-text' style={{paddingLeft: 400, paddingRight: 400, textAlign: 'justify', fontSize: 16}}>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <Button waves='light' className='centered-landing-btn white'><Link to='/shop'>Get A Pint Today!</Link></Button>
                    </div>
                </Parallax>

                <div className='#bdbdbd grey lighten-1' style={{height: 80}} />
            </div>
        )
    }
}

export default Welcome
