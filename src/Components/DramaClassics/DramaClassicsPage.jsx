import React from 'react';
import './DramaClassicsPage.css'; // Import the CSS for styling

const DramaClassicsPage = () => {
  return (
    <div className="drama-classics-container">
      {/* Background video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/6896361/6896361-uhd_2732_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="drama-classics-content">
        <header className="drama-classics-header">
          <h1 style={{marginTop:"30px"}}>Classic Drama Highlights</h1>
          <p>Explore the powerful narratives and timeless themes of these classic dramas.</p>
        </header>

        {/* Drama Books Section */}
        <section className="drama-classics-books">
          <div className="book">
            <h2>Death of a Salesman</h2>
            <p>By Arthur Miller</p>
            <p>A timeless drama about the American Dream and the struggles of an aging salesman.</p>
          </div>

          <div className="book">
            <h2>A Streetcar Named Desire</h2>
            <p>By Tennessee Williams</p>
            <p>A story of class conflict, desire, and mental instability in New Orleans.</p>
          </div>

          <div className="book">
            <h2>Hamlet</h2>
            <p>By William Shakespeare</p>
            <p>A tale of revenge, tragedy, and moral dilemmas.</p>
          </div>

          <div className="book">
            <h2>The Crucible</h2>
            <p>By Arthur Miller</p>
            <p>A dramatization of the Salem witch trials, exploring fear and mass hysteria.</p>
          </div>

          <div className="book">
            <h2>Waiting for Godot</h2>
            <p>By Samuel Beckett</p>
            <p>A groundbreaking play that explores existentialism and the human condition.</p>
          </div>

          <div className="book">
            <h2>Long Day's Journey Into Night</h2>
            <p>By Eugene O'Neill</p>
            <p>A semi-autobiographical exploration of addiction and family dynamics.</p>
          </div>

          <div className="book">
            <h2>Macbeth</h2>
            <p>By William Shakespeare</p>
            <p>A gripping story of ambition, power, and downfall.</p>
          </div>

          <div className="book">
            <h2>The Glass Menagerie</h2>
            <p>By Tennessee Williams</p>
            <p>A memory play that explores family dynamics and personal aspirations.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DramaClassicsPage;
