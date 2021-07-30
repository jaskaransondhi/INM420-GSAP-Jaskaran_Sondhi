import React from "react";
import './../css/projects.css'
import project01 from './../images/graphic_design/gd01.jpg'
import project02 from './../images/graphic_design/gd02.jpg'
import project03 from './../images/graphic_design/gd03.jpg'
import project04 from './../images/graphic_design/gd04.jpg'
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";


export default function Projects() {
  return (
    <Router>
      <div className="App App-header projects">
        <ul className="portfolio-pages">
          <li>
            <img src={ project01 } className="project-cover" alt="first project"></img>
            <NavLink to="/projectone" activeClassName="selected" className="portfolio-link">Project One</NavLink>
          </li>
          <li>
            <img src={ project02 } className="project-cover" alt="second project"></img>
            <NavLink to="/projecttwo" activeClassName="selected" className="portfolio-link">Project Two</NavLink>
          </li>
          <li>
            <img src={ project03 } className="project-cover" alt="third project"></img>
            <NavLink to="/projectthree" activeClassName="selected" className="portfolio-link">Project Three</NavLink>
          </li>
          <li>
            <img src={ project04 } className="project-cover" alt="fourth project"></img>
            <NavLink to="/projectfour" activeClassName="selected" className="portfolio-link">Project Four</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/projectone"> <ProjectOne /> </Route>
          <Route exact path="/projecttwo"> <ProjectTwo /> </Route>
          <Route exact path="/projectthree"> <ProjectThree /> </Route>
          <Route exact path="/projectfour"> <ProjectFour /> </Route>
        </Switch>
      </div>
    </Router>
  );
}


// Function for Project One
function ProjectOne() {
  return (
    <div>
      <img src={ project01 } className="project-image"></img>
    </div>
  );
}

// Function for Project Two
function ProjectTwo() {
  return (
    <div>
      <img src={ project02 } className="project-image"></img>
    </div>
  );
}

// Function for Project Three
function ProjectThree() {
  return (
    <div>
      <img src={ project03 } className="project-image"></img>
    </div>
  );
}

// Function for Project Four
function ProjectFour() {
  return (
    <div>
      <img src={ project04 } className="project-image"></img>
    </div>
  );
}
