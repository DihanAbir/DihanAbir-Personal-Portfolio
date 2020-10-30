import React from "react";
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import AllPortfolio from "../AllPortfolio/AllPortfolio";
import About from "../About/About";
import Blog from "../Blog/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const Header = () => {
  return (
    <div>
      <Router>
        <header className="d-flex">

          {/* header right section   */}
          <div>
            <ul className='nav-ul'>
              <li>
                <Link to="/">Home</Link>
              </li>
              
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </div>

          {/* header left section  */}
          <div className="ml-auto">
            <ul className='social-ul'>
              <li>
                <Link to="/https://www.facebook.com/DihanAbir0"><FontAwesomeIcon icon={faFacebookF} /></Link>
              </li>
              <li>
                <Link to="/https://www.linkedin.com/in/dihanabir/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
              </li>
              <li>
                <Link to="/https://github.com/DihanAbir"><FontAwesomeIcon icon={faGithub} /></Link>
              </li>
              <li>
              <Link to="/https://twitter.com/DihanAbir0"><FontAwesomeIcon icon={faTwitter} /></Link>
              </li>
              <li >
                <a className="hire-me" href="mailto:nahid.muradabir@gmail.com">Hire Me</a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Switch>
            
            <Route exact path="/blog">
              <Blog/>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <About/>
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Header;
