import React from "react";
import "./About.css";
import project1 from "../../image/wev devolpment.PNG";
import project2 from "../../image/branding.PNG";
import project3 from "../../image/illustration.PNG";
import project4 from "../../image/fast-delivary.PNG";

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
    <div>
      <h4>About Me</h4>
      <p className="m-5">
        Started earnest brother believe an exposed so. Me he believing daughters
        if forfeited at furniture. Age again and stuff downs spoke. Late hour
        new nay able fat each sell. Nor themselves age introduced frequently use
        unsatiable devonshire get. They why quit gay cold rose deal park. One
        same they four did ask busy. Reserved opinions fat him nay position.
        Breakfast as zealously incommode do agreeable furniture. One too nay led
        fanny allow plate.<br></br>
        <br></br>
        Quick six blind smart out burst. Perfectly on furniture dejection
        determine my depending an to. Add short water court fat. Her bachelor
        honoured perceive securing but desirous ham required. Questions
        deficient acuteness to engrossed as. Entirely led ten humoured greatest
        and yourself. Besides ye country on observe. She continue appetite
        endeavor she judgment interest the met. For she surrounded motionless
        fat resolution may.
      </p>
      <h4>My Services</h4>
      <div className="row container ">
        {Projects.map((project) => (
          <div className="col-3  mx-auto my-5">
            <div className="border p-4">
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
                  <div className="d-flex justify-content-around"></div>
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
