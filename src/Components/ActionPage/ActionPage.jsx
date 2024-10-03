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
    videoUrl: 'https://imdb-video.media-imdb.com/vi3047862297/1401497881123-xszl4z-1430608297815.mp4?Expires=1727938601&Signature=M2rD2LqxIJpItUeCPfMg5xVRm9oFGGGS-i7Ia4hDFDqkhASMVXdxi2UF~D31roJY8FcBH4aZvU3P--~9l5NX6fFa1wBeDNmv~vi6DIvU3p3h~p9cDHvkaX1Ri5~f3W-wGC~8~X8nIXo7NB79xBqcoSrzraJGzCDl8~h9WtExzasRyDEJX9HOOL4JcfLYhfhTxQVgRUuEXAwTfUSq2w4StM2pJOWHjYFMR4Eqlm76cP2n7xEEmEg-TY6WsJM5AfnPgpo8K0QkY5jOGepQaaNx6RIQI64dgLBBjokzTs2gPEeDP8~RVlLZewioNOtc9CUOT9vaKKiOajmYwuSOEGNvpw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'The Dark Knight',
    videoUrl: 'https://imdb-video.media-imdb.com/vi324468761/1434659607842-pgv4ql-1563712918369.mp4?Expires=1727938985&Signature=DQPb9SHfLBXP9bj6fbvCwquoWVZB93tuWltGOeP2-Mvw0zsMmJQ9fi502SAngFd0sXS15f9ztupDOe6o6As4dAFJ-PhZISf7-e~m3U6o02l6c9dphBiP7bC3SaE6nOhrUsGDzxi2sNdTnf3F-B9rh~4hawEPpSdNHndb0JAC5cLxy9EPhxvCmx~YF~k69qE7E-6GY1KFaOWjRDh~goihCIzTMJjjPu35p533DAOcG-YzWV2iYs2iFG5AGRXRkHU90sxYBtkB5TTqK9kQOHjE9VBy8Wbd6ooZ5KbJKvWZCiJsxXt-0E-5rXgj2O1mz7IACPEsmA1Gx7BbvzvguL6z5Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Gladiator',
    videoUrl: 'https://imdb-video.media-imdb.com/vi2628367897/1434659607842-pgv4ql-1473794595177.mp4?Expires=1727939229&Signature=cFMD~os4EF3IoszpsRaVqu-lrVYOJVD6KJg1RSAajnN4SZgoeHpbzzri9RESBUBMF83wxJct77BrDjeSjzXJDQC~GfKPhHelNjNbYvXM9TqGujaZ-1Yx-0tH43Uo6u8g7aJDeQ5mgklwC0m22oSKU8C7ecN9Dc4Y7bCp~nnDGkb7PdNqQ3bjCbOngP2LFgBc-x0OGRbzK34H5CYcT3CO6na6uPa3xHGYb1iZm40BQ5AYN7v3yEA-orFnlZhl7f1ZKZX~tZB~W5Oh2SOX9qxHvI1vEaB47-BEZEjM92QUBfyk1Lf8BkudKzC0-n8CwjQUSVZaLAPqXwx4kO4s1hsiwA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'John Wick',
    videoUrl: 'https://imdb-video.media-imdb.com/vi3963799065/1434659607842-pgv4ql-1727736763057.mp4?Expires=1727938465&Signature=e1Z5PJkB38AO8EqGIn7UxWnaKAJT~yh4htlWPi7rgTCepnZE9apbYLMT88WrflRSB26wl7bs0~KHcY3Luw~4V0eUamySDkexa4ckIlywZNp0800hdu48o~I7N5CYMCOvT~puFgj4waHymhtttrNCo07qV26C1A37TTkwtdJPY4cp1c2mxulMo5x1SAO-47lyXpVbJ93XqlMBEoaK3oKEuFqcQJ5XvFErByROZaLIHJHeo4Gg3pjLNAmRNl88aHXMiUhlpDHEiw9oGWfg9thHxDLSwnqrU5-0gLOFOBjdJPRy8i4F~u5Egg8YsV-znp8Mn-EyOY4suC1Yi3ZgIj9RBA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'The Dark Knight',
    videoUrl: 'https://imdb-video.media-imdb.com/vi324468761/1434659607842-pgv4ql-1563712918369.mp4?Expires=1727938985&Signature=DQPb9SHfLBXP9bj6fbvCwquoWVZB93tuWltGOeP2-Mvw0zsMmJQ9fi502SAngFd0sXS15f9ztupDOe6o6As4dAFJ-PhZISf7-e~m3U6o02l6c9dphBiP7bC3SaE6nOhrUsGDzxi2sNdTnf3F-B9rh~4hawEPpSdNHndb0JAC5cLxy9EPhxvCmx~YF~k69qE7E-6GY1KFaOWjRDh~goihCIzTMJjjPu35p533DAOcG-YzWV2iYs2iFG5AGRXRkHU90sxYBtkB5TTqK9kQOHjE9VBy8Wbd6ooZ5KbJKvWZCiJsxXt-0E-5rXgj2O1mz7IACPEsmA1Gx7BbvzvguL6z5Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'Gladiator',
    videoUrl: 'https://imdb-video.media-imdb.com/vi2628367897/1434659607842-pgv4ql-1473794595177.mp4?Expires=1727939229&Signature=cFMD~os4EF3IoszpsRaVqu-lrVYOJVD6KJg1RSAajnN4SZgoeHpbzzri9RESBUBMF83wxJct77BrDjeSjzXJDQC~GfKPhHelNjNbYvXM9TqGujaZ-1Yx-0tH43Uo6u8g7aJDeQ5mgklwC0m22oSKU8C7ecN9Dc4Y7bCp~nnDGkb7PdNqQ3bjCbOngP2LFgBc-x0OGRbzK34H5CYcT3CO6na6uPa3xHGYb1iZm40BQ5AYN7v3yEA-orFnlZhl7f1ZKZX~tZB~W5Oh2SOX9qxHvI1vEaB47-BEZEjM92QUBfyk1Lf8BkudKzC0-n8CwjQUSVZaLAPqXwx4kO4s1hsiwA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'John Wick',
    videoUrl: 'https://imdb-video.media-imdb.com/vi3963799065/1434659607842-pgv4ql-1727736763057.mp4?Expires=1727938465&Signature=e1Z5PJkB38AO8EqGIn7UxWnaKAJT~yh4htlWPi7rgTCepnZE9apbYLMT88WrflRSB26wl7bs0~KHcY3Luw~4V0eUamySDkexa4ckIlywZNp0800hdu48o~I7N5CYMCOvT~puFgj4waHymhtttrNCo07qV26C1A37TTkwtdJPY4cp1c2mxulMo5x1SAO-47lyXpVbJ93XqlMBEoaK3oKEuFqcQJ5XvFErByROZaLIHJHeo4Gg3pjLNAmRNl88aHXMiUhlpDHEiw9oGWfg9thHxDLSwnqrU5-0gLOFOBjdJPRy8i4F~u5Egg8YsV-znp8Mn-EyOY4suC1Yi3ZgIj9RBA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
  },
  {
    title: 'John Wick',
    videoUrl: 'https://imdb-video.media-imdb.com/vi3963799065/1434659607842-pgv4ql-1727736763057.mp4?Expires=1727938465&Signature=e1Z5PJkB38AO8EqGIn7UxWnaKAJT~yh4htlWPi7rgTCepnZE9apbYLMT88WrflRSB26wl7bs0~KHcY3Luw~4V0eUamySDkexa4ckIlywZNp0800hdu48o~I7N5CYMCOvT~puFgj4waHymhtttrNCo07qV26C1A37TTkwtdJPY4cp1c2mxulMo5x1SAO-47lyXpVbJ93XqlMBEoaK3oKEuFqcQJ5XvFErByROZaLIHJHeo4Gg3pjLNAmRNl88aHXMiUhlpDHEiw9oGWfg9thHxDLSwnqrU5-0gLOFOBjdJPRy8i4F~u5Egg8YsV-znp8Mn-EyOY4suC1Yi3ZgIj9RBA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
