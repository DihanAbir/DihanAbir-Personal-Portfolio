import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

const Maindiv = () => {
  return (
    <div>
      <h2>main div</h2>
      <Router>
        <Switch>
          <Route path="/about">
            <Header />
          </Route>
          <Route  path="/topics">
            <Header />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route  path="/resume">
            <Resume />
          </Route>
          <Route  path="*">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Maindiv;
