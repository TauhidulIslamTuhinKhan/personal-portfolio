import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navigaion.css'


const Navigation = () => {
    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" className="header">
                <Container>
                    <NavLink to="/home">
                        <img className="img-fluid" src={logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/home">Home</NavLink>
                        <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/aboutme">About Me</NavLink>
                        <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/blog">Blog</NavLink>
                        <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;