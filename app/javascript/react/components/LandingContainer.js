import React from 'react'
import TopBar from './TopBar'
import '../../../assets/stylesheets/main.scss';
const LandingContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundLanding '>
        <div className='container-fluid'>
          <div className='row'>
            <div className='personalinfobox col-sm'>
              <div className='titlebar'>
                <h1>Contact Information</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer
