import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 >BOOK HAVEN ONLINE, where every book opens the door to a new adventure!</h1>
                <img style={{height:"150px",weight:"200px"}} src="https://media.tenor.com/lP15mVNhpmQAAAAi/welcome.gif" alt=""/>
                <p>Discover new stories,Uncover fresh tales, thrilling adventures, and a world of knowledge.</p>
            </div>
        </div>
    );
};

export default HeroSection;
