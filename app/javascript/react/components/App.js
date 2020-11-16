import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import WorkContainer from './WorkContainer'
import LandingContainer from './LandingContainer'
import ProjectsContainer from './ProjectsContainer'
import EducationContainer from './EducationContainer'


export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingContainer} />
          <Route exact path='/projects' component={ProjectsContainer} />
          <Route exact path='/education' component={EducationContainer} />
          <Route exact path='/work' component={WorkContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
