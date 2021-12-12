import React from 'react';
import { Modal } from 'react-bootstrap';
// import { useParams } from 'react-router';

const ProjectModal = ({ project, show, onHide, setProjects }) => {
    const { img, name, description, build, tecnology, liveSite } = project;

    return (
        <div className="container">
            <Modal
                show={show}
                onHide={onHide}
                setProjects={setProjects}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <img className="img-fluid" src={img} alt="" />
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Created : {build}</p>
                    <p>Technologies Used : {tecnology}</p>
                    <a target="_blank" href={liveSite}>Live Site</a>

                </Modal.Body>

            </Modal>
        </div>
    );
};

export default ProjectModal;