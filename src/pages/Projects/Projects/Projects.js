import React, { useState } from 'react';
import Project from '../Project/Project';

const projectsData = [
    {
        "key": "10000101",
        "name": "Camera Museum || E-Commerce",
        "img": "https://i.ibb.co/QXXPwBC/camera-museum.png",
        "build": "November 2021",
        "liveSite": "https://nobarun-camera-museum.web.app/",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication, Node JS, Express JS, MongoDB, Heroku",
        "description": "An e-commerce website build with MERN Stack. This is a camera selling website. Users can easily make an order from products section. Also they can view their order progress before payment and can cancel order in the user dashboard. Users can make dynamic website review. An admin can add a product in the website."
    }, {
        "key": "10000102",
        "name": "Nobarun Tour || Tourism Website",
        "img": "https://i.ibb.co/pRdSynV/tour.png",
        "build": "October 2021",
        "liveSite": "https://nobarun-tour.web.app/",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication, Node JS, Express JS, MongoDB",
        "description": "This is a simple Tourism related website. You can book toursm pakages from anywhere. You can see booking information like booking price, different location without login. If you want to book any pakage you have to login first. Then you can book your desired service. You have to give extra information like your phone, address when you book any service. An admin can add a pakage to the website."
    },

    {
        "key": "10000103",
        "name": "Nobarun Care || Health Service",
        "img": "https://i.ibb.co/YycMstg/care.png",
        "build": "October 2021",
        "liveSite": "https://nobarun-camera-museum.web.app/",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication.",
        "description": "This is a simple Healthcare website. Users can take a appoinment with a spealist using email and password og google login. Appoinment functionality did not add yet."
    },

    {
        "key": "10000104",
        "name": "Camera Museum || E-Commerce",
        "img": "https://i.ibb.co/QXXPwBC/camera-museum.png",
        "build": "November 2021",
        "liveSite": "https://i.ibb.co/QXXPwBC/camera-museum.png",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication, Node JS, Express JS, MongoDB, Heroku",
        "description": "An e-commerce website build with MERN Stack. This is a camera selling website. Users can easily make an order from products section. Also they can view their order progress before payment and can cancel order in the user dashboard. Users can make dynamic website review. An admin can add a product in the website."
    },
    {
        "key": "10000105",
        "name": "Nobarun Tour || Tourism Website",
        "img": "https://i.ibb.co/pRdSynV/tour.png",
        "build": "October 2021",
        "liveSite": "https://nobarun-tour.web.app/",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication, Node JS, Express JS, MongoDB",
        "description": "This is a simple Tourism related website. You can book toursm pakages from anywhere. You can see booking information like booking price, different location without login. If you want to book any pakage you have to login first. Then you can book your desired service. You have to give extra information like your phone, address when you book any service. An admin can add a pakage to the website."
    },

    {
        "key": "10000106",
        "name": "Nobarun Care || Health Service",
        "img": "https://i.ibb.co/YycMstg/care.png",
        "build": "October 2021",
        "liveSite": "https://nobarun-camera-museum.web.app/",
        "tecnology": "React, React-Router, React Bootstrap, Firebase Authentication.",
        "description": "This is a simple Healthcare website. Users can take a appoinment with a spealist using email and password og google login. Appoinment functionality did not add yet."
    }




]

const Projects = () => {
    const [projects, setProjects] = useState([]);
    return (
        <div className="project-section my-5">
            <div className="container">
                <h2 className="text-center">My Latest Projects</h2>
                <div className="row my-auto">
                    {
                        projectsData.map(project => <Project
                            key={project.key}
                            project={project}
                            setProjects={setProjects}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;