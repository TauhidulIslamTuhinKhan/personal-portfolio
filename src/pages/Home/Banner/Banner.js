import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'

const Banner = () => {
    const downArrowIcon = <FontAwesomeIcon icon={faArrowAltCircleDown} />
    AOS.init();
    return (
        <div className="container pt-5 banner">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div data-aos="fade-down" data-aos-duration="1500" className="img">
                        <img className="img-fluid" src="https://i.ibb.co/Gpd4nBQ/tk1.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex justify-content-start ps-3 pt-5">
                        <div data-aos="fade-left" data-aos-duration="1500" className="banner-text">
                            <h3>Hi ! I am</h3>
                            <h1>Md. Tauhidul Islam</h1>
                            <h4 className="py-3">Web Developer (MERN Stark)</h4>
                            <Button className="button" target="_blank" href="https://drive.google.com/file/d/1aqcg3VC-Gvwvq5CxWU_NZvgAhcr05PjQ/view?usp=sharing"> {downArrowIcon} Download Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;