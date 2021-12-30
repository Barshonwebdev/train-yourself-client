import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
        <footer className='footer-part'>                                  {/*footer part */}
            <h5 className='footer-quote text-primary'>Train your mind & Train your body</h5>
            <h6 className="text-success">© Train Yourself 2021 / All Rights Reserved </h6>
        </footer>
        </div>
    );
};

export default Footer;