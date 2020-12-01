import React from 'react';
import { Link } from 'react-router-dom';
import authintication from "../../image/authintication.png";
import context from "../../image/contextapi.jpeg";
import react from "../../image/react.png";
import JavaScript from "../../image/JavaScript.jpg";

const Blog = () => {
    return (
        <div>
            
            <div className="row">
                <div className="col-4">
                    <div className='p-2'>
                        <a target="_blank" href='https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd'>
                            <img className="img-fluid" src={react} alt="blog 1"/>
                        </a>
                        <p>Introduction With React</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='p-2'>
                        <a target="_blank" href='https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd'>
                            <img className="img-fluid" src={authintication} alt="blog 1"/>
                        </a>
                        <p>How to integrate Authentication with firebase</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='p-2'>
                        <a target="_blank" href='https://nahid-muradabir.medium.com/start-a-new-journey-with-javascript-7a4e28761d46'>
                            <img className="img-fluid" src={JavaScript} alt="blog 1"/>
                        </a>
                        <p>Introduction With React</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='p-2'>
                        <a target="_blank" href='https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd'>
                            <img className="img-fluid" src={context} alt="blog 1"/>
                        </a>
                        <p>How to use Context Api</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;