import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ProjectModal from '../ProjectModal/ProjectModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ project, setProjects }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { img, name } = project;
    AOS.init();
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className="col-lg-4 my-4">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button className="button" variant="primary" onClick={() => setModalShow(true)}>View Project</Button>
                    <ProjectModal
                        project={project}
                        show={modalShow}
                        setProjects={setProjects}
                        onHide={() => setModalShow(false)}
                    ></ProjectModal>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Project;