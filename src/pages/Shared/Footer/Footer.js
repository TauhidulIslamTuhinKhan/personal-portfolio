import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="lg" />
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="lg" />
    const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <a target="_blank" href="https://www.facebook.com/MdTauhidulIslamTuhinKhan/">{facebookIcon}</a>
                        <span ></span>
                        <span>{linkedInIcon}</span>
                        <span>{twitterIcon}</span>
                    </div>
                    <div className="col-lg-6 text-center">
                        <span> {copyrightIcon}2021 All rights reserved.Tauhidul Islam</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

