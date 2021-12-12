import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects/Projects';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Contact></Contact>
            </div>

        </>
    );
};

export default Home;