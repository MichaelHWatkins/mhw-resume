import React from 'react'
import TopBar from './TopBar'
import me from '../../../assets/images/selfportrait.jpg'
import smartphone from '../../../assets/images/smartphoneicon.png'
import email from '../../../assets/images/email.png'


const LandingContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundLanding container'>
        <div className='row'>
          <div className='personalinfo col-4'>
            <h1>Contact Information</h1>
            <img src={me} alt='me' />
            <div className="row">
              <div className="col-6 center"><h4 className="bold">role desired</h4><p>Jr. Developer</p></div>
              <div className="col-6 center"><h4 className="bold">location</h4><p>Anywhere</p></div>
              <div className="col-12"><h4 className="bold">learning institution</h4></div>
              <div className="col-12"><p>Launch Academy, Boston</p></div><hr/>
            </div>
            <div className="row">
              <div className='col-12'>
                <img src={smartphone} alt='me' />
                <p>360-918-1271</p>
              </div>
              <div className='col-12'>
                <img src={email} alt='me' />
                <p>michaelhugheswatkins@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='aboutme col-6'>
            <h1>About Me</h1>
            <h4>Hi my name is Michael Watkins. While I live in Boston I am currently </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer
