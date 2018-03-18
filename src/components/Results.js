import React, {Component} from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import {buyBeer} from './Utils'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyPic: 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg',
      isButtonDisabled: false
    }
    //this.onSearchAgain = this.onSearchAgain.bind(this)
  }

  onSearchAgain = () => {
    this.props.onSearchAgain()
  }
  reloadApp(e) {
    window.location.reload(true);
    e.preventDefault();
  }
  addToCart = (e, id) => {
    e.preventDefault()
    buyBeer(id)
    console.log(id)
    this.setState({
      isButtonDisabled: false
    })
  }
  
  // componentDidMount = () => {
  // axios
  //     .get()
  //     .then(() => {

  //     })
  // }
  
  render () {
    let {searchResults} = this.props
    let beerKeg = searchResults.map((beer, index) => {
      
      return (
      <Card key={beer.id} className='card hoverable col s12 m3' header={<CardTitle reveal image={beer.labels ? beer.labels.medium : this.state.dummyPic} waves='light' />} title={<h6 className='' style={{fontSize: 15}}> {beer.name}</h6>}
        reveal={[
          <div>
            <p>$7</p>
            <p>Description: {beer.description}</p>
            <p>Brew Style: {beer.style.name}</p>
            <p>ABV: {beer.abv}</p>
          </div>
        ]}>
        <Button id={'beer_' + beer._id} floating onClick={e =>this.addToCart(e, beer.id)} 
        disabled={this.state.isButtonDisabled} 
        className='red hoverable halfway-fab' waves='light' icon='add' 
        style={{position: 'absolute', bottom: 90, right: 8}} />
      </Card>
    )
    })
    return (
      <div>
        
        {/* <Button waves='light' className='centered-landing-btn white'onClick={this.onSearchAgain}>Search For Another</Button> */}
      <div className='row'>
      <div className='center-align'>
      <Button type='button' onClick={this.reloadApp}>Search For Another</Button>
      </div>
        {beerKeg}
      </div>
      </div>
    )
  }
}

export default Results
