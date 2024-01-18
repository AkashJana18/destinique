import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left-side */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="logo" width={120} />
                <span>Our Vision is to make all people <br /> tour the best place for them.</span>
            </div>

            {/* right-side */}
            <div className="flexColStart f-right">
                <span className='primaryText' >Information</span>
                <span className='secondaryText' >Mumbai, India</span>
                <div className="flexCenter f-menu">
                    <span>LocaleHub</span>
                    <span>Emergency</span>
                    <span>Services</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
