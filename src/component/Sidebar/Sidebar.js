import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../image/profile.jpeg';
import './Sidebar.css';
import mypdf from '../../MD Nahid Murad Abir cv.pdf';
import Typical from 'react-typical';


const Sidebar = () => {
    return (
        <div className= 'sidebar-maindiv'>
            <h5>Md Nahid Murad Abir</h5>
            <hr/>
            <Typical
                loop= {Infinity}
                wrapper='b'
                steps={[
                    "Web Developer 💻",
                    3000,
                    "Web Designer💻",
                    3000,
                    "Open sourcer 🧶",
                    3000,
                    "Traveller ✈",
                    3000,
                    "Brother ",
                ]}
            />
            <hr/>
            <div className="img">
                <img className='img-fluid profile-picture' src={profile} alt="profile picture"/>
            </div>
            
            <div className='personal-information'>
                <p> <span className="dot">o</span> Name: Md Nahid Murad Abir</p>
                <p> <span className="dot">o</span> Birthday: 02 Februar 1998</p>
                <p> <span className="dot">o</span> Job: Freelancer</p>
                <p> <span className="dot">o</span> Email: nahid.muradabir@gmail.com</p>
                <p> <span className="dot">o</span> LinkedIn: dihanabir</p>
            </div>
                <button className='btn cv'><a href={mypdf} download="MD Nahid Murad Abir cv.pdf">Download CV</a></button>
        </div>
    );
};

export default Sidebar;