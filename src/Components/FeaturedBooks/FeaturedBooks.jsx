import React from 'react';
import './FeaturedBooks.css';

const FeaturedBooks = () => {
    const books = [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://www.themoviedb.org/t/p/original/ddzcKLZsz1Z3eGvSTrFYxFfCiJq.jpg',
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'https://th.bing.com/th/id/OIP.jvYLjJvwkKBnI2svjjyKigHaLI?rs=1&pid=ImgDetMain',
        },
        {
            title: '1984',
            author: 'George Orwell',
            image: 'https://th.bing.com/th/id/OIP.pMdOi2YRz9MymeBNSBS8hgHaK_?rs=1&pid=ImgDetMain',
        },
        {
            title: 'Moby Dick',
            author: 'Herman Melville',
            image: 'https://m.media-amazon.com/images/I/81Baf0m5rBL._SL1500_.jpg',
        },
    ];

    return (
        <section className="featured-books">
            <h2 style={{fontSize:"35px"}}>Featured Books</h2>
            <div style={{marginTop:"50px"}} className="book-grid">
                {books.map((book, index) => (
                    <div className="book-card" key={index}>
                        <img src={book.image} alt={book.title} className="book-cover" />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBooks;
