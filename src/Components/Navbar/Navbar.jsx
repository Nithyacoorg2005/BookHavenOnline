import React from 'react';
import './Navbar.css';
import logo from "../../images/image.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleContact=()=>{
        navigate('./contact-button')
    }
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <div className="dropdown">
                    <a href="/novels">Novels</a>
                    <div className="dropdown-content">
                        <a href="/novels/fantasy">Fantasy</a>
                        <a href="/novels/romance">Romance</a>
                        <a href="/novels/mystery">Mystery</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/drama">Drama</a>
                    <div className="dropdown-content">
                        <a href="/drama/classic">Classic</a>
                        <a href="/drama/contemporary">Contemporary</a>
                    </div>
                </div>
                <a href="/action">Action</a>
                <a href="/horror">Horror</a>
                <a href="/about">About Us</a>
                <a href="/faqs">FAQs</a>
            </div>
            <div className="button-container">
                <button onClick={handleContact} className="contact-button">Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;