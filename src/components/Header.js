import React, {Component} from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import '../styles/Header.css'
import Landing from './Landing'
import Shop from './Shop'
import Register from './Register'
import Container from './Container'
import '../script.js'
import About from './About';
import Billing from './Billing';
import Login from './Login'
import ShoppingCart from './ShoppingCart'
import SignUp from './SignUp'
import SuccessPage from './SuccessPage'

// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  updateSearchTerm = (search) => {
    this.setState({search})
  }
  

  render () {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navbar className='page-header' id='sticky-nav' brand='Dollar Beer Club' right style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 'lighter'}}>
                {/* <Container /> */}
                <NavItem href='#'><div className=''><Link to='/logon'>Sign In</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/register'>Sign Up</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/about'>About</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/shop'>Crafted Beers</Link></div></NavItem>
                <NavItem href='#'><div className=''><Link to='/cart'><Icon right>shopping_cart</Icon></Link></div></NavItem>
              </Navbar>
            </div>

            <div>
              <Switch>
                <Route path='/shop' component={Shop} />
                <Route path='/logon' component={SignUp} />
                <Route path='/register' component={Register} />
                <Route path='/about' component={About} />
                <Route path='/cart' component={ShoppingCart} />
                <Route path='/success' coponent={SuccessPage} />
                <Route path='/' component={Landing} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Header
