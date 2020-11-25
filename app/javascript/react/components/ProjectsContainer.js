import React from 'react'
import TopBar from './TopBar'
import gitcat from '../../../assets/images/gitcat.png'

const ProjectsContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundProjects'>
        <div className='row'>
          <div className='bgproj1 col-xs-12 col-lg-3'>
            <h4>Cambridge Eats</h4>
            <p>This project was built in two weeks. It was designed to give users a website to review restaurants in Cambridge, MA. Much like yelp you can sign in, write reviews of restaurants, as well as add new restaurants.</p>
            <a href="https://github.com/veeveeanne/restaurants_in_cambridge"><img className="gitcat" src={gitcat}/></a>
          </div>
          <div className='bgproj2 col-xs-12 col-lg-3'>
            <h4>Fantasy Portfolio</h4>
            <p>This Project had a two week timeline. It was designed to give users an experience like a fantasy football leauge, only exchanging football teams for stocks on the stock exchange.</p>
            <a href="https://github.com/MichaelHWatkins/fantasy_portfolio"><img className="gitcat" src={gitcat}/></a>
          </div>
          <div className='bgproj3 col-xs-12 col-lg-3'>
            <h4>My Resume Website</h4>
            <p>This is what you are currently viewing. It was designed to put together all my job related information as well as give a sample of what I am able to do. It is mainly created using a frontend skillset.</p>
            <a href="https://github.com/MichaelHWatkins/mhw-resume"><img className="gitcat" src={gitcat}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContainer
