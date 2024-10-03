import React from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
    const newBooks = [
        {
            title: 'The Midnight Library',
            author: 'Matt Haig',
            image: 'https://media.npr.org/assets/img/2020/09/30/815-u8gacyl_custom-56b93f54c3bde063acf1f74a343642b8c77c57c3-s1400.jpg',
        },
        {
            title: 'The Vanishing Half',
            author: 'Brit Bennett',
            image: 'https://th.bing.com/th/id/OIP.3JPsS1iXdTdD0yrlTdL0_AHaL0?rs=1&pid=ImgDetMain',
        },
        {
            title: 'Klara and the Sun',
            author: 'Kazuo Ishiguro',
            image: 'https://th.bing.com/th/id/OIP.q7EUYN78D9PoCm0IIr2XrgHaLZ?rs=1&pid=ImgDetMain',
        },
        {
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            image: 'https://th.bing.com/th/id/OIP.EtA7ABHoWjd0CqQY6a-7BAHaJv?rs=1&pid=ImgDetMain',
        },
    ];

    return (
        <section className="new-arrivals">
            <h2>New Arrivals</h2>
            <div className="new-books-grid">
                {newBooks.map((book, index) => (
                    <div className="new-book-card" key={index}>
                        <img src={book.image} alt={book.title} className="new-book-cover" />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
