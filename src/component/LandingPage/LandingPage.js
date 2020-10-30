import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="wrapper mx-auto">
        <div className="row mx-auto">
          <div className="col-3 col-sidebar">
            <Sidebar />
          </div>
          <div className="col-9 col-description">
            <section>
              <Header />
            </section>
          </div>
        </div>
      </div>
      <div className="row footer mx-auto border">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
