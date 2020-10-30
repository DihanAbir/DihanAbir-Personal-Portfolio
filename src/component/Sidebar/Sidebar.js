import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../image/profile.jpeg';
import './Sidebar.css';
import mypdf from '../../MD Nahid Murad Abir cv.pdf';


const Sidebar = () => {
    return (
        <div>
            <h5>Md Nahid Murad Abir</h5>
            <p>Junior Web Developer</p>
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
                <button className='btn btn-warning cv'><a href={mypdf} download="MD Nahid Murad Abir cv.pdf">Download CV</a></button>
                
        
            
        </div>
    );
};

export default Sidebar;