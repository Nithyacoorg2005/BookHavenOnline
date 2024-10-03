import React from 'react';
import './MysteryPage.css';

const Mystery = () => {
  return (
    <div className="mystery-container">
      {/* Background video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/5738711/5738711-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mystery Content Below Navbar */}
      <div className="mystery-content">
        <header className="mystery-header">
          <h1>Mystery Novels</h1>
          <p>Immerse yourself in suspenseful stories full of intrigue, clues, and thrilling revelations.</p>
        </header>

        {/* Mystery Books Section */}
        <section className="mystery-books">
          <h2>Top Mystery Books</h2>
          <div className="book">
            <h3>The Girl with the Dragon Tattoo</h3>
            <p>By Stieg Larsson</p>
            <p>An intense thriller involving a journalist and a hacker uncovering dark secrets.</p>
          </div>

          <div className="book">
            <h3>Gone Girl</h3>
            <p>By Gillian Flynn</p>
            <p>A chilling psychological thriller about the disappearance of a woman and her husband’s secrets.</p>
          </div>

          <div className="book">
            <h3>Sherlock Holmes Series</h3>
            <p>By Arthur Conan Doyle</p>
            <p>Follow the famous detective as he solves complex cases with intellect and deduction.</p>
          </div>

          <div className="book">
            <h3>The Da Vinci Code</h3>
            <p>By Dan Brown</p>
            <p>A gripping mystery full of puzzles and historical intrigue that questions religious history.</p>
          </div>

          <div className="book">
            <h3>Big Little Lies</h3>
            <p>By Liane Moriarty</p>
            <p>A psychological thriller about secrets, lies, and murder in a close-knit community.</p>
          </div>
        </section>

        {/* Famous Mystery Authors Section */}
        <section className="mystery-authors">
          <h2>Famous Mystery Authors</h2>
          <ul>
            <li><strong>Agatha Christie:</strong> The Queen of Mystery, known for works like "Murder on the Orient Express" and "And Then There Were None".</li>
            <li><strong>Arthur Conan Doyle:</strong> Creator of Sherlock Holmes, one of the most iconic detectives in literature.</li>
            <li><strong>Gillian Flynn:</strong> Modern thriller author with dark and psychological suspense novels.</li>
            <li><strong>Patricia Highsmith:</strong> Known for psychological suspense and her series about Tom Ripley.</li>
            <li><strong>Dan Brown:</strong> Famous for blending history, religion, and conspiracy in his fast-paced thrillers.</li>
          </ul>
        </section>

        {/* Mystery Sub-genres Section */}
        <section className="mystery-subgenres">
          <h2>Popular Mystery Sub-genres</h2>
          <p style={{paddingBottom:"20px"}}>Explore various sub-genres of mystery that will keep you on the edge of your seat:</p>
          <ul>
            <li><strong>Cozy Mysteries:</strong> Light-hearted mysteries often set in small towns with amateur sleuths.</li>
            <li><strong>Detective Fiction:</strong> Classic mysteries where a detective solves a crime through investigation and deduction.</li>
            <li><strong>Psychological Thrillers:</strong> Dark, tension-filled stories that explore the mind and emotions of both victims and criminals.</li>
            <li><strong>Legal Thrillers:</strong> Stories that focus on court cases, lawyers, and the legal system with mystery and intrigue.</li>
            <li><strong>Noir:</strong> Gritty, hard-boiled mysteries with morally ambiguous characters in dark settings.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Mystery;
