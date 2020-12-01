import React from "react";
import "./About.css";
import project1 from "../../image/wev devolpment.PNG";
import project2 from "../../image/branding.PNG";
import project3 from "../../image/illustration.PNG";
import project4 from "../../image/fast-delivary.PNG";
import Typical from 'react-typical';

import { useSpring, animated } from "react-spring";



const About = () => {
  const Projects = [
    {
      image: project1,
      title: "Web Development",
      description:
        "I have been working on web design for 1 years.",
    },
    {
      image: project2,
      title: "Bradning Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
    },
    {
      image: project3,
      title: "Web Designing",
      description:
        "I have been working on illustration design for 6 years.",
    },
    {
      image: project4,
      title: "Fast Delivary",
      description:
        "I deliver your business as fast as possible.",
    },
  ];

  return (
    <div className='container mx-auto'>
      <h4 className="border-custome">About Me</h4>
     <h3 className="gray">Hello! This is Md Nahid Murad Abir.</h3><br/>


    <p className="about-me">
    I am currently working with Full-stack web applications. I enjoy developing complex Web applications using modern tools and technologies including <b>JavaScript</b> , <b>React</b>, <b>Node.js</b>, <b>Express.js</b>, <b>WordPress</b> and writing complex Database structure using <b>MongoDB</b> to represent various ways to solve business problems.<br/>
    My goal is to build pixel-perfect, components based and practical projects which provide a rich user experience with real world application.<br/>
    When not in front of a computer, you will probably find me reading 📚, hangout with 👨‍👩‍👦‍👦 and try to blogging 👨‍💻.
    </p>



      <h4 className="border-custome">My Services</h4>
      <div className="row container ">
        {Projects.map((project) => (
          <div className="col-xl-3 col-sm-6  mx-auto my-5">
            <div className=" service-div p-4">
              <div>
                <div className="img">
                  <img
                    className="service-image img-fluid"
                    src={project.image}
                    alt="image1"
                  />
                </div>
              </div>
              <div className='service'>
                <div className="description mt-4">
                  <h6>{project.title}</h6>
                  <p className="service-description">{project.description}</p>
                  {/* <div className="d-flex justify-content-around"></div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
