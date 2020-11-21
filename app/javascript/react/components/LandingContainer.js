import React from 'react'
import TopBar from './TopBar'
import me from '../../../assets/images/selfportrait.jpg'
import smartphone from '../../../assets/images/smartphoneicon.png'
import email from '../../../assets/images/email.png'
import github from '../../../assets/images/github.png'
import linkedin from '../../../assets/images/linkedin.png'
import launch from '../../../assets/images/launch.png'

const LandingContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundLanding container'>
        <div className='row'>
          <div className='personalinfo col-4'>
            <h1 className='center'>Contact Information</h1>
            <img src={me} alt='me' />
            <div className="row">
              <div className="center col-6"><h4 className="bold">role desired</h4><p>Jr. Developer</p></div>
              <div className="center col-6"><h4 className="bold">location</h4><p>Boston</p></div>
            </div>
            <div className="row">
              <div className='center col-12'>
                <img src={smartphone} alt='me' />
                <p>360-918-1271</p>
              </div>
              <div className='center col-12'>
                <img src={email} alt='me' />
                <p>michaelhugheswatkins@gmail.com</p>
              </div>
              <div className='row'>
              </div>
            </div>
          </div>
          <div className='aboutme col-6'>
            <h1 className="underline">About Me</h1>
            <h4>Hi my name is Michael Watkins. I am looking for my first job in coding, and while I currently live in Boston, I am open to living anywhere in the world as I have spent many years overseas, as well as a lot of places within the States.</h4>
            <h4>I am familiar with React.js, Bootstrap, Ruby and Ruby on Rails, and SQL via activerecord in Rails. The key thing for me would be to enhance my knowledge of these technologies while at the same time growing my knowledge of other methodologies and languages.</h4>
            <h4 className='underline'>While I don’t have a formal degree in coding, I do have a love of learning starting in foreign policy and writing in Scotland, moving to computer science theory in Boston, and finally applying my learning ability to applicable skills within the industry at Launch Academy. You can learn more about me on my Launcher profile. Thank you for taking the time to view my website!</h4>
            <div className='row'>
              <div className="col-sm"><a href="https://github.com/MichaelHWatkins"><img className="gitlogo" src={github}/></a></div>
              <div className="col-sm"><a href="https://www.linkedin.com/in/michael-h-watkins/"><img className="linklogo" src={linkedin}/></a></div>
              <div className="col-sm"><a href="https://launchpass.launchacademy.com/users/MichaelWatkins2567/launcher_profile"><img className="launchlogo" src={launch}/></a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LandingContainer
