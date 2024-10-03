import React, { useState } from 'react';
import './HorrorPage.css';

const horrorBooks = [
  { title: 'Dracula', author: 'Bram Stoker', downloadLink: '#' },
  { title: 'Frankenstein', author: 'Mary Shelley', downloadLink: '#' },
  { title: 'The Shining', author: 'Stephen King', downloadLink: '#' },
  { title: 'Pet Sematary', author: 'Stephen King', downloadLink: '#' },
  { title: 'The Haunting of Hill House', author: 'Shirley Jackson', downloadLink: '#' },
  { title: 'The Shining', author: 'Stephen King', downloadLink: '#' },
  { title: 'Pet Sematary', author: 'Stephen King', downloadLink: '#' },
  { title: 'The Haunting of Hill House', author: 'Shirley Jackson', downloadLink: '#' },
];

const horrorMovies = [
  { title: 'The Exorcist', year: 1973, videoUrl: 'https://www.youtube.com/embed/0AGT8WbVJlg' },
  { title: 'Get Out', year: 2017, videoUrl: 'https://www.youtube.com/embed/sRfnevzM9kQ' },
  { title: 'The Silence of the Lambs', year: 1991, videoUrl: 'https://www.youtube.com/embed/QU9de9FZRlA' },
  { title: 'Hereditary', year: 2018, videoUrl: 'https://www.youtube.com/embed/V6wWKNij_1M' },
  { title: 'The Exorcist', year: 1973, videoUrl: 'https://www.youtube.com/embed/0AGT8WbVJlg' },
  { title: 'Get Out', year: 2017, videoUrl: 'https://www.youtube.com/embed/sRfnevzM9kQ' },
  { title: 'The Silence of the Lambs', year: 1991, videoUrl: 'https://www.youtube.com/embed/QU9de9FZRlA' },
  { title: 'Hereditary', year: 2018, videoUrl: 'https://www.youtube.com/embed/V6wWKNij_1M' },
];

const HorrorPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="horror-page-container">
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/5436094/5436094-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <header className="horror-header">
          <h1 style={{marginTop:"100px"}}>Horror World</h1>
          <p>Discover the best horror books and award-winning horror movies.</p>
        </header>

        {/* Horror Books Section */}
        <section className="horror-books">
          <h2 style={{marginTop:"75px",paddingBottom:"50px"}}>Download Horror Books</h2>
          <div className="book-list">
            {horrorBooks.map((book, index) => (
              <div className="book" key={index}>
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <a href={book.downloadLink} download  className="download-btn">Download</a>
              </div>
            ))}
          </div>
        </section>
        <img src="https://media.tenor.com/Gq4tbM5vchYAAAAi/float-the-nun.gif" alt="floating gif" class="floating-image" />


        {/* Horror Movies Section */}
        <section className="horror-movies">
          <h2 style={{marginTop:"300px",paddingBottom:"50px"}}>Award-Winning Horror Movies</h2>
          <div className="movie-list">
            {horrorMovies.map((movie, index) => (
              <div className="movie" key={index} onClick={() => openModal(movie)}>
                <h3>{movie.title} ({movie.year})</h3>
                <button className="watch-btn">Watch Trailer</button>
              </div>
            ))}
          </div>
        </section>
       <img src="https://media.tenor.com/w-sSlwnpFScAAAAi/scary-ghost.gif" alt="/"/>

        {/* Modal for Movie Trailer */}
        {selectedMovie && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{selectedMovie.title}</h2>
              <iframe
                width="100%"
                height="315"
                src={selectedMovie.videoUrl}
                title={selectedMovie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorrorPage;
