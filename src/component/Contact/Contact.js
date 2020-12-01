import React from 'react';

const Contact = () => {
    return (
        <div className="container-fluid" style={{ background: 'lightgray', height: '150vh' }}>
            <h1 className='text-center text-white pt-5' >Send Me an email</h1>
            <div className="container container-fluid" >
                <form action="mailto:nahid.muradabir@gmail.com" method="post" encType="text/plain" className="p-5" >
                    <label forhtml="name" className="text-light">Name</label>
                    <input type="text" name="name" className="form-control" /> <br />
                    <label forhtml="email" className="text-light">Email</label>
                    <input type="text" name="email" className="form-control" /> <br />
                    <label forhtml="comment" className="text-light">Comment</label>
                    <textarea type="text-box" name="message" rows="10" className="form-control" /> <br /> <br />
                    <input type="submit" value="Send" className="btn pr-5 pl-5" style={{ boxShadow: '7px 7px 105px white' }} />
                    <input type="reset" value="Reset" className="btn  ml-5 pr-5 pl-5" style={{ boxShadow: '7px 7px 105px white' }} />
                </form >
            </div>

        </div >
    );
};

export default Contact;