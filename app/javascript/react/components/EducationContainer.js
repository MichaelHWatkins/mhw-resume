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
          <div className='bgedu1 col-xs-12 col-lg-3'>
            <img className="borderbottom" src={crest} alt="crest"/>
            <h4>University of St.Andrews, Scotland</h4>
            <h4>Years Attended</h4>
            <p>2010-2014</p>
            <h4>Major</h4>
            <p>International Relations</p>
            <h4>What I learned</h4>
            <p>Learned basic research skills, as well as basic foreign policy.</p>
          </div>
          <div className='bgedu2 col-xs-12 col-lg-3'>
            <img className="borderbottom" src={crestNEU} alt="crest"/>
            <h4>Northeastern University, Boston</h4>
            <h4>Years Attended</h4>
            <p>2018-2019</p>
            <h4>Certificate</h4>
            <p>Computer Science</p>
            <h4>What I learned</h4>
            <p>Learned basic computer science fundamentals, as well as discrete math.</p>
          </div>
          <div className='bgedu3 col-xs-12 col-lg-3'>
            <img className="borderbottom" src={launch} alt="launchcrest"/>
            <h4>Launch Academy, Boston</h4>
            <h4>Years Attended</h4>
            <p>2020</p>
            <h4>Certificate</h4>
            <p>Full Stack Development</p>
            <h4>What I learned</h4>
            <p>Learned basic industry applicable coding skills, as well as git and terminal commands.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationContainer
