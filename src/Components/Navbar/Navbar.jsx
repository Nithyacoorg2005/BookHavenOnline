import React from 'react';
import './Navbar.css';
import logo from "../../images/image.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <Link to ="/novels">Novels</Link>
                    <div className="dropdown-content">
                        <Link to="/novels/fantasy">Fantasy</Link>
                        <Link to="/novels/romance">Romance</Link>
                        <Link to="/novels/mystery">Mystery</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/drama">Drama</Link>
                    <div className="dropdown-content">
                        <Link to="/drama/classic">Classic</Link>
                        <Link to="/drama/contemporary">Contemporary</Link>
                    </div>
                </div>
                <Link to="/action">Action</Link>
                <Link to="/horror">Horror</Link>
                <Link to="/about">About Us</Link>
                <Link to="/faqs">FAQs</Link>
            </div>
            <div className="button-container">
                <button onClick={handleContact} className="contact-button">Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;