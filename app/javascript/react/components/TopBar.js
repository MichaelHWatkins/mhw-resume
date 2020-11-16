import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
const TopBar = (props) => {
  return (
    <Navbar>
      <h1>Michael Watkins</h1>
      <Nav className="ml-auto">
        <div className='landinglink'>
          <Link to={`/`}>Resume</Link>
        </div>
        <div className='worklink'>
          <Link to={`/work`}>Work</Link>
        </div>
        <div className='projlink'>
          <Link to={`/projects`}>Projects</Link>
        </div>
        <div className='edulink'>
          <Link to={`/education`}>Education</Link>
        </div>
      </Nav>
    </Navbar>
  )

}

export default TopBar
