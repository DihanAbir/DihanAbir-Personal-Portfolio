import "./App.css";
import LandingPage from "./component/LandingPage/LandingPage";
import Resume from "./component/Resume/Resume";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Footer from "./component/Footer/Footer";
import Particles from 'react-particles-js';

import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className='main-section'>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route>
            <Footer/>
          </Route>
        </Switch>
      </Router>
      <ParticlesBg style={{ position: "absolute" }}  type="random" bg={true} />
    </div>
  );
}

export default App;
