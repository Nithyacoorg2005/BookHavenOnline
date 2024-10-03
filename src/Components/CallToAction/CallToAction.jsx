import React from 'react';
import './CallToAction.css';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate=useNavigate();
    const handlebrowse=()=>{
        navigate('./novels');
    }
    return (
        <section className="cta-section">
            {/* Background video */}
            <video className="background-video" autoPlay muted loop>
                <source src="https://videos.pexels.com/video-files/4873467/4873467-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content over video */}
            <div className="cta-content">
                <h2>Welcome to Book Haven</h2>
                <p>Discover thousands of books, dive into new genres, and explore new adventures.</p>
                <div className="cta-buttons">
                    <button onClick={handlebrowse} className="cta-btn browse-now">Browse Now</button>
                    <button className="cta-btn join-us">Join Us</button>
                    <button className="cta-btn explore-categories">Explore Categories</button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
