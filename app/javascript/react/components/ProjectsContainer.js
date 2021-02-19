import React from 'react'
import TopBar from './TopBar'
import ReactPlayer from 'react-player'
import gitcat from '../../../assets/images/gitcat.png'

const ProjectsContainer = (props) => {
  return(
    <div>
      <TopBar/>
      <div className='backgroundProjects'>
        <div className='row'>
          <div className='bgproj1 col-xs-12 col-lg-3'>
            <h4>Cambridge Eats</h4>
            <p>This project had a two week deadline. It was designed to give users a website to review restaurants in Cambridge, MA. Much like yelp you can sign in, write reviews of restaurants, as well as add new restaurants. This was built in conjunction with three other team members.</p>
            <p className="bordertop center">Technologies used:</p>
            <div className="row">
              <div className="col-6">
                <ul>Ruby on Rails</ul>
                <ul>Javascript</ul>
                <ul>React.js</ul>
                <ul>PostgreSQL</ul>
                <ul>HTML Forms</ul>
                <ul>Rspec</ul>
              </div>
              <div className="col-6">
                <ul>Devise</ul>
                <ul>User Authentication</ul>
                <ul>Ruby</ul>
                <ul>API Integration</ul>
                <ul>CSS</ul>
              </div>
            </div>
            <p><a href="https://github.com/veeveeanne/restaurants_in_cambridge"><img className="gitcat1" src={gitcat}/></a></p>
            <p className="center"><a href="http://cambridge-eats.herokuapp.com/">Cambridge Eats</a></p>
          </div>
          <div className='bgproj2 col-xs-12 col-lg-3'>
            <h4>Fantasy Portfolio</h4>
            <p>This Project was my first solo project and had a two week timeline. It was designed to give users an experience like a fantasy football league, only exchanging football teams for stocks on the stock exchange. Users can log in, make their own leauge and portfolio. Users can then add stocks to the portfolio, their score is calculated as: day that it is checked minus the day that it was created.</p>
            <p className="bordertop center">Technologies used:</p>
            <div className="row">
              <div className="col-6">
                <ul>Ruby on Rails</ul>
                <ul>Javascript</ul>
                <ul>React.js</ul>
                <ul>PostgreSQL</ul>
                <ul>HTML Forms</ul>
                <ul>Rspec</ul>
              </div>
              <div className="col-6">
                <ul>Devise</ul>
                <ul>User Authentication</ul>
                <ul>Alpha Vantage API</ul>
                <ul>API Integration</ul>
                <ul>CSS</ul>
              </div>
            </div>
            <a href="https://github.com/MichaelHWatkins/fantasy_portfolio"><img className="gitcat2" src={gitcat}/></a>
            <p className="center"><a href="http://fantasy-portfolio-league.herokuapp.com/">Fantasy Portfolio League</a></p>
          </div>
          <div className='bgproj3 col-xs-12 col-lg-3'>
            <h4>My Resume Website</h4>
            <p>This is what you are currently viewing. It was designed to put together all of my job related information, and to give a sample of what I am able to do. It is mainly created using http and css, with some React.js elements.</p>
            <p className="bordertop center">Technologies used:</p>
            <div className="row">
              <div className="center col-12">
                <ul>Ruby on Rails</ul>
                <ul>Javascript</ul>
                <ul>React.js</ul>
                <ul>PostgreSQL</ul>
              </div>
            </div>
            <a href="https://github.com/MichaelHWatkins/mhw-resume"><img className="gitcat3" src={gitcat}/></a>
          </div>
          <div className='bgproj4 col-xs-12 col-lg-3'>
            <h4>MikesPubQuiz</h4>
            <p>A simple pubquiz app that takes a json object and randomly chooses 10 out of 21 quations for you to play through.</p>
            <p className="bordertop center">Technologies used:</p>
            <div className="row">
              <div className="center col-12">
                <ul>Ruby on Rails</ul>
                <ul>Javascript</ul>
                <ul>React.js</ul>
                <ul>PostgreSQL</ul>
                <ul>Json</ul>
              </div>
            </div>
            <a href="https://github.com/MichaelHWatkins/trivia_game"><img className="gitcat3" src={gitcat}/></a>
            <p className="center"><a href="http://mikespubquiz.herokuapp.com/">Mike's Pub Quiz</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContainer
