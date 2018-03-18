import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import Header from './Header'

class Search extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     search: '',
  //     searchedResults: {}
  //   }
  // }

  // handleSearchInput (e) {
  //   this.setState({
  //     search: e.target.value
  //   })
  // }

  constructor (props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
  }

  handleSearchInput (e) {
    console.log(e)
    this.props.handleSearchInput(e.target.value)
  }

  onSubmitQuery (e) {
    e.preventDefault()
    this.props.onSubmitQuery(this.props.query)
  }

  render () {
    return (
      <div>
        <div className='nav-wrapper '>
          <form style={{height: 50}} className='' onSubmit={this.onSubmitQuery}>
            <div className='input-field'>
              <input id='search' type='search' placeholder="HOW 'BOUT A BEER?" value={this.props.query} onChange={this.handleSearchInput} name='beerName' />
              <label className='label-icon' for='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search
