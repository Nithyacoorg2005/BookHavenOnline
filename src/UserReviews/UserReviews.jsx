import React from 'react';
import './UserReviews.css';

const UserReviews = () => {
    const reviews = [
        {
            name: 'Sarah Johnson',
            review: 'I love the variety of novels available on this platform! It’s my go-to place for weekend reads.',
            book: 'The Midnight Library',
            image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'James Stewart',
            review: 'The user experience is amazing, and I always find new books to read. Highly recommend this site!',
            book: 'The Vanishing Half',
            image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'Emily Davis',
            review: 'The best online library experience! The recommendations are spot on and the interface is super smooth.',
            book: 'Klara and the Sun',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'John Doe',
            review: 'This site has completely changed how I find new books. Fantastic layout and selection!',
            book: 'Project Hail Mary',
            image: 'https://images.pexels.com/photos/6314979/pexels-photo-6314979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    return (
        <section className="user-reviews">
            <h2>User Reviews & Testimonials</h2>
            <div className="reviews-grid">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <img src={review.image} alt={review.name} className="reviewer-image" />
                        <h3>{review.name}</h3>
                        <p className="book-title">Favorite Book: {review.book}</p>
                        <p className="review-text">"{review.review}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserReviews;
