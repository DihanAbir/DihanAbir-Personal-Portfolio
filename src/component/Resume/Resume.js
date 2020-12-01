import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  return (
    <div classNameName="mx-auto ">
      <div>
        <div className="resume">
          <div className="resume_right">
            <div className="resume_item resume_about">
              <div className="title">
                <h4 className="bold">Who Am I?</h4>
              </div>
              <p className="about-me">
                A junior web developer who enthusiast the development of a
                website. I have a 1-year working experience and I have completed
                several web project. I always tried to find real-life problems
                and try to find an efficient solution using my critical thinking
                ability. Always I looking for a friendly environment where I can
                learn so many things and also try to teach other people that
                thing as well.
              </p>
            </div>
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Work Experience</p>
              </div>
              <ul>
                <li>
                  <div className="date">2016 - 2021</div>
                  <div className="info">
                    <p className="semi-bold">Student</p>
                    <p>
                      B.Sc in Computer Science and Technology
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2019-2020</div>
                  <div className="info">
                    <p className="semi-bold">Shikhbe Shobai</p>
                    <p>Web design and Wordpress Development <span>Wordpress Development Wordpress Development</span></p>
                  </div>
                </li>
                {/* <li>
                  <div className="date">2017 - Present</div>
                  <div className="info">
                    <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, voluptatibus!
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div className="date">2010 - 2016</div>
                  <div className="info">
                    <p className="semi-bold">
                      SSC & HSC 
                    </p>
                    <p>
                      My Academic School (2014) and College (2016) studies was completed from Dhaka Bangladesh!
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2016 - present</div>
                  <div className="info">
                    <p className="semi-bold"> <b>Bangladesh University of Business & Technology</b> </p>
                    <p>
                      At Present, I am studing in Bangladesh University of Business & Technology, department of Computer Science and Technology.(Final semester)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_hobby">
              {/* <div className="title">
                <p className="bold">Hobby</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
