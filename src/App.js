import "./App.css";
import LandingPage from "./component/LandingPage/LandingPage";
import Resume from "./component/Resume/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Footer from "./component/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [dark, setDark] = useState(true);
  const onscroll = () => {
    const WinScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (WinScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div className="main-section">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage dark={dark} />
          </Route>
          <Route exact path="/about">
            <About dark={dark} />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio dark={dark} />
          </Route>
          <Route path="/resume">
            <Resume dark={dark} />
          </Route>

          {/* <Route path="/resume">
            </>
          </Route> */}
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
