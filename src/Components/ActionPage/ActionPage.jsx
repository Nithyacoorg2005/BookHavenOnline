import React, { useState } from 'react';
import './ActionPage.css';

const books = [
  {
    title: 'The Bourne Identity',
    author: 'Robert Ludlum',
    link: '/downloads/bourne-identity.pdf',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    link: '/downloads/hunger-games.pdf',
  },
  {
    title: 'Die Hard: Year One',
    author: 'Howard Chaykin',
    link: '/downloads/die-hard-year-one.pdf',
  },
  {
    title: 'Mad Max: Fury Road',
    author: 'George Miller',
    link: '/downloads/mad-max-fury-road.pdf',
  },
  {
    title: 'The Bourne Identity',
    author: 'Robert Ludlum',
    link: '/downloads/bourne-identity.pdf',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    link: '/downloads/hunger-games.pdf',
  },
  {
    title: 'Die Hard: Year One',
    author: 'Howard Chaykin',
    link: '/downloads/die-hard-year-one.pdf',
  },
  {
    title: 'Mad Max: Fury Road',
    author: 'George Miller',
    link: '/downloads/mad-max-fury-road.pdf',
  },
];

const movies = [
  {
    title: 'Mad Max: Fury Road',
    videoUrl: 'https://cdn.jwplayer.com/previews/dAXmJozy',
  },
  {
    title: 'The Dark Knight',
    videoUrl: 'https://cdn.jwplayer.com/previews/K5k79IX7',
  },
  {
    title: 'Gladiator',
    videoUrl: 'https://cdn.jwplayer.com/previews/36ga0pDX',
  },
  {
    title: 'John Wick',
    videoUrl: 'https://imdb-video.media-imdb.com/vi3877612057/1434659607842-pgv4ql-1616202333253.mp4?Expires=1728061659&Signature=PIYEYOASYd0tujnnrTx~VmonBYHDBffz3Cj9ZWUh1ZBcrVm~G~0JKdvJ-oD6deEVaIi8Wagd7y~hvB0WzxhicqbdU3U~oJ1-N2OGNOqL1gkuZ4tEQGsiINohgyptkNexWYcBkOYS2AS8v76F4UbYswc4~tDHXuvbrnMU8BnIkkQyuSpuWElTKMyqIWIyktXDmnHYuu9wYbAkwj-NpMa-TjBMlCzortsOWaPjY7-ESAR9lKn013x0rqiq-ADDI6JKXo8A6VA9M1pFfq0iFdj82pt2XGYeCY0T244ShsYRq99MewliKFeVRKm8q2~Z81YLH8Fp5J6zXdJJN9-xr7Ge3w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
 
];

const ActionPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="action-page-container">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/7777759/7777759-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header Section */}
      <header className="action-page-header">
        <h1 style={{marginTop:"110px"}}>Action-Packed Adventures</h1>
        <p>Download thrilling action books and watch award-winning movies!</p>
      </header>

      {/* Downloadable Books Section */}
      <section style={{marginTop:"70px"}} className="action-books-section">
        <h2>Download Action Books</h2>
        <div style={{marginTop:"50px"}} className="books-list">
          {books.map((book, index) => (
            <div className="book" key={index}>
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <a href={book.link} download>
                <button className="download-btn">Download</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Award-Winning Movies Section */}
      <section className="action-movies-section">
        <h2  style={{marginTop:"150px",marginBottom:"50px"}}>Famous Award-Winning Action Movies</h2>
        <div className="movies-list">
          {movies.map((movie, index) => (
            <div className="movie" key={index} onClick={() => handleMovieClick(movie)}>
              <h3>{movie.title}</h3>
              <div className="thumbnail">🎬</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Playing Movie */}
      {selectedMovie && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedMovie.title}</h2>
            <iframe
              width="100%"
              height="400px"
              src={selectedMovie.videoUrl}
              title={selectedMovie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionPage;
