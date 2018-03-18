import React, {Component} from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-materialize'
import '../styles/Landing.css'
import {Link} from 'react-router-dom'
import Container from './Container'

import Welcome from './Welcome'
import About from './About'

class Landing extends Component {
  render () {
    return (
      <div>
        {/* Using Parallax to add a seamless style */}
        <Parallax bgImage='https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d095f47eceee279bec773f9493f5ff4&auto=format&fit=crop&w=1050&q=80' style={{height: 700, strength: 800}} >
          <div>
            <div className=''>
              <div className='white-text text-shadow' style={{paddingLeft: 50, paddingRight: 50, paddingTop: 100, paddingBottom: 10, textAlign: 'center', fontFamily: 'Yanone Kaffeesatz', fontWeight: 'lighter'}}>
                <h1>YOUR #1 STOP FOR THE BEST IMPORTED/LOCAL LAGERS </h1>
              </div>
              <div className='white-text text-shadow' style={{paddingLeft: 400, paddingRight: 400, textAlign: 'justify', fontSize: 25, fontFamily: 'Yanone Kaffeesatz', fontWeight: 300}}>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <Button waves='light' className='centered-landing-btn gray' style={{fontFamily: 'Yanone Kaffeesatz', fontSize: 25}}><Link to='/shop'>Get A Pint Today!</Link></Button>
            </div>
          </div>
        </Parallax>

        {/* <div className='#bdbdbd grey lighten-1' style={{height: 80}} />

        {/* Current image is being used as a placeholder. A designed image will be needed for this section */}
        {/* <Parallax className='' bgImage='https://images.unsplash.com/photo-1505048492-d86bb810c2a4?ixlib=rb-0.3.5&s=9a0341413e88bf9246316904dfa4be16&auto=format&fit=crop&w=1500&q=80' style={{height: 500}}>
          <div>
            <div className='white-text' style={{paddingLeft: 50, paddingRight: 50, paddingTop: 120, paddingBottom: 10, textAlign: 'center'}}>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
            <div className='white-text' style={{paddingLeft: 400, paddingRight: 400, textAlign: 'justify', fontSize: 16}}>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </Parallax> */}

      </div>
    )
  }
}

export default Landing
