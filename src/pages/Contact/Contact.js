import React from 'react';
import './Conact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../ContactForm/ContactForm'



const Contact = () => {
    const iconPhone = <FontAwesomeIcon icon={faPhone} size="4x" />
    const iconLocation = <FontAwesomeIcon icon={faMapMarker} size="4x" />
    const iconMail = <FontAwesomeIcon icon={faMailBulk} size="4x" />


    return (
        <>

            <div className="container my-5 pt-5">
                <h2 className="text-center mb-5">Contact With Me</h2>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h4 className="text-center">Get In Touch With Me</h4>
                        <div className="d-flex align-items-center my-5">
                            <span>{iconLocation}</span>
                            <p className="ms-5">Satiany, Phultala, Khulna, Bangladesh</p>
                        </div>
                        <div className="d-flex align-items-center my-5" >
                            <span>{iconPhone}</span>
                            <p className="ms-5">+8801876480061</p>
                        </div>
                        <div className="d-flex align-items-center my-5" >
                            <span>{iconMail}</span>
                            <p className="ms-5">tuhin0411@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;