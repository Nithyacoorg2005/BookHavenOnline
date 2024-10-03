import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p> &copy; Nithyashree CS @ BooksHaven Online 2024</p>
                <p>All Rights are Reserved</p>
                <div className="social-links">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=Og1ujXM2C1AJHQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa5%2fInstagram_icon.png&ehk=1%2fZWXYn2nN%2fR80TOtcKH5SsdLkkUvMLrB%2fHUXRDHk9I%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://toppng.com/uploads/preview/twitter-x-new-logo-symbol-png-11692479881mg8srkkgy5.webp" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" alt="Instagram" className="social-icon" />
                    </a>
                    {/* Add more social media links here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
