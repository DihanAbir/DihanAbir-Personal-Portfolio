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

import { Nav } from "react-bootstrap";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import AllPortfolio from "../AllPortfolio/AllPortfolio";
import About from "../About/About";
import Blog from "../Blog/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Navbars from "react-bootstrap/Navbar";
import Contact from "../Contact/Contact";

const Header = () => {
  return (
    <div className="header-maindiv">
      <Router>
        <header className="d-flex">
          {/* header right section   */}

          <Navbars expand="lg">
            <Navbars.Toggle aria-controls="basic-navbar-nav" />
            <Navbars.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nev-item home mx-2">
                  <Link className="nav-link nav-link-home" to="/">
                    <FontAwesomeIcon
                      style={{ color: "white", backgroundColor: "transparent" }}
                      icon={faHome}
                    />
                  </Link>
                </Nav.Link>
                <Nav.Link className="nev-item mx-2">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </Nav.Link>
                <Nav.Link className="nev-item mx-2">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link className="nev-item mx-2">
                  <Link className="nav-link" to="/contact-me">
                    Chat with me?
                  </Link>
                </Nav.Link>
                <Nav.Link className="nev-item mx-2">
                  <Link className="nav-link" to="/resume">
                    Who Am I
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbars.Collapse>
          </Navbars>

          {/* header left section  */}
          <div className="ml-auto">
            <ul className="social-ul">
              <li>
                <a target="_blank" href="https://www.facebook.com/DihanAbir0">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dihanabir/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/DihanAbir">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/DihanAbir0">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className="hire-me" href="mailto:nahid.muradabir@gmail.com">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Switch>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route path="/contact-me">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Header;
