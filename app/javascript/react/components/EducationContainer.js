import React from 'react'
import TopBar from './TopBar'
import crest from '../../../assets/images/Crest.png'
import launch from '../../../assets/images/launch.png'
import crestNEU from '../../../assets/images/neu.png'
const EducationContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundEducation'>
        <div className='row'>
          <div className='col-3'>
            <img src={crest} alt="crest"/>
            <h4>University of St.Andrews, Scotland</h4>
            <h4>Years Attended</h4>
            <p>2010-2014</p>
            <h4>Major</h4>
            <p>International Relations</p>
            <h4>What I learned</h4>
            <p>A lot</p>
          </div>
          <div className='col-3'>
            <img src={crestNEU} alt="crest"/>
            <h4>Northeastern University, Boston</h4>
            <h4>Years Attended</h4>
            <p>2018-2019</p>
            <h4>Certificate</h4>
            <p>Computer Science</p>
            <h4>What I learned</h4>
            <p>A lot</p>
          </div>
          <div className='col-3'>
            <img src={launch} alt="launchcrest"/>
            <h4>Northeastern University, Boston</h4>
            <h4>Years Attended</h4>
            <p>2020</p>
            <h4>Certificate</h4>
            <p>Full Stack Development</p>
            <h4>What I learned</h4>
            <p>A lot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationContainer
