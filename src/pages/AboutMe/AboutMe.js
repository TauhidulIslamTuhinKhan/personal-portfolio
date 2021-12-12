import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    AOS.init();
    return (
        <div className="container my-5">
            <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-center">About Me</h2>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div data-aos="fade-right" data-aos-duration="1500" className="about-text">
                        <p className="my-4">I am a front-end web developer. I have an exquisite blend of experience in the web
                            development field. I'm Ambitious and Passionate, Punctual, Focused and organized,
                            Experienced, and easy to work with.</p>
                        <Link to="/contact"><Button className="button">Hire Me</Button></Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div data-aos="fade-down" data-aos-duration="1500" className="img">
                        <img className="img-fluid" src="https://i.ibb.co/Z14RsbJ/tk21.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;