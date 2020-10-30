import React from "react";
import "./Portfolio.css";
import project1 from '../../image/CreativeAgency.PNG';
import project2 from '../../image/Volunter.PNG';
import project3 from '../../image/travelGuru.PNG';
import project4 from '../../image/CreativeAgency.PNG';



const Portfolio = () => {
  const Projects = [
    {
      image: project1,
      title: "MERN Creative Agency",
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
        {Projects.map( project => 
        
        <div className="row mb-5">
                
        <div className="col-md-6">
            <div className="img">
                <img className="img-fluid" src= {project.image} alt="image1" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="description">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <div className="d-flex justify-content-around">
                    <a className="btn btn-primary" href={project.github}>Github</a>
                    <a className="btn btn-success" href={project.Live}>Live</a>
                </div>
            </div>
        </div>
    </div>
    
       
        )}
      </div>
    </div>
  );
};

export default Portfolio;
