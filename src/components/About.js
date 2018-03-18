import React, {Component} from 'react'
import {Carousel} from 'react-materialize'
import '../styles/About.css'

class About extends Component {
  render () {
    return (
      <div className='bgImg_about'>

        <div className='container'>
          <h1 className='white-text center' style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 'lighter', marginBottom: -80}} >MEET THE FOUNDERS</h1>
          <Carousel images={[
            'https://git.generalassemb.ly/avatars/u/8736?s=400',
            'https://avatars3.githubusercontent.com/u/33813562?v=4',
            'https://avatars3.githubusercontent.com/u/20568762?v=4',
            'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAz9AAAAJDc3MWZlNzY3LWM2OTgtNGQ0ZC04MDQxLWZkNGMzMzNhMzFjMw.jpg'
          ]} />
          <p className='white-text center' style={{fontFamily: 'Yanone Kaffeesatz', fontWeight: 'lighter', fontSize: 40, marginTop: -60}}>Sandro Guraspasvili - Julian Addison - Marquet Reid - Alonzo Moses</p>
        </div>
      </div>
    )
  }
}

export default About
