import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import axios from 'axios'
import { Parallax } from 'react-parallax'
import requestDBC from '../../src/request'
import { queryBrewery } from './Utils'
import Results from './Results';
import Search from './Search';
import Container from './Container'

class Shop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg',
      query: '',
      hasSearched: false,
      searchResults: [],
    }
  }

  handleSearchInput = (searchText) => {
    console.log(searchText)
    this.setState({query: searchText})
  }

  onSubmitQuery = (searchText) => {
    queryBrewery(searchText).then(beers => {
      this.setState(prevState => ({
        searchResults: beers,
        hasSearched: true
      }))
    })
  }

  onSearchAgain = () => {
    this.setState({
      hasSearched: false,
      query: ''
    })
  }
  render () {
    return (
      <div>
        <div>
          <Container />
          <div>
            <div style={{backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '40vh'}}>

            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
export default Shop
