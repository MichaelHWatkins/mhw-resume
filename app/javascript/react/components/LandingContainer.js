import React from 'react'
import TopBar from './TopBar'
import me from '../../../assets/images/selfportrait.jpg'
import smartphone from '../../../assets/images/smartphoneicon.png'
import email from '../../../assets/images/email.png'
import github from '../../../assets/images/github.png'
import linkedin from '../../../assets/images/linkedin.png'
import launchlanding from '../../../assets/images/launchlanding.png'
import wordpress from '../../../assets/images/wordpress.png'

const LandingContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundLanding container'>
        <div className='row'>
          <div className='personalinfo col-xs-12 col-lg-3'>
            <h1 className='center'>Contact Information</h1>
            <img src={me} alt='me' />
            <div className="row">
              <div className="center col-6"><h4 className="bold">Role Desired</h4><p>Jr. Developer</p></div>
              <div className="center col-6"><h4 className="bold">Location</h4><p>Boston</p></div>
            </div>
            <div className="row">
              <div className='center col-12'>
                <img src={smartphone} alt='me' />
                <p>360-918-1271</p>
              </div>
              <div className='center col-12'>
                <img src={email} alt='me' />
                <p><a href="mailto:michaelhugheswatkins@gmail.com">michaelhugheswatkins@gmail.com</a></p>
              </div>
              <div className='row'>
              </div>
            </div>
          </div>
          <div className='aboutme col-xs-12 col-lg-7'>
            <h1 className="underline">About Me</h1>
            <p>Hello, and thank you for taking the time to view my website!</p>
            <p>My name is Michael Watkins, and I am currently pursuing an entry level position in the software engineering field. While I currently live in Boston, I am open to relocation as I have spent many years studying and working both domestically and internationally. During this time, I believe I have acquired the skillset to thrive in an unfamiliar environment and enjoy the opportunity to do so.</p>
            <p>My competencies include a working knowledge of Javascript, React.js, Bootstrap, Ruby, Ruby on Rails, and SQL via Activerecord in Rails. One of my primary objectives in my first professional position is to continue to expand these competencies, as well as add new methodologies to my arsenal to make myself as well rounded as possible for my employer.</p>
            <p className='underline'>I hold a Bachelor of Arts in International Relations from the well-regarded University of Saint Andrews, and a Certificate in Computer Science Theory from Northeastern University. Subsequently, I went on to expand my knowledge in Computer Science by spending five months at the intensive Launch Academy bootcamp. You can learn more about my background by following the Github, LinkedIn, and Launch Academy links below. My contact information is also included on this page. I am available for discussion at your convenience. I look forward to hearing from you.</p>
            <div className='row'>
              <div className="col-sm"><a href="https://github.com/MichaelHWatkins"><img className="gitlogo" src={github}/></a></div>
              <div className="col-sm"><a href="https://www.linkedin.com/in/michael-h-watkins/"><img className="linklogo" src={linkedin}/></a></div>
              <div className="col-sm"><a href="https://launchpass.launchacademy.com/users/MichaelWatkins2567/launcher_profile"><img className="launchlogo" src={launchlanding}/></a></div>
              <div className="col-sm"><a href="https://mikewantstocode.wordpress.com"><img className="wordpresslogo" src={wordpress}/></a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LandingContainer
