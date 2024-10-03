import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom'; 

const Categories = () => {
    const genres = [
        { name: 'Novels', path: '/novels' },
        { name: 'Drama', path: '/drama' },
        { name: 'Action', path: '/action' },
        { name: 'Horror', path: '/horror' },
    ];

    return (
        <section className="categories-section">
            <h2>Explore Genres</h2>
            <div className="genres-grid">
                {genres.map((genre, index) => (
                    <Link to={genre.path} className="genre-card" key={index}>
                        <div className="genre-card-content">
                            <h3>{genre.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
