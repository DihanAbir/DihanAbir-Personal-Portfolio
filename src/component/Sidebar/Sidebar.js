import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../image/profile.jpeg';
import './Sidebar.css';
import mypdf from '../../MD Nahid Murad Abir cv.pdf';
import ReactTypingEffect from 'react-typing-effect';


const Sidebar = () => {
    return (
        <div className= 'sidebar-maindiv'>
           
            <hr/>
            <div className="img">
                <img className='img-fluid profile-picture' src={profile} alt="profile picture"/>
            </div>
            
            <div className='personal-information'>
                <p> 
                <ReactTypingEffect
        text={["Hello From Abir!", "A Enthusiast Developer", 'A Front-end Developer', 'React lover', 'Technology philander']}
        cursorRenderer={cursor => <h1 style={ { color: 'salmon'}}>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h4>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={ { color: 'salmon'}}
                  >{char}</span>
                );
              })}
            </h4>
          );
        }}        
      />
                </p>
                <p> <span className="dot">o</span> <b>Birthday</b> : 02 Februar 1998</p>
                <p> <span className="dot">o</span> <b>Job</b> : Freelancer</p>
                <p> <span className="dot">o</span> <b>Email</b> : nahid.muradabir@gmail.com</p>
                <p> <span className="dot">o</span> <b>LinkedIn</b> : dihanabir</p>
            </div>
                <button className='btn cv'><a href={mypdf} download="MD Nahid Murad Abir cv.pdf">Download CV</a></button>
        </div>
    );
};

export default Sidebar;