import React from 'react';
import './Romance.css'; // Add styles for the background video

const Romance = () => {
  return (
    <div className="romance-container">
      {/* Background video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/4887043/4887043-uhd_2732_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="romance-content">
        <header className="romance-header">
          <h1>Romance Novels</h1>
          <p style={{marginTop:"20px"}}>
            Dive into the world of love, passion, and heartfelt emotions. These stories will sweep you off your feet!
          </p>
        </header>

        {/* Romance Books Section */}
        <section style={{marginTop:"70px"}} className="romance-books">
          <div className="book">
            <h2>Pride and Prejudice</h2>
            <p>By Jane Austen</p>
            <p>A tale of love and misunderstanding in the British Regency era.</p>
          </div>

          <div className="book">
            <h2>Romeo and Juliet</h2>
            <p>By William Shakespeare</p>
            <p>The most famous love story of all time.</p>
          </div>

          <div className="book">
            <h2>Outlander</h2>
            <p>By Diana Gabaldon</p>
            <p>A mix of historical romance and time travel adventure.</p>
          </div>

          <div className="book">
            <h2>Me Before You</h2>
            <p>By Jojo Moyes</p>
            <p>An emotionally gripping story of love and loss.</p>
          </div>

          <div className="book">
            <h2>The Notebook</h2>
            <p>By Nicholas Sparks</p>
            <p>A story of everlasting love that endures all trials and hardships.</p>
          </div>

          <div className="book">
            <h2>The Fault in Our Stars</h2>
            <p>By John Green</p>
            <p>A heart-wrenching story about young love and dealing with tragedy.</p>
          </div>

          <div className="book">
            <h2>Twilight</h2>
            <p>By Stephenie Meyer</p>
            <p>A story of forbidden love between a human and a vampire.</p>
          </div>

          <div className="book">
            <h2>Eleanor & Park</h2>
            <p>By Rainbow Rowell</p>
            <p>A quirky and tender young adult romance about first love.</p>
          </div>
        </section>

        {/* Recommended Authors Section */}
        <section className="recommended-authors">
          <h2 style={{margin:"60px"}}>Recommended Romance Authors</h2>
          <ul>
            <li><strong>Jane Austen</strong>: A pioneer of romantic fiction known for her wit and keen social commentary.</li>
            <li><strong>Nicholas Sparks</strong>: Master of emotional and tear-jerking romance novels.</li>
            <li><strong>Diana Gabaldon</strong>: Famous for blending historical fiction with passionate love stories.</li>
            <li><strong>Jojo Moyes</strong>: Known for her deep, heartwarming, and sometimes tragic love stories.</li>
            <li><strong>Julia Quinn</strong>: Author of the popular Bridgerton series, known for lighthearted and charming love stories.</li>
            <li><strong>Nora Roberts</strong>: One of the most prolific romance authors, with a focus on contemporary love stories.</li>
          </ul>
        </section>

        {/* Romantic Tropes Section */}
        <section className="romantic-tropes">
          <h2>Popular Romantic Tropes</h2>
         
          <ul>
            <li><strong>Enemies to Lovers:</strong> Two people who start off disliking each other but slowly fall in love.</li>
            <li><strong>Friends to Lovers:</strong> Long-time friends who eventually realize they are in love.</li>
            <li><strong>Forbidden Love:</strong> A romance that is discouraged or impossible due to external factors, such as family or society.</li>
            <li><strong>Second Chance Romance:</strong> Two people who were once in love, separated, and find their way back to each other.</li>
            <li><strong>Fake Relationship:</strong> Characters pretend to be in a relationship, but end up falling for each other for real.</li>
           
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Romance;
