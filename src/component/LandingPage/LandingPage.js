import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-app  mx-auto">
        <div className="wrapper mx-auto">
          <div className="row mx-auto">
            {/* <div className="col-xl-3 col-sm-12 col-sidebar">
              <Sidebar />
            </div> */}
            {/* <div className="col-xl-9 col-sm-12 col-description"> */}
            <div className=" col-description">
              <section>
                <Header />
              </section>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
