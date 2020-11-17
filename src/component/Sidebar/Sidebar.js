import React from "react";
import { Link } from "react-router-dom";
// import profile from "../../image/profile.jpeg";
import { useSpring, animated } from "react-spring";
import "./Sidebar.css";
import mypdf from "../../MD Nahid Murad Abir cv.pdf";
import ReactTypingEffect from "react-typing-effect";



const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Sidebar = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div className="sidebar-maindiv">
      <hr />
      <div className="img">
        {/* <img
          className="img-fluid profile-picture"
          src={profile}
          alt="profile picture"
        /> */}
        <animated.div
          class="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
      </div>

      <div className="personal-information">
        <p>
          <ReactTypingEffect
            text={[
              "Hello From Abir!",
              "A Enthusiast Developer",
              "A Front-end Developer",
              "React lover",
              "Technology philander",
            ]}
            cursorRenderer={(cursor) => (
              <h1 style={{ color: "salmon" }}>{cursor}</h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h4>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={{ color: "salmon" }}>
                        {char}
                      </span>
                    );
                  })}
                </h4>
              );
            }}
          />
        </p>
        <p>
          {" "}
          <span className="dot">o</span> <b>Birthday</b> : 02 Februar 1998
        </p>
        <p>
          {" "}
          <span className="dot">o</span> <b>Job</b> : Freelancer
        </p>
        <p>
          {" "}
          <span className="dot">o</span> <b>Email</b> :
          nahid.muradabir@gmail.com
        </p>
        <p>
          {" "}
          <span className="dot">o</span> <b>LinkedIn</b> : dihanabir
        </p>
      </div>
      <button className="btn cv">
        <a href={mypdf} download="MD Nahid Murad Abir cv.pdf">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default Sidebar;
