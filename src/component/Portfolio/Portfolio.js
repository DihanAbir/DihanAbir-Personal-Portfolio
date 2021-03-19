import React, { useEffect } from "react";
import "./Portfolio.css";
import project1 from "../../image/CreativeAgency.PNG";
import project2 from "../../image/Volunter.PNG";
import project3 from "../../image/travelGuru.PNG";
import project4 from "../../image/CreativeAgency.PNG";
import projectR from "../../image/HappyResturant.png";
import projectC from "../../image/consult.png";
import projectAir from "../../image/aircnc.png";
import projectAthena from "../../image/AruoService.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const Projects = [
    {
      image: projectC,
      title: "Super Consultor",
      description:
        "Users can choose food by filtering  ,Admins can see volunteers task, Admin can add new services,	Add to cart ",
      github: "https://github.com/DihanAbir/Consulting",
      Live: "https://pensive-varahamihira-61d0eb.netlify.app/",
    },
    {
      image: projectR,
      title: "MERN Happy Resturant",
      description:
        "Users can choose food by filtering  ,Admins can see volunteers task, Admin can add new services,	Add to cart ",
      github: "https://github.com/DihanAbir/Resturant_Management_MERN",
      Live: "https://heuristic-northcutt-cc3ef6.netlify.app/",
    },
    {
      image: projectAir,
      title: "Hotel's plan",
      description:
        "Users can choose food by filtering  ,Admins can see volunteers task, Admin can add new services,	Add to cart ",
      github: "https://github.com/DihanAbir/AirCnC",
      Live: "https://cranky-franklin-1ad280.netlify.app/",
    },
    {
      image: project1,
      title: "AruoService Provider",
      description:
        "Creative Agency providing services , Customer can place Order a service. Admin can add new services. User Role Management system (Admin and User)",
      github: "https://github.com/DihanAbir/Athena-design",
      Live: "https://peaceful-sammet-9b11a4.netlify.app/",
    },
    {
      image: projectAthena,
      title: " MERN Creative Agency",
      description:
        "Creative Agency providing services , Customer can place Order a service. Admin can add new services. User Role Management system (Admin and User)",
      github: "https://github.com/DihanAbir/react-agency-clienside",
      Live: "https://creative-agency-ddaf1.web.app/",
    },
    {
      image: project2,
      title: "MERN Volunter",
      description:
        "It’s a full-stack responsive web application,People can select and register volunteer task",
      github: "https://github.com/DihanAbir/react-volunter-server",
      Live: "https://volunter3.web.app/",
    },
    {
      image: project3,
      title: "Travel Guru:",
      description:
        "It’s a hotel booking web application, user friendly. People can book his/her favorite places.",
      github: "https://github.com/DihanAbir/Travel-Guru",
      Live: "https://travel-guru-1070d.web.app/",
    },
    {
      image: project4,
      title: "MERN Creative Agency",
      description:
        "Creative Agency providing services , Customer can place Order a service. Admin can add new services. User Role Management system (Admin and User)",
      github: "https://github.com/DihanAbir/react-agency-clienside",
      Live: "https://creative-agency-ddaf1.web.app/",
    },
  ];

  return (
    <div>
      <div className="container">
        {Projects.map((project) => (
          <div className="row mb-5 container">
            <div className="col-6" data-aos="fade-up">
              <div
                className="img"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            </div>
            {/* description section  */}
            <div className="col-6 project-description" data-aos="fade-left">
              <div className="description-div  p-4">
                <h5>
                  {" "}
                  <b>{project.title}</b>{" "}
                </h5>
                <p>{project.description}</p>

                <div className="d-flex justify-content-between">
                  <a className="btn-github" href={project.github}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a className="btn-Live" target="_blank" href={project.Live}>
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
