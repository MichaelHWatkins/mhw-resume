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
            <h4>University of St.Andrews, UK</h4>
            <h4>Years Attended</h4>
            <p>2010-2014</p>
            <h4>Degree Earned</h4>
            <p>BA, International Relations</p>
            <h4>Skills Earned:</h4>
            <div className="row">
              <div className="col-12">
                <li>Qualitative Research</li>
                <li>Quantitative Research</li>
                <li>Word Processing</li>
                <li>Thesis and position paper writing</li>
                <li>Critical Document Analysis</li>
              </div>
            </div>
          </div>
          <div className='bgedu2 col-xs-12 col-lg-3'>
            <img className="borderbottom" src={crestNEU} alt="crest"/>
            <h4>Northeastern University, Boston</h4>
            <h4>Years Attended</h4>
            <p>2018-2019</p>
            <h4>Degree Earned</h4>
            <p>Cert. Computer Science</p>
            <h4>Skills Earned:</h4>
            <div className="row">
              <div className="col-12">
                <li>Discrete Math</li>
                <li>Computer Systems</li>
                <li>Java</li>
                <li>Basic programming fundamentals with Python</li>
              </div>
            </div>
          </div>
          <div className='bgedu3 col-xs-12 col-lg-3'>
            <img className="borderbottom" src={launch} alt="launchcrest"/>
            <h4>Launch Academy, Boston</h4>
            <h4>Years Attended</h4>
            <p>2020</p>
            <h4>Degree Earned</h4>
            <p>Cert. Full Stack Development</p>
            <h4>Skills Earned:</h4>
            <div className="row">
              <div className="col-12">
                <li>Javascript</li>
                <li>Ruby</li>
                <li>React.js</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Github</li>
                <li>Pair Programming</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationContainer
